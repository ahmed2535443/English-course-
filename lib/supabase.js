import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getUserProgress(userId) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error && error.code !== 'PGRST116') {
    console.error('Error loading progress:', error)
    return null
  }

  return data
}

export async function saveUserProgress(userId, progress) {
  const { data, error } = await supabase
    .from('user_progress')
    .upsert({
      user_id: userId,
      ...progress,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' })

  if (error) {
    console.error('Error saving progress:', error)
    return false
  }

  return true
}

export async function getLeaderboard(limit = 100) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('user_id, xp, streak, best_streak, completed_lessons')
    .order('xp', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error loading leaderboard:', error)
    return []
  }

  return data || []
}

export async function getFriends(userId) {
  const { data, error } = await supabase
    .from('friends')
    .select('*')
    .or(`user_id.eq.${userId},friend_id.eq.${userId}`)

  if (error) {
    console.error('Error loading friends:', error)
    return []
  }

  return data || []
}

export async function addFriend(userId, friendId) {
  const { error } = await supabase
    .from('friends')
    .insert({
      user_id: userId,
      friend_id: friendId,
      status: 'pending'
    })

  if (error) {
    console.error('Error adding friend:', error)
    return false
  }

  return true
}

export async function acceptFriend(userId, friendId) {
  const { error } = await supabase
    .from('friends')
    .update({ status: 'accepted' })
    .eq('user_id', friendId)
    .eq('friend_id', userId)

  if (error) {
    console.error('Error accepting friend:', error)
    return false
  }

  return true
}

export async function createChallenge(creatorId, friendId, type, target, startDate, endDate) {
  const { data, error } = await supabase
    .from('challenges')
    .insert({
      creator_id: creatorId,
      friend_id: friendId,
      type,
      target,
      start_date: startDate,
      end_date: endDate,
      status: 'active',
      creator_progress: 0,
      friend_progress: 0
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating challenge:', error)
    return null
  }

  return data
}

export async function getChallenges(userId) {
  const { data, error } = await supabase
    .from('challenges')
    .select('*')
    .or(`creator_id.eq.${userId},friend_id.eq.${userId}`)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error loading challenges:', error)
    return []
  }

  return data || []
}

export async function updateChallengeProgress(challengeId, userId, progress) {
  const { data: existing } = await supabase
    .from('challenges')
    .select('creator_id')
    .eq('id', challengeId)
    .single()

  const isCreator = existing?.creator_id === userId
  
  const { error } = await supabase
    .from('challenges')
    .update(isCreator ? { creator_progress: progress } : { friend_progress: progress })
    .eq('id', challengeId)

  if (error) {
    console.error('Error updating challenge:', error)
    return false
  }

  return true
}
