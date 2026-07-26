'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function MCQ({ question, options, correctIndex, onAnswer }) {
  const [answered, setAnswered] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleAnswer = (i) => {
    if (answered) return
    setAnswered(true)
    setSelected(i)
    onAnswer(i === correctIndex, i === correctIndex ? opt : options[correctIndex])
  }

  return (
    <div className="grid grid-cols-2 gap-2.5">
      {options.map((opt, i) => {
        const isSelected = selected === i
        const isCorrectOption = i === correctIndex
        
        let buttonClass = "bg-white dark:bg-[#1a2a32] border-2 rounded-2xl p-4 text-sm font-bold text-center transition-all duration-200 "
        
        if (answered) {
          if (isCorrectOption) {
            buttonClass += "border-[#58CC02] bg-[#58CC02]/10 text-[#58CC02] shadow-[0_3px_0_#46A302]"
          } else if (isSelected && !isCorrectOption) {
            buttonClass += "border-[#FF4B4B] bg-[#FF4B4B]/10 text-[#FF4B4B] shadow-[0_3px_0_#E03E3E] animate-shake"
          } else {
            buttonClass += "border-gray-200 dark:border-[#233640] text-gray-400 dark:text-gray-500 opacity-50"
          }
        } else {
          buttonClass += "border-gray-200 dark:border-[#233640] text-gray-900 dark:text-white hover:border-[#1CB0F6] hover:shadow-md"
        }

        return (
          <motion.button
            key={i}
            whileTap={{ scale: answered ? 1 : 0.97 }}
            onClick={() => handleAnswer(i)}
            disabled={answered}
            className={buttonClass}
          >
            {opt}
            {answered && isCorrectOption && (
              <span className="ml-2">✓</span>
            )}
            {answered && isSelected && !isCorrectOption && (
              <span className="ml-2">✗</span>
            )}
          </motion.button>
        )
      })}
    </div>
  )
}
