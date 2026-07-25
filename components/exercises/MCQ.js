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
    <div className="grid grid-cols-2 gap-3">
      {options.map((opt, i) => (
        <motion.button
          key={i}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => handleClick(i)}
          className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 rounded-2xl p-4 text-sm font-semibold text-center transition-all duration-200 hover:border-indigo-400 dark:hover:border-indigo-400 hover:shadow-md text-slate-700 dark:text-slate-200"
        >
          {opt}
        </motion.button>
      ))}
    </div>
  )
}
