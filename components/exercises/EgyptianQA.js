'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EgyptianQA({ question, hint, answer, placeholder, onAnswer }) {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    if (!value.trim()) return
    setChecked(true)
    setIsCorrect(true)
    onAnswer(true, answer)
  }

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-pink-500/10 dark:to-fuchsia-500/10 border border-pink-100 dark:border-pink-500/15 rounded-2xl p-6 text-center">
        <p className="text-base font-bold mb-2 text-slate-800 dark:text-slate-100">🇪🇬 {question}</p>
        <p className="text-xs text-slate-400 mb-4">{hint}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          disabled={checked}
          placeholder={placeholder}
          className={`w-full max-w-sm mx-auto block px-5 py-3.5 border-2 rounded-2xl text-center text-base font-semibold outline-none transition-all duration-200 ${
            checked
              ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
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
