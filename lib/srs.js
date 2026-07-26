/**
 * Spaced Repetition System (SRS) - SM-2 Algorithm Implementation
 * Based on the SuperMemo SM-2 algorithm with modifications
 */

/**
 * Calculate the next review interval based on user performance
 * @param {Object} params - Current SRS state
 * @param {number} params.repetitionCount - Number of successful reviews
 * @param {number} params.easinessFactor - Difficulty factor (1.3 - 3.0)
 * @param {number} params.interval - Current interval in days
 * @param {number} grade - User grade (0-5)
 *   0: Complete blackout
 *   1: Incorrect response; correct answer remembered on seeing it
 *   2: Incorrect response; correct answer seemed easy to recall
 *   3: Correct response; recalled with serious difficulty
 *   4: Correct response; recalled with some hesitation
 *   5: Perfect response
 * @returns {Object} Updated SRS state
 */
export function calculateSRS({ repetitionCount, easinessFactor, interval }, grade) {
  // Validate inputs
  const validGrade = Math.max(0, Math.min(5, Math.round(grade)))
  let newRepetitionCount = repetitionCount
  let newEasinessFactor = easinessFactor
  let newInterval = interval

  // Update easiness factor (EF)
  // EF' = EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
  newEasinessFactor = easinessFactor + (0.1 - (5 - validGrade) * (0.08 + (5 - validGrade) * 0.02))

  // Ensure EF is at least 1.3
  newEasinessFactor = Math.max(1.3, newEasinessFactor)

  if (validGrade < 3) {
    // Failed: Reset repetition count and use short interval
    newRepetitionCount = 0
    newInterval = 1
  } else {
    // Passed: Increase interval
    newRepetitionCount = repetitionCount + 1

    if (newRepetitionCount === 1) {
      newInterval = 1
    } else if (newRepetitionCount === 2) {
      newInterval = 6
    } else {
      newInterval = Math.round(interval * newEasinessFactor)
    }
  }

  // Calculate next review date
  const nextReviewDate = new Date()
  nextReviewDate.setDate(nextReviewDate.getDate() + newInterval)

  return {
    repetitionCount: newRepetitionCount,
    easinessFactor: Math.round(newEasinessFactor * 100) / 100,
    interval: newInterval,
    nextReviewDate: nextReviewDate.toISOString(),
    grade: validGrade,
  }
}

/**
 * Get the SRS level name based on repetition count
 * @param {number} repetitionCount - Number of successful reviews
 * @returns {string} Level name
 */
export function getSRSLevel(repetitionCount) {
  if (repetitionCount === 0) return 'New'
  if (repetitionCount <= 2) return 'Learning'
  if (repetitionCount <= 4) return 'Review'
  if (repetitionCount <= 6) return 'Mature'
  return 'Mastered'
}

/**
 * Get the SRS level color
 * @param {number} repetitionCount - Number of successful reviews
 * @returns {string} Tailwind color class
 */
export function getSRSColor(repetitionCount) {
  if (repetitionCount === 0) return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
  if (repetitionCount <= 2) return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
  if (repetitionCount <= 4) return 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
  if (repetitionCount <= 6) return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
  return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
}

/**
 * Check if a word is due for review
 * @param {string} nextReviewDate - ISO date string of next review
 * @returns {boolean} True if due for review
 */
export function isDueForReview(nextReviewDate) {
  if (!nextReviewDate) return true
  return new Date(nextReviewDate) <= new Date()
}

/**
 * Sort words by priority for review (due first, then by difficulty)
 * @param {Array} words - Array of vocabulary words with SRS data
 * @returns {Array} Sorted words
 */
export function sortByReviewPriority(words) {
  return [...words].sort((a, b) => {
    const aDue = isDueForReview(a.nextReviewDate)
    const bDue = isDueForReview(b.nextReviewDate)

    if (aDue && !bDue) return -1
    if (!aDue && bDue) return 1

    // Sort by easiness factor (harder words first)
    return (a.easinessFactor || 2.5) - (b.easinessFactor || 2.5)
  })
}

