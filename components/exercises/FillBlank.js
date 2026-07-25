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

  return (
    <div className="space-y-4">
      <p className="text-lg font-bold text-center text-[var(--text-primary)]">{question}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
        disabled={checked}
        placeholder="اكتب الإجابة..."
        className={`input max-w-sm mx-auto text-center ${
          checked ? (isCorrect ? 'input-success' : 'input-error animate-shake') : ''
        }`}
        style={{ display: 'block' }}
      />
      {!checked && (
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleCheck}
          className="btn btn-primary w-full max-w-sm mx-auto py-3 text-[15px]"
        >
          تحقق ✓
        </motion.button>
      )}
    </div>
  )
}
