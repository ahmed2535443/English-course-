'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWebSpeech } from '@/hooks/useWebSpeech'

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function SentenceBuilder({ sentence, translation, onComplete }) {
  const words = sentence.split(' ')
  const [shuffledWords, setShuffledWords] = useState([])
  const [selectedWords, setSelectedWords] = useState([])
  const [isCorrect, setIsCorrect] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const { speak } = useWebSpeech()

  useEffect(() => {
    setShuffledWords(shuffleArray(words.map((w, i) => ({ word: w, id: i }))))
    setSelectedWords([])
    setIsCorrect(null)
    setShowSuccess(false)
  }, [sentence])

  const handleWordClick = (wordObj) => {
    if (isCorrect === true) return

    // Remove from shuffled
    setShuffledWords(prev => prev.filter(w => w.id !== wordObj.id))
    // Add to selected
    setSelectedWords(prev => [...prev, wordObj])
    setIsCorrect(null)
  }

  const handleRemoveWord = (wordObj) => {
    if (isCorrect === true) return

    // Remove from selected
    setSelectedWords(prev => prev.filter(w => w.id !== wordObj.id))
    // Add back to shuffled
    setShuffledWords(prev => [...prev, wordObj])
    setIsCorrect(null)
  }

  const checkSentence = () => {
    const userSentence = selectedWords.map(w => w.word).join(' ')
    const correct = userSentence.toLowerCase() === sentence.toLowerCase()
    setIsCorrect(correct)

    if (correct) {
      setShowSuccess(true)
      speak(sentence)
      if (onComplete) onComplete()
    }
  }

  const reset = () => {
    setShuffledWords(shuffleArray(words.map((w, i) => ({ word: w, id: i }))))
    setSelectedWords([])
    setIsCorrect(null)
    setShowSuccess(false)
  }

  return (
    <div className="solid-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
          🧩 Sentence Builder
        </h3>
        <button onClick={reset} className="btn-ghost text-sm px-3 py-1">
          🔄 Reset
        </button>
      </div>

      {translation && (
        <div className="bg-primary/5 border border-primary/10 rounded-[var(--radius-md)] p-3 mb-4">
          <div className="text-sm text-primary font-semibold direction-ltr">
            📝 {translation}
          </div>
        </div>
      )}

      {/* Drop Zone */}
      <div className={`min-h-[60px] p-3 rounded-[var(--radius-lg)] border-2 border-dashed mb-4 transition-all duration-300 ${
        isCorrect === true
          ? 'border-green-400 bg-green-50 dark:bg-green-950/30'
          : isCorrect === false
          ? 'border-red-400 bg-red-50 dark:bg-red-950/30'
          : 'border-[var(--border-default)] bg-[var(--bg-surface-hover)]'
      }`}>
        <div className="flex flex-wrap gap-2">
          <AnimatePresence mode="popLayout">
            {selectedWords.map((wordObj) => (
              <motion.button
                key={wordObj.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRemoveWord(wordObj)}
                className={`px-4 py-2 rounded-[var(--radius-sm)] font-semibold text-sm transition-colors ${
                  isCorrect === true
                    ? 'bg-green-500 text-white'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {wordObj.word}
              </motion.button>
            ))}
          </AnimatePresence>

          {selectedWords.length === 0 && (
            <div className="text-sm text-[var(--text-muted)] py-2">
              👆 Tap words below to build the sentence
            </div>
          )}
        </div>
      </div>

      {/* Available Words */}
      <div className="mb-4">
        <div className="text-xs font-semibold text-[var(--text-muted)] mb-2">
          Available Words:
        </div>
        <div className="flex flex-wrap gap-2">
          <AnimatePresence mode="popLayout">
            {shuffledWords.map((wordObj) => (
              <motion.button
                key={wordObj.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWordClick(wordObj)}
                className="px-4 py-2 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-default)] text-[var(--text-primary)] font-semibold text-sm hover:border-primary/50 hover:shadow-md transition-all"
              >
                {wordObj.word}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={checkSentence}
          disabled={selectedWords.length !== words.length || isCorrect === true}
          className="btn btn-primary flex-1"
        >
          ✓ Check
        </button>
        <button
          onClick={() => speak(selectedWords.map(w => w.word).join(' '))}
          disabled={selectedWords.length === 0}
          className="btn btn-secondary"
        >
          🔊
        </button>
      </div>

      {/* Success Animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[var(--radius-lg)] p-4 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-4xl mb-2"
            >
              🎉
            </motion.div>
            <div className="text-white font-bold text-lg">Perfect!</div>
            <div className="text-white/80 text-sm">+10 XP earned!</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Feedback */}
      <AnimatePresence>
        {isCorrect === false && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-[var(--radius-md)] p-3"
          >
            <div className="text-sm text-red-600 dark:text-red-400 font-semibold">
              ❌ Not quite! Try again.
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-1 direction-ltr">
              Correct: {sentence}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
