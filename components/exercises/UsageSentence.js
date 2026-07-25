'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function UsageSentence({ word, onAnswer }) {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    if (!value.trim()) return
    setChecked(true)
    const correct = value.trim().length > 5 && /[a-zA-Z]/.test(value)
    setIsCorrect(correct)
    onAnswer(correct, 'جملة رائعة!')
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">اكتب جملة باستخدام كلمة</p>
        <p className="text-indigo-600 dark:text-indigo-400 font-extrabold text-xl mb-4 direction-ltr">{word}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          disabled={checked}
          placeholder={`اكتب جملة بـ ${word}...`}
          className={`w-full max-w-sm mx-auto block px-5 py-3.5 border-2 rounded-2xl text-center text-base font-semibold outline-none transition-all duration-200 direction-ltr ${
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
