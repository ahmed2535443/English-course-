'use client'
import { use, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { LESSONS } from '@/data/lessons'
import { useApp } from '@/context/AppContext'
import MCQ from '@/components/exercises/MCQ'
import FillBlank from '@/components/exercises/FillBlank'
import Reorder from '@/components/exercises/Reorder'
import Match from '@/components/exercises/Match'
import Listen from '@/components/exercises/Listen'
import Translate from '@/components/exercises/Translate'
import EgyptianQA from '@/components/exercises/EgyptianQA'
import UsageSentence from '@/components/exercises/UsageSentence'
import Modal from '@/components/Modal'
import Confetti from '@/components/Confetti'
import XPPopup from '@/components/XPPopup'

export default function ExercisePage({ params }) {
  const { id } = use(params)
  const router = useRouter()
  const lesson = LESSONS.find((l) => l.id === Number(id))
  const {
    addXP,
    completeExercise,
    unlockAchievement,
    don,
    xp,
    ach,
  } = useApp()

  const [currentEx, setCurrentEx] = useState(0)
  const [results, setResults] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ emoji: '', title: '', desc: '' })
  const [showConfetti, setShowConfetti] = useState(false)
  const [showXP, setShowXP] = useState(false)
  const [xpAmount, setXpAmount] = useState(0)
  const [resultBanner, setResultBanner] = useState(null)

  useEffect(() => {
    if (lesson && !don.includes(lesson.id)) {
      // lesson not completed yet, that's fine
    }
  }, [lesson, don])

  if (!lesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>التمرين غير موجود</p>
      </div>
    )
  }

  const exercises = lesson.ex
  const exercise = exercises[currentEx]
  const progress = ((currentEx) / exercises.length) * 100

  const exerciseLabels = {
    mcq: ['اختيار متعدد', 'bg-primary'],
    fill: ['ملء الفراغ', 'bg-secondary'],
    reorder: ['ترتيب الجمل', 'bg-success'],
    match: ['مطابقة', 'bg-warning'],
    listen: ['استماع', 'bg-accent'],
    translate: ['ترجمة', 'bg-error'],
    egpt: ['سؤال مصري', 'bg-accent'],
    usage: ['استخدام الكلمة', 'bg-warning'],
  }

  const showResult = (correct, detail) => {
    setResultBanner({
      correct,
      title: correct ? 'ممتاز! 🎉' : 'خاطئ ❌',
      detail,
    })
    setTimeout(() => setResultBanner(null), 1200)
  }

  const awardXP = (amount) => {
    addXP(amount)
    setXpAmount(amount)
    setShowXP(true)
    setTimeout(() => setShowXP(false), 1200)
  }

  const handleAnswer = useCallback(
    (correct, detail) => {
      if (correct) {
        const xpMap = { mcq: 10, fill: 15, egpt: 15, translate: 20, reorder: 20, usage: 20, listen: 10, match: 10 }
        awardXP(xpMap[exercise.tp] || 10)
      }
      showResult(correct, detail)
      setResults([...results, correct])
      setTimeout(() => {
        if (currentEx + 1 >= exercises.length) {
          finishExercise([...results, correct])
        } else {
          setCurrentEx(currentEx + 1)
        }
      }, 1200)
    },
    [currentEx, results, exercises.length, exercise]
  )

  const finishExercise = (allResults) => {
    const correct = allResults.filter(Boolean).length
    const total = allResults.length
    const rate = Math.round((correct / total) * 100)
    const wordsLearned = Math.round(lesson.voc.length * (rate / 100))

    completeExercise(correct, total, lesson.id, wordsLearned)

    // Check achievements
    if (rate === 100) {
      const achId = `p${lesson.id}`
      if (!ach.includes(achId)) unlockAchievement(achId)
    }

    const newDon = [...don]
    if (!newDon.includes(lesson.id)) newDon.push(lesson.id)
    if (newDon.length === 8 && !ach.includes('all')) {
      unlockAchievement('all')
      setShowConfetti(true)
    }

    setModalData({
      emoji: '🎉',
      title: 'أحسنت!',
      desc: `لقد أكملت الحلقة ${lesson.id} بنتيجة ${rate}% (${correct}/${total})`,
    })
    setShowModal(true)
  }

  const renderExercise = () => {
    if (!exercise) return null

    switch (exercise.tp) {
      case 'mcq':
        return <MCQ question={exercise.q} options={exercise.o} correctIndex={exercise.c} onAnswer={handleAnswer} />
      case 'fill':
        return <FillBlank question={exercise.q} answer={exercise.an} onAnswer={handleAnswer} />
      case 'reorder':
        return <Reorder words={exercise.w} answer={exercise.a} onAnswer={handleAnswer} />
      case 'match':
        return <Match pairs={exercise.p} onAnswer={handleAnswer} />
      case 'listen':
        return (
          <Listen
            englishText={exercise.en}
            question={exercise.q}
            options={exercise.o}
            correctIndex={exercise.c}
            onAnswer={handleAnswer}
          />
        )
      case 'translate':
        return <Translate question={exercise.q} answer={exercise.an} onAnswer={handleAnswer} />
      case 'egpt':
        return (
          <EgyptianQA
            question={exercise.q}
            hint={exercise.hint}
            answer={exercise.an}
            placeholder={exercise.ph}
            onAnswer={handleAnswer}
          />
        )
      case 'usage':
        return <UsageSentence word={exercise.w} onAnswer={handleAnswer} />
      default:
        return null
    }
  }

  const label = exerciseLabels[exercise?.tp] || ['تمرين', 'bg-primary']

  return (
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#0a0a0a] p-4 md:p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-base font-bold">الحلقة {lesson.id}: {lesson.t}</div>
          <div className="text-sm text-neutral-500 font-semibold">
            {currentEx + 1}/{exercises.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full mb-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        </div>

        {/* Exercise card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 text-center"
          >
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white mb-4 ${label[1]}`}
            >
              {label[0]}
            </span>

            {exercise?.q && exercise.tp !== 'reorder' && (
              <p className="text-lg font-bold mb-5 leading-relaxed">{exercise.q}</p>
            )}

            {renderExercise()}

            {/* Result banner */}
            <AnimatePresence>
              {resultBanner && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className={`mt-4 p-4 rounded-lg ${
                    resultBanner.correct
                      ? 'bg-success/10 border border-success/20'
                      : 'bg-error/10 border border-error/20'
                  }`}
                >
                  <div
                    className={`text-base font-bold ${
                      resultBanner.correct ? 'text-success' : 'text-error'
                    }`}
                  >
                    {resultBanner.title}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">{resultBanner.detail}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Back button */}
        <button
          onClick={() => router.push(`/lesson/${lesson.id}`)}
          className="mt-4 text-sm text-primary font-semibold hover:underline"
        >
          ← العودة للحلقة
        </button>
      </div>

      <Modal
        show={showModal}
        emoji={modalData.emoji}
        title={modalData.title}
        description={modalData.desc}
        onClose={() => {
          setShowModal(false)
          router.push('/')
        }}
      />

      <Confetti show={showConfetti} />
      <XPPopup show={showXP} amount={xpAmount} />
    </div>
  )
}
