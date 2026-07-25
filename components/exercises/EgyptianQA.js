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
      <div className="bg-gradient-to-br from-accent/5 to-secondary/5 border border-accent/15 rounded-xl p-5 text-center">
        <p className="text-base font-bold mb-2">🇪🇬 {question}</p>
        <p className="text-xs text-neutral-500 mb-4">{hint}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          disabled={checked}
          placeholder={placeholder}
          className={`w-full max-w-xs px-4 py-3 border-2 rounded-lg text-center text-base font-semibold outline-none transition-all ${
            checked
              ? 'border-success bg-success/5'
              : 'border-neutral-200 dark:border-neutral-700 focus:border-primary focus:ring-2 focus:ring-primary/10'
          }`}
        />
      </div>
      {!checked && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleCheck}
          className="w-full max-w-xs mx-auto block py-3 rounded-lg bg-gradient-to-r from-primary to-primary-light text-white font-bold text-[15px] hover:shadow-lg transition-all"
        >
          تحقق ✓
        </motion.button>
      )}
    </div>
  )
}
