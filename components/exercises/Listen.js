'use client'
import { motion } from 'framer-motion'
import { useSpeech } from '@/hooks/useSpeech'

export default function Listen({ englishText, question, options, correctIndex, onAnswer }) {
  const { speak } = useSpeech()

  return (
    <div className="space-y-5">
      <motion.button
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.04 }}
        onClick={() => speak(englishText)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/25 animate-pulse-glow"
      >
        🔊
      </motion.button>
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((opt, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.97 }}
            onClick={() => onAnswer(i === correctIndex, i === correctIndex ? opt : options[correctIndex])}
            className="bg-[var(--bg-surface)] border border-[var(--border-default)] rounded-[var(--radius-md)] p-4 text-sm font-semibold text-center transition-all duration-200 hover:border-primary/40 hover:shadow-md text-[var(--text-primary)]"
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
