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

    if (!selected) {
      setSelected({ side, value })
    } else if (selected.side === side) {
      setSelected({ side, value })
    } else {
      const pair = pairs.find(
        (p) =>
          (p[0] === selected.value && p[1] === value) ||
          (p[1] === selected.value && p[0] === value)
      )
      if (pair) {
        setMatched([...matched, selected.value, value])
        setSelected(null)
        if (matched.length + 2 === pairs.length * 2) {
          onAnswer(true, 'كل الكلمات مطابقة')
        }
      } else {
        setWrongPair({ a: selected.value, b: value })
        setTimeout(() => {
          setWrongPair(null)
          setSelected(null)
        }, 400)
      }
    }
  }

  const getButtonClass = (side, value) => {
    if (matched.includes(value))
      return 'bg-success/10 border-success text-success'
    if (selected?.value === value)
      return 'bg-primary/10 border-primary text-primary'
    if (wrongPair && ((wrongPair.a === value) || (wrongPair.b === value)))
      return 'bg-error/10 border-error text-error animate-shake'
    return 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 hover:border-primary'
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-neutral-500 text-center">English</div>
          {left.map((v) => (
            <motion.button
              key={v}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect('left', v)}
              className={`w-full border-2 rounded-lg p-3 text-sm font-semibold text-center transition-all ${getButtonClass('left', v)}`}
            >
              {v}
            </motion.button>
          ))}
        </div>
        <div className="space-y-2">
          <div className="text-[11px] font-bold text-neutral-500 text-center">العربية</div>
          {right.map((v) => (
            <motion.button
              key={v}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect('right', v)}
              className={`w-full border-2 rounded-lg p-3 text-sm font-semibold text-center transition-all ${getButtonClass('right', v)}`}
            >
              {v}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
