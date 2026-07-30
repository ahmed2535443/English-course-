'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Conversation({ speaker, line, answer, options, correctIndex, onAnswer }) {
  const [selected, setSelected] = useState(null)
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    if (selected === null) return
    setChecked(true)
    const correct = selected === correctIndex
    onAnswer(correct, answer)
  }

  const colors = {
    Josie: '#7928ca',
    Dad: '#171717',
    Narrator: '#6366f1',
    Chris: '#0070f3',
    Jane: '#7928ca',
    Officer: '#171717',
    Passenger: '#0070f3',
  }

  return (
    <div className="space-y-4">
      <div className="bg-[var(--bg-surface)] rounded-[var(--radius-lg)] p-4 border border-[var(--border-default)]">
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
            style={{ backgroundColor: colors[speaker] || '#6366f1' }}
          >
            {speaker.charAt(0)}
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-[var(--text-muted)] mb-1">{speaker}</p>
            <p className="text-base font-semibold text-[var(--text-primary)]">{line}</p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-[var(--text-muted)] font-bold">أكمل الجملة:</p>

      <div className="space-y-2">
        {options.map((opt, i) => (
          <motion.button
            key={i}
            whileTap={{ scale: 0.97 }}
            onClick={() => !checked && setSelected(i)}
            disabled={checked}
            className={`w-full text-right px-4 py-3 rounded-[var(--radius-md)] border-2 text-sm font-semibold transition-all duration-200 ${
              checked
                ? i === correctIndex
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                  : i === selected
                  ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                  : 'border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-muted)] opacity-50'
                : selected === i
                ? 'border-primary bg-primary/10 text-[var(--text-primary)]'
                : 'border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-primary/40'
            }`}
          >
            <span className="ml-2 text-xs text-[var(--text-muted)]">{String.fromCharCode(65 + i)}.</span>
            {opt}
          </motion.button>
        ))}
      </div>

      {!checked && selected !== null && (
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleCheck}
          className="btn btn-primary w-full py-3 text-[15px]"
        >
          تحقق ✓
        </motion.button>
      )}
    </div>
  )
}
