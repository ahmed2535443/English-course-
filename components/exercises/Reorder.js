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
    <div className="space-y-5">
      <div className="text-center">
        <p className="text-lg font-bold mb-2 text-slate-800 dark:text-slate-100">رتّب الكلمات</p>
        <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">{answer}</p>
      </div>

      <Reorder.Group
        axis="x"
        values={zone}
        onReorder={setZone}
        className="min-h-[56px] bg-slate-100/80 dark:bg-slate-800/50 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-3 flex flex-wrap gap-2 justify-center items-center"
      >
        {zone.map((word) => (
          <Reorder.Item key={word} value={word}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => removeFromZone(word)}
              className="bg-white dark:bg-slate-700 border-2 border-indigo-200 dark:border-indigo-500/30 px-4 py-2 rounded-xl text-sm font-semibold cursor-pointer text-slate-700 dark:text-slate-200 shadow-sm"
            >
              {word}
            </motion.button>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="flex flex-wrap gap-2.5 justify-center">
        {bank.map((word, i) => (
          <motion.button
            key={`${word}-${i}`}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => addToZone(word)}
            className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 px-4 py-2 rounded-xl text-sm font-semibold hover:border-indigo-400 dark:hover:border-indigo-500/30 hover:shadow-md transition-all duration-200 text-slate-700 dark:text-slate-200"
          >
            {word}
          </motion.button>
        ))}
      </div>

      {zone.length > 0 && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleCheck}
          className="w-full py-3.5 rounded-2xl btn-primary text-[15px]"
        >
          تحقق ✓
        </motion.button>
      )}
    </div>
  )
}
