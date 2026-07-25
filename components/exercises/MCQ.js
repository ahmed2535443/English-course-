'use client'
import { motion } from 'framer-motion'

export default function MCQ({ question, options, correctIndex, onAnswer }) {
  const handleClick = (index) => {
    if (index === correctIndex) {
      onAnswer(true, options[index])
    } else {
      onAnswer(false, options[correctIndex])
    }
  }

  return (
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
  )
}
