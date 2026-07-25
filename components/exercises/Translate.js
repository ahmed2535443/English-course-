'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Translate({ question, answer, onAnswer }) {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    if (!value.trim()) return
    setChecked(true)
    const v = value.trim().toLowerCase().replace(/[.,!?]/g, '')
    const c = answer.toLowerCase().replace(/[.,!?]/g, '')
    const correct = v === c || v.includes(c) || c.includes(v)
    setIsCorrect(correct)
    onAnswer(correct, answer)
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-lg font-bold mb-4">{question}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          disabled={checked}
          placeholder="اكتب الترجمة بالإنجليزي..."
          className={`w-full max-w-sm px-4 py-3 border-2 rounded-lg text-center text-base font-semibold outline-none transition-all ${
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
          className="w-full max-w-sm mx-auto block py-3 rounded-lg bg-gradient-to-r from-primary to-primary-light text-white font-bold text-[15px] hover:shadow-lg transition-all"
        >
          تحقق ✓
        </motion.button>
      )}
    </div>
  )
}