/**
 * Initialize SRS state for a new word
 * @returns {Object} Initial SRS state
 */
export function initializeSRS() {
  return {
    repetitionCount: 0,
    easinessFactor: 2.5,
    interval: 0,
    nextReviewDate: new Date().toISOString(),
  }
}

/**
 * Supabase functions for SRS vocabulary management
 */
import { supabase } from '@/lib/supabase'

/**
 * Get all vocabulary words for a user with SRS data
 * @param {string} userId - User ID
 * @returns {Array} Vocabulary words
 */
export async function getUserVocabulary(userId) {
  const { data, error } = await supabase
    .from('user_vocabulary')
    .select('*')
    .eq('user_id', userId)
    .order('next_review_date', { ascending: true })

  if (error) {
    console.error('Error fetching vocabulary:', error)
    return []
  }

  return data || []
}

/**
 * Add or update a vocabulary word for a user
 * @param {string} userId - User ID
 * @param {string} word - The word
 * @param {string} translation - Arabic translation
 * @param {number} grade - User grade (0-5)
 * @returns {Object} Updated word data
 */
export async function updateVocabularyWord(userId, word, translation, grade) {
  // Get current state
  const { data: existing } = await supabase
    .from('user_vocabulary')
    .select('*')
    .eq('user_id', userId)
    .eq('word', word)
    .single()

  const currentState = existing || {
    repetition_count: 0,
    easiness_factor: 2.5,
    interval: 0,
  }

  // Calculate new SRS state
  const newState = calculateSRS(
    {
      repetitionCount: currentState.repetition_count,
      easinessFactor: currentState.easiness_factor,
      interval: currentState.interval,
    },
    grade
  )

  // Update or insert
  const { data, error } = await supabase
    .from('user_vocabulary')
    .upsert({
      user_id: userId,
      word,
      translation,
      repetition_count: newState.repetitionCount,
      easiness_factor: newState.easinessFactor,
      interval: newState.interval,
      next_review_date: newState.nextReviewDate,
      last_reviewed: new Date().toISOString(),
    }, { onConflict: 'user_id,word' })
    .select()
    .single()

  if (error) {
    console.error('Error updating vocabulary:', error)
    return null
  }

  return data
}

/**
 * Get words due for review
 * @param {string} userId - User ID
 * @param {number} limit - Max words to return
 * @returns {Array} Words due for review
 */
export async function getDueWords(userId, limit = 20) {
  const { data, error } = await supabase
    .from('user_vocabulary')
    .select('*')
    .eq('user_id', userId)
    .lte('next_review_date', new Date().toISOString())
    .order('next_review_date', { ascending: true })
    .limit(limit)

  if (error) {
    console.error('Error fetching due words:', error)
    return []
  }

  return data || []
}

/**
 * Delete a vocabulary word
 * @param {string} userId - User ID
 * @param {string} word - The word to delete
 * @returns {boolean} Success status
 */
export async function deleteVocabularyWord(userId, word) {
  const { error } = await supabase
    .from('user_vocabulary')
    .delete()
    .eq('user_id', userId)
    .eq('word', word)

  if (error) {
    console.error('Error deleting vocabulary:', error)
    return false
  }

  return true
}

/**
 * Get vocabulary statistics
 * @param {string} userId - User ID
 * @returns {Object} Statistics
 */
export async function getVocabularyStats(userId) {
  const { data, error } = await supabase
    .from('user_vocabulary')
    .select('repetition_count, next_review_date')
    .eq('user_id', userId)

  if (error) {
    console.error('Error fetching stats:', error)
    return { total: 0, new: 0, learning: 0, review: 0, mature: 0, mastered: 0, due: 0 }
  }

  const now = new Date()
  const stats = {
    total: data.length,
    new: 0,
    learning: 0,
    review: 0,
    mature: 0,
    mastered: 0,
    due: 0,
  }

  data.forEach(word => {
    const level = getSRSLevel(word.repetition_count)
    stats[level.toLowerCase()]++

    if (word.next_review_date && new Date(word.next_review_date) <= now) {
      stats.due++
    }
  })

  return stats
}
