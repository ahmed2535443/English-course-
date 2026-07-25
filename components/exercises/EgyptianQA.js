'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function EgyptianQA({ question, hint, answer, placeholder, onAnswer }) {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    if (!value.trim()) return
    setChecked(true)
    onAnswer(true, answer)
  }

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-pink-50 to-fuchsia-50 dark:from-pink-500/10 dark:to-fuchsia-500/10 border border-pink-200/60 dark:border-pink-500/15 rounded-[var(--radius-lg)] p-5 text-center">
        <p className="text-base font-bold mb-1 text-[var(--text-primary)]">🇪🇬 {question}</p>
        <p className="text-xs text-[var(--text-muted)] mb-4">{hint}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          disabled={checked}
          placeholder={placeholder}
          className={`input max-w-sm mx-auto text-center ${checked ? 'input-success' : ''}`}
          style={{ display: 'block' }}
        />
      </div>
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
