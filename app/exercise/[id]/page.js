'use client'
import { use, useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { LESSONS } from '@/data/lessons'
import { getUnitByLessonId } from '@/data/course'
import { useApp } from '@/context/AppContext'
import { useSounds } from '@/hooks/useSounds'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
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

const LABELS = {
  mcq: { text: 'اختيار متعدد', color: 'bg-primary' },
  fill: { text: 'ملء الفراغ', color: 'bg-secondary' },
  reorder: { text: 'ترتيب الجمل', color: 'bg-success' },
  match: { text: 'مطابقة', color: 'bg-warning' },
  listen: { text: 'استماع', color: 'bg-accent' },
  translate: { text: 'ترجمة', color: 'bg-error' },
  egpt: { text: 'سؤال مصري', color: 'bg-accent' },
  usage: { text: 'استخدام الكلمة', color: 'bg-warning' },
}

const XP_MAP = { mcq: 10, fill: 15, egpt: 15, translate: 20, reorder: 20, usage: 20, listen: 10, match: 10 }

export default function ExercisePage({ params }) {
  const { id } = use(params)
  const router = useRouter()
  const lesson = LESSONS.find((l) => l.id === Number(id))
  const unit = getUnitByLessonId(Number(id))
  const { addXP, completeExercise, unlockAchievement, don, ach } = useApp()
  const { play } = useSounds()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentEx, setCurrentEx] = useState(0)
  const [results, setResults] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ emoji: '', title: '', desc: '' })
  const [showConfetti, setShowConfetti] = useState(false)
  const [showXP, setShowXP] = useState(false)
  const [xpAmount, setXpAmount] = useState(0)
  const [resultBanner, setResultBanner] = useState(null)

  if (!lesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[var(--text-muted)]">التمرين غير موجود</p>
      </div>
    )
  }

  const exercises = lesson.ex
  const exercise = exercises[currentEx]
  const progress = (currentEx / exercises.length) * 100
  const label = LABELS[exercise?.tp] || LABELS.mcq

  const showResult = (correct, detail) => {
    setResultBanner({ correct, title: correct ? 'ممتاز! 🎉' : 'خاطئ ❌', detail })
    play(correct ? 'correct' : 'incorrect')
    setTimeout(() => setResultBanner(null), 1200)
  }

  const awardXP = (amount) => {
    addXP(amount)
    setXpAmount(amount)
    setShowXP(true)
    play('xpGain')
    setTimeout(() => setShowXP(false), 1200)
  }

  const finishExercise = useCallback((allResults) => {
    const correct = allResults.filter(Boolean).length
    const total = allResults.length
    const rate = Math.round((correct / total) * 100)
    const wordsLearned = Math.round(lesson.voc.length * (rate / 100))

    completeExercise(correct, total, lesson.id, wordsLearned)

    if (rate === 100 && !ach.includes(`p${lesson.id}`)) {
      unlockAchievement(`p${lesson.id}`)
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
    play(rate === 100 ? 'complete' : 'end')
  }, [lesson, don, ach, completeExercise, unlockAchievement, play])

  const handleAnswer = useCallback((correct, detail) => {
    if (correct) awardXP(XP_MAP[exercise?.tp] || 10)
    showResult(correct, detail)
    const newResults = [...results, correct]
    setResults(newResults)
    setTimeout(() => {
      if (currentEx + 1 >= exercises.length) {
        finishExercise(newResults)
      } else {
        setCurrentEx(currentEx + 1)
      }
    }, 1200)
  }, [currentEx, results, exercises.length, exercise])

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
        return <Listen englishText={exercise.en} question={exercise.q} options={exercise.o} correctIndex={exercise.c} onAnswer={handleAnswer} />
      case 'translate':
        return <Translate question={exercise.q} answer={exercise.an} onAnswer={handleAnswer} />
      case 'egpt':
        return <EgyptianQA question={exercise.q} hint={exercise.hint} answer={exercise.an} placeholder={exercise.ph} onAnswer={handleAnswer} />
      case 'usage':
        return <UsageSentence word={exercise.w} onAnswer={handleAnswer} />
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={`الحلقة ${lesson.id}: تمرين`} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container max-w-2xl mx-auto pb-32">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-bold text-[var(--text-primary)]">الحلقة {lesson.id}: {lesson.t}</div>
            <div className="text-sm text-[var(--text-muted)] font-semibold">{currentEx + 1}/{exercises.length}</div>
          </div>

          {/* Progress */}
          <div className="progress-track mb-5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="progress-fill"
            />
          </div>

          {/* Exercise Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentEx}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="glass-card-strong p-6 md:p-8 text-center"
            >
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-white mb-4 ${label.color}`}>
                {label.text}
              </span>

              {exercise?.q && exercise.tp !== 'reorder' && (
                <p className="text-lg font-bold mb-5 text-[var(--text-primary)] leading-relaxed">{exercise.q}</p>
              )}

              {renderExercise()}

              {/* Result Banner */}
              <AnimatePresence>
                {resultBanner && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className={`mt-4 p-3.5 rounded-[var(--radius-md)] border ${
                      resultBanner.correct
                        ? 'bg-success/10 border-success/20 text-success'
                        : 'bg-error/10 border-error/20 text-error'
                    }`}
                  >
                    <div className="text-base font-bold">{resultBanner.title}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-0.5">{resultBanner.detail}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => router.push(unit ? `/unit/${unit.id}` : `/lesson/${lesson.id}`)}
            className="mt-3 text-sm text-primary font-semibold hover:underline"
          >
            ← العودة للوحدة
          </button>
        </main>
      </div>

      <BottomNav />

      <Modal
        show={showModal}
        emoji={modalData.emoji}
        title={modalData.title}
        description={modalData.desc}
        onClose={() => { setShowModal(false); router.push(unit ? `/unit/${unit.id}` : '/') }}
      />

      <Confetti show={showConfetti} />
      <XPPopup show={showXP} amount={xpAmount} />
    </div>
  )
}
