'use client'
import { motion } from 'framer-motion'

export default function MCQ({ question, options, correctIndex, onAnswer }) {
  return (
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
  )
}
