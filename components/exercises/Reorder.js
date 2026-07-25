'use client'
import { useState } from 'react'
import { motion, Reorder } from 'framer-motion'

export default function SentenceReorder({ words, answer, onAnswer }) {
  const [bank, setBank] = useState(() => [...words].sort(() => Math.random() - 0.5))
  const [zone, setZone] = useState([])

  const addToZone = (word) => {
    setBank(bank.filter((w) => w !== word))
    setZone([...zone, word])
  }

  const removeFromZone = (word) => {
    setZone(zone.filter((w) => w !== word))
    setBank([...bank, word])
  }

  const handleCheck = () => {
    const correct = zone.join(' ') === words.join(' ')
    onAnswer(correct, words.join(' '))
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-lg font-bold text-[var(--text-primary)]">رتّب الكلمات</p>
        <p className="text-sm text-[var(--text-muted)] mt-1">{answer}</p>
      </div>

      <Reorder.Group
        axis="x"
        values={zone}
        onReorder={setZone}
        className="min-h-[52px] bg-[var(--bg-surface-hover)] border-2 border-dashed border-[var(--border-default)] rounded-[var(--radius-md)] p-3 flex flex-wrap gap-2 justify-center items-center"
      >
        {zone.map((word) => (
          <Reorder.Item key={word} value={word}>
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => removeFromZone(word)}
              className="bg-[var(--bg-surface)] border border-primary/20 px-3.5 py-1.5 rounded-[var(--radius-sm)] text-sm font-semibold cursor-pointer text-[var(--text-primary)] shadow-sm"
            >
              {word}
            </motion.button>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="flex flex-wrap gap-2 justify-center">
        {bank.map((word, i) => (
          <motion.button
            key={`${word}-${i}`}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.04 }}
            onClick={() => addToZone(word)}
            className="bg-[var(--bg-surface)] border border-[var(--border-default)] px-3.5 py-1.5 rounded-[var(--radius-sm)] text-sm font-semibold hover:border-primary/40 transition-all duration-200 text-[var(--text-primary)]"
          >
            {word}
          </motion.button>
        ))}
      </div>

      {zone.length > 0 && (
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
