'use client'
import { motion } from 'framer-motion'
import { useSpeech } from '@/hooks/useSpeech'

export default function Listen({ englishText, question, options, correctIndex, onAnswer }) {
  const { speak } = useSpeech()

  const handleClick = (index) => {
    if (index === correctIndex) {
      onAnswer(true, options[index])
    } else {
      onAnswer(false, options[correctIndex])
    }
  }

  return (
    <div className="space-y-4">
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => speak(englishText)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light text-white text-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/25"
      >
        🔊
      </motion.button>
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((opt, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleClick(i)}
            className="bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-lg p-3.5 text-sm font-semibold text-center transition-colors hover:border-primary"
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
