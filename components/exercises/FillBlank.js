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
        <p className="text-lg font-bold mb-4">{question}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={checked}
          placeholder="اكتب الإجابة..."
          className={`w-full max-w-xs px-4 py-3 border-2 rounded-lg text-center text-base font-semibold outline-none transition-all ${
            checked
              ? isCorrect
                ? 'border-success bg-success/5'
                : 'border-error bg-error/5 animate-shake'
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
