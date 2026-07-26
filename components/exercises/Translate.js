'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Translate({ question, answer, onAnswer }) {
  const [value, setValue] = useState('')
  const [checked, setChecked] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleCheck = () => {
    if (!value.trim()) return
    setChecked(true)
    const v = value.trim().toLowerCase().replace(/[.,!?]/g, '')
    const c = answer.toLowerCase().replace(/[.,!?]/g, '')
    
    // Exact match
    if (v === c) {
      setIsCorrect(true)
      onAnswer(true, answer)
      return
    }
    
    // Word-level comparison
    const userWords = v.split(/\s+/).sort()
    const answerWords = c.split(/\s+/).sort()
    
    const exactMatch = userWords.join(' ') === answerWords.join(' ')
    if (exactMatch) {
      setIsCorrect(true)
      onAnswer(true, answer)
      return
    }
    
    // Calculate word overlap percentage
    const answerSet = new Set(answerWords)
    const userSet = new Set(userWords)
    const intersection = [...answerSet].filter(w => userSet.has(w))
    const overlapRatio = intersection.length / answerSet.length
    
    // Require at least 80% word overlap and all user words must be in answer
    const allUserWordsInAnswer = [...userSet].every(w => answerSet.has(w))
    const correct = overlapRatio >= 0.8 && allUserWordsInAnswer
    
    setIsCorrect(correct)
    onAnswer(correct, answer)
  }

  return (
    <div className="space-y-4">
      <p className="text-lg font-bold text-center text-[var(--text-primary)]">{question}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
        disabled={checked}
        placeholder="اكتب الترجمة بالإنجليزي..."
        className={`input max-w-sm mx-auto text-center direction-ltr ${
          checked ? (isCorrect ? 'input-success' : 'input-error animate-shake') : ''
        }`}
        style={{ display: 'block' }}
      />
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
