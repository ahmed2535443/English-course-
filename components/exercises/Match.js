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
      return 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-400 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
    if (selected?.value === value)
      return 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-400 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400'
    if (wrongPair && ((wrongPair.a === value) || (wrongPair.b === value)))
      return 'bg-red-50 dark:bg-red-500/10 border-red-400 dark:border-red-500/30 text-red-600 dark:text-red-400 animate-shake'
    return 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500/30 text-slate-700 dark:text-slate-200'
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2.5">
          <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 text-center uppercase tracking-wider">English</div>
          {left.map((v) => (
            <motion.button
              key={v}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect('left', v)}
              className={`w-full border-2 rounded-xl p-3.5 text-sm font-semibold text-center transition-all duration-200 ${getButtonClass('left', v)}`}
            >
              {v}
            </motion.button>
          ))}
        </div>
        <div className="space-y-2.5">
          <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 text-center uppercase tracking-wider">العربية</div>
          {right.map((v) => (
            <motion.button
              key={v}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect('right', v)}
              className={`w-full border-2 rounded-xl p-3.5 text-sm font-semibold text-center transition-all duration-200 ${getButtonClass('right', v)}`}
            >
              {v}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
