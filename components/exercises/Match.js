'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Match({ pairs, onAnswer }) {
  const [left] = useState(() => pairs.map((p) => p[0]).sort(() => Math.random() - 0.5))
  const [right] = useState(() => pairs.map((p) => p[1]).sort(() => Math.random() - 0.5))
  const [selected, setSelected] = useState(null)
  const [matched, setMatched] = useState([])
  const [wrongPair, setWrongPair] = useState(null)

  const handleSelect = (side, value) => {
    if (matched.includes(value)) return

    if (!selected || selected.side === side) {
      setSelected({ side, value })
    } else {
      const pair = pairs.find(
        (p) =>
          (p[0] === selected.value && p[1] === value) ||
          (p[1] === selected.value && p[0] === value)
      )
      if (pair) {
        const newMatched = [...matched, selected.value, value]
        setMatched(newMatched)
        setSelected(null)
        if (newMatched.length === pairs.length * 2) {
          onAnswer(true, 'كل الكلمات مطابقة')
        }
      } else {
        setWrongPair({ a: selected.value, b: value })
        setTimeout(() => { setWrongPair(null); setSelected(null) }, 400)
      }
    }
  }

  const getBtnClass = (side, value) => {
    if (matched.includes(value)) return 'bg-success/10 border-success text-success'
    if (selected?.value === value) return 'bg-primary/10 border-primary text-primary'
    if (wrongPair && (wrongPair.a === value || wrongPair.b === value)) return 'bg-error/10 border-error text-error animate-shake'
    return 'bg-[var(--bg-surface)] border-[var(--border-default)] text-[var(--text-primary)] hover:border-primary/40'
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-[var(--text-muted)] text-center uppercase tracking-wider">English</div>
        {left.map((v) => (
          <motion.button
            key={v}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelect('left', v)}
            className={`w-full border-2 rounded-[var(--radius-md)] p-3 text-sm font-semibold text-center transition-all duration-200 ${getBtnClass('left', v)}`}
          >
            {v}
          </motion.button>
        ))}
      </div>
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-[var(--text-muted)] text-center uppercase tracking-wider">العربية</div>
        {right.map((v) => (
          <motion.button
            key={v}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelect('right', v)}
            className={`w-full border-2 rounded-[var(--radius-md)] p-3 text-sm font-semibold text-center transition-all duration-200 ${getBtnClass('right', v)}`}
          >
            {v}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
