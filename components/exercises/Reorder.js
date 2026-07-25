'use client'
import { useState } from 'react'
import { motion, Reorder } from 'framer-motion'

export default function SentenceReorder({ words, answer, onAnswer }) {
  const [bank, setBank] = useState(() => [...words].sort(() => Math.random() - 0.5))
  const [zone, setZone] = useState([])

  const addToZone = (word) => {
    setBank(bank.filter((_, i) => i !== bank.indexOf(word) || bank.indexOf(word) === -1))
    setZone([...zone, word])
  }

  const removeFromZone = (word) => {
    setZone(zone.filter((_, i) => i !== zone.indexOf(word) || zone.indexOf(word) === -1))
    setBank([...bank, word])
  }

  const handleCheck = () => {
    const correct = zone.join(' ') === words.join(' ')
    onAnswer(correct, words.join(' '))
  }

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-lg font-bold mb-2">رتّب الكلمات</p>
        <p className="text-sm text-neutral-500 mb-4">{answer}</p>
      </div>

      <Reorder.Group
        axis="x"
        values={zone}
        onReorder={setZone}
        className="min-h-[52px] bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg p-3 flex flex-wrap gap-2 justify-center items-center"
      >
        {zone.map((word) => (
          <Reorder.Item key={word} value={word}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => removeFromZone(word)}
              className="bg-white dark:bg-neutral-700 border-2 border-primary/30 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer"
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
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => addToZone(word)}
            className="bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 px-4 py-2 rounded-full text-sm font-semibold hover:border-primary transition-colors"
          >
            {word}
          </motion.button>
        ))}
      </div>

      {zone.length > 0 && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleCheck}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-primary-light text-white font-bold text-[15px] hover:shadow-lg transition-all"
        >
          تحقق ✓
        </motion.button>
      )}
    </div>
  )
}
