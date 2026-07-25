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
      <p className="text-lg font-bold text-center text-[var(--text-primary)]">اكتب جملة باستخدام كلمة</p>
      <p className="text-primary font-extrabold text-xl text-center direction-ltr">{word}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
        disabled={checked}
        placeholder={`اكتب جملة بـ ${word}...`}
        className={`input max-w-sm mx-auto text-center direction-ltr ${
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
