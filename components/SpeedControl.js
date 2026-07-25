'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const SPEED_OPTIONS = [
  { value: 0.5, label: '0.5x', description: 'بطيء جداً' },
  { value: 0.75, label: '0.75x', description: 'بطيء' },
  { value: 1, label: '1x', description: 'عادي' },
  { value: 1.25, label: '1.25x', description: 'سريع قليلاً' },
  { value: 1.5, label: '1.5x', description: 'سريع' },
]

export default function SpeedControl({ value = 1, onChange }) {
  const [isOpen, setIsOpen] = useState(false)

  const currentSpeed = SPEED_OPTIONS.find(s => s.value === value) || SPEED_OPTIONS[2]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-primary)] hover:border-primary/30 transition-colors"
      >
        <span>⚡</span>
        <span>{currentSpeed.label}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            className="absolute top-full left-0 mt-2 w-48 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] shadow-lg z-50 overflow-hidden"
          >
            {SPEED_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                  value === option.value
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-[var(--bg-surface-hover)] text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold">{option.label}</span>
                  <span className="text-xs text-[var(--text-muted)]">{option.description}</span>
                </div>
                {value === option.value && <span>✓</span>}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  )
}
