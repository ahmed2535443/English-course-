'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition'

function calculateSimilarity(str1, str2) {
  const s1 = str1.toLowerCase().replace(/[^\w\s]/g, '').trim()
  const s2 = str2.toLowerCase().replace(/[^\w\s]/g, '').trim()

  if (s1 === s2) return 100

  const words1 = s1.split(/\s+/)
  const words2 = s2.split(/\s+/)

  let matches = 0
  const matchedWords2 = new Set()

  for (const word1 of words1) {
    for (let i = 0; i < words2.length; i++) {
      if (!matchedWords2.has(i) && words2[i] === word1) {
        matches++
        matchedWords2.add(i)
        break
      }
    }
  }

  const exactMatchRatio = matches / Math.max(words1.length, words2.length)

  let substringMatches = 0
  const minLen = Math.min(s1.length, s2.length)
  for (let i = 0; i < minLen; i++) {
    if (s1[i] === s2[i]) substringMatches++
  }
  const substringRatio = substringMatches / Math.max(s1.length, s2.length)

  const score = (exactMatchRatio * 0.7 + substringRatio * 0.3) * 100
  return Math.round(Math.min(100, score))
}

function getScoreColor(score) {
  if (score >= 90) return 'text-success'
  if (score >= 70) return 'text-primary'
  if (score >= 50) return 'text-warning'
  return 'text-error'
}

function getScoreBg(score) {
  if (score >= 90) return 'bg-success/10 border-success/30'
  if (score >= 70) return 'bg-primary/10 border-primary/30'
  if (score >= 50) return 'bg-warning/10 border-warning/30'
  return 'bg-error/10 border-error/30'
}

function getScoreLabel(score) {
  if (score >= 90) return 'ممتاز! 🌟'
  if (score >= 70) return 'جيد جداً! 👍'
  if (score >= 50) return 'جيد، حاول تاني 🔄'
  return 'محتاج تراجع 📖'
}

export default function Speaking({ exercise, onAnswer }) {
  const { isListening, transcript, isSupported, error, startListening, stopListening, resetTranscript } = useSpeechRecognition()
  const [score, setScore] = useState(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const targetSentence = exercise.an || exercise.q

  useEffect(() => {
    if (transcript && !isListening && !hasAnswered) {
      const similarity = calculateSimilarity(transcript, targetSentence)
      setScore(similarity)
      setShowResult(true)
    }
  }, [transcript, isListening, hasAnswered, targetSentence])

  const handleStartListening = () => {
    resetTranscript()
    setScore(null)
    setShowResult(false)
    setHasAnswered(false)
    startListening('en-US')
  }

  const handleStopListening = () => {
    stopListening()
  }

  const handleSubmit = () => {
    if (score !== null) {
      setHasAnswered(true)
      const isCorrect = score >= 70
      onAnswer(isCorrect)
    }
  }

  const handleRetry = () => {
    resetTranscript()
    setScore(null)
    setShowResult(false)
    setHasAnswered(false)
  }

  if (!isSupported) {
    return (
      <div className="solid-card p-5 text-center">
        <div className="text-4xl mb-4">🎤</div>
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">المايكروفون غير مدعوم</h3>
        <p className="text-sm text-[var(--text-muted)]">
          هذا المتصفح لا يدعم التعرف على الصوت. يرجى استخدام Chrome أو Edge.
        </p>
      </div>
    )
  }

  return (
    <div className="solid-card p-5">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{exercise.q}</h3>
        {exercise.hint && (
          <p className="text-sm text-[var(--text-muted)]">💡 {exercise.hint}</p>
        )}
      </div>

      <div className="bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4 mb-6">
        <div className="text-center">
          <span className="text-sm text-[var(--text-muted)]">الجملة المطلوبة:</span>
          <div className="text-xl font-bold text-primary mt-2 direction-ltr">{targetSentence}</div>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isListening ? handleStopListening : handleStartListening}
          disabled={hasAnswered}
          className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all ${
            isListening
              ? 'bg-error animate-pulse shadow-error/30'
              : 'bg-gradient-to-br from-primary to-secondary shadow-primary/30 hover:shadow-primary/50'
          }`}
        >
          {isListening ? '⏹️' : '🎤'}
        </motion.button>
      </div>

      <div className="text-center mb-6">
        {isListening && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-primary font-semibold"
          >
            🎙️ جاري الاستماع...
          </motion.p>
        )}
        {error && (
          <p className="text-sm text-error">❌ خطأ: {error}</p>
        )}
      </div>

      <AnimatePresence>
        {showResult && transcript && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6"
          >
            <div className="bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4">
              <div className="text-sm text-[var(--text-muted)] mb-2">ما الذي نطقته:</div>
              <div className="text-lg font-bold text-[var(--text-primary)] direction-ltr mb-3">"{transcript}"</div>
              
              {score !== null && (
                <div className={`p-3 rounded-[var(--radius-sm)] border ${getScoreBg(score)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-2xl font-extrabold ${getScoreColor(score)}`}>{score}%</span>
                    <span className="text-sm font-bold">{getScoreLabel(score)}</span>
                  </div>
                  <div className="w-full bg-[var(--bg-surface)] rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 0.5 }}
                      className={`h-full rounded-full ${
                        score >= 90 ? 'bg-success' :
                        score >= 70 ? 'bg-primary' :
                        score >= 50 ? 'bg-warning' : 'bg-error'
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex gap-3">
        {!hasAnswered && score !== null && (
          <>
            <button
              onClick={handleRetry}
              className="flex-1 btn btn-secondary py-3"
            >
              🔄 حاول تاني
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 btn btn-primary py-3"
            >
              ✅ تأكيد
            </button>
          </>
        )}
        {hasAnswered && (
          <div className="w-full text-center">
            <p className="text-sm text-[var(--text-muted)]">
              {score >= 70 ? '✅ أحسنت! اضغط للمتابعة' : '❌ حاول تاني في المرة الجاية'}
            </p>
          </div>
        )}
      </div>

      {!showResult && !isListening && !hasAnswered && (
        <div className="text-center">
          <p className="text-sm text-[var(--text-muted)]">
            اضغط على المايكروفون وانطق الجملة
          </p>
        </div>
      )}
    </div>
  )
}
