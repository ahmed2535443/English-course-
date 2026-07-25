'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FillBlank({ question, answer, onAnswer }) {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    if (!value.trim()) return
    setChecked(true)
    const correct = value.trim().toLowerCase() === answer.toLowerCase()
    setIsCorrect(correct)
    onAnswer(correct, answer)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCheck()
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-100">{question}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={checked}
          placeholder="اكتب الإجابة..."
          className={`w-full max-w-sm mx-auto block px-5 py-3.5 border-2 rounded-2xl text-center text-base font-semibold outline-none transition-all duration-200 ${
            checked
              ? isCorrect
                ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                : 'border-red-400 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 animate-shake'
              : 'border-slate-200 dark:border-slate-700 focus:border-indigo-400 dark:focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/10 text-slate-800 dark:text-slate-100'
          }`}
        />
      </div>
      {!checked && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleCheck}
          className="w-full max-w-sm mx-auto block py-3.5 rounded-2xl btn-primary text-[15px]"
        >
          تحقق ✓
        </motion.button>
      )}
    </div>
  )
}
