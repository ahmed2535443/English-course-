'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

function similarity(a, b) {
  const al = a.toLowerCase().trim()
  const bl = b.toLowerCase().trim()
  if (al === bl) return 1
  if (al.includes(bl) || bl.includes(al)) return 0.85
  const aWords = al.split(/\s+/)
  const bWords = bl.split(/\s+/)
  const common = aWords.filter(w => bWords.includes(w))
  return common.length / Math.max(aWords.length, bWords.length)
}

export default function EgyptianQA({ question, hint, answer, placeholder, onAnswer }) {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    const trimmed = value.trim()
    if (!trimmed) return
    setChecked(true)
    const hasEnglish = /[a-zA-Z]{2,}/.test(trimmed)
    const score = similarity(trimmed, answer)
    const correct = hasEnglish && score >= 0.5
    setIsCorrect(correct)
    onAnswer(correct, answer)
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
          className={`input max-w-sm mx-auto text-center ${checked ? (isCorrect ? 'input-success' : 'input-error animate-shake') : ''}`}
          style={{ display: 'block' }}
        />
        {checked && !isCorrect && (
          <div className="text-xs text-[var(--accent-green)] mt-2 font-medium direction-ltr">{answer}</div>
        )}
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
