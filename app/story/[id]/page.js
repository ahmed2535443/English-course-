'use client'
import { use, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { getStoryById } from '@/data/stories'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

function StoryLine({ line, index, isActive }) {
  if (line.type === 'narration') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * index }}
        className="flex items-start gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-[var(--bg-surface-hover)] flex items-center justify-center text-sm flex-shrink-0">
          {line.icon}
        </div>
        <div className="flex-1 bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4">
          <p className="text-sm font-semibold text-[var(--text-primary)] direction-ltr">{line.text}</p>
          <p className="text-xs text-[var(--text-muted)] mt-1">{line.textAr}</p>
        </div>
      </motion.div>
    )
  }

  if (line.type === 'dialogue') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 * index }}
        className="flex items-start gap-3"
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
          style={{ backgroundColor: line.color }}
        >
          {line.speaker[0]}
        </div>
        <div className="flex-1">
          <div className="text-xs font-bold text-[var(--text-muted)] mb-1">{line.speakerAr}</div>
          <div className="bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4">
            <p className="text-sm font-semibold text-[var(--text-primary)] direction-ltr">{line.text}</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">{line.textAr}</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return null
}

function QuestionCard({ line, onAnswer, answered, isCorrect }) {
  const [selected, setSelected] = useState(null)

  const handleSubmit = () => {
    if (selected !== null) {
      onAnswer(selected)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="solid-card p-5"
    >
      <div className="text-center mb-4">
        <div className="text-2xl mb-2">❓</div>
        <h3 className="text-base font-bold text-[var(--text-primary)]">{line.question}</h3>
        <p className="text-sm text-[var(--text-muted)] mt-1">{line.questionAr}</p>
      </div>

      <div className="space-y-2">
        {line.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => !answered && setSelected(i)}
            disabled={answered}
            className={`w-full text-start p-3 rounded-[var(--radius-md)] border transition-all ${
              answered
                ? opt.correct
                  ? 'bg-success/10 border-success/30 text-success'
                  : i === selected
                    ? 'bg-error/10 border-error/30 text-error'
                    : 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)] opacity-50'
                : selected === i
                  ? 'bg-primary/10 border-primary/30 text-primary'
                  : 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)] hover:border-primary/30'
            }`}
          >
            <span className="text-sm">{opt.text}</span>
            <span className="text-xs text-[var(--text-muted)] block mt-0.5">{opt.textAr}</span>
          </button>
        ))}
      </div>

      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full mt-4 btn btn-primary py-3"
        >
          تأكيد
        </button>
      )}

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3 rounded-[var(--radius-md)] text-center text-sm font-bold ${
            isCorrect ? 'bg-success/10 text-success' : 'bg-error/10 text-error'
          }`}
        >
          {isCorrect ? '✅ إجابة صحيحة!' : '❌ إجابة خاطئة'}
        </motion.div>
      )}
    </motion.div>
  )
}

export default function StoryPage({ params }) {
  const { id } = use(params)
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { addXP, completeLesson } = useApp()

  const story = getStoryById(id)
  const [currentLine, setCurrentLine] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showComplete, setShowComplete] = useState(false)

  if (!story) {
    return (
      <div className="flex min-h-screen">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
          <TopNav title="القصة" onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 page-container flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">القصة غير موجودة</h2>
              <Link href="/stories" className="btn btn-primary mt-4">القصص</Link>
            </div>
          </main>
        </div>
        <BottomNav />
      </div>
    )
  }

  const lines = story.lines
  const totalQuestions = lines.filter(l => l.type === 'question').length
  const correctAnswers = Object.values(answers).filter(a => a).length

  const handleAnswer = (isCorrect) => {
    setAnswers(prev => ({ ...prev, [currentLine]: isCorrect }))
    setTimeout(() => {
      if (currentLine + 1 < lines.length) {
        setCurrentLine(c => c + 1)
      } else {
        addXP(story.xp)
        completeLesson(`story-${story.id}`)
        setShowComplete(true)
      }
    }, 1500)
  }

  const handleNext = () => {
    if (currentLine + 1 < lines.length) {
      setCurrentLine(c => c + 1)
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={story.title} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-4">
            <Link href="/stories" className="hover:text-primary">القصص</Link>
            <span>←</span>
            <span className="text-[var(--text-primary)]">{story.title}</span>
          </div>

          {/* Progress */}
          <div className="progress-track h-2 mb-5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentLine + 1) / lines.length) * 100}%` }}
              className="progress-fill h-full"
            />
          </div>

          {/* Story Content */}
          <AnimatePresence mode="wait">
            {!showComplete ? (
              <motion.div
                key={currentLine}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {lines.slice(0, currentLine + 1).map((line, i) => (
                  <StoryLine
                    key={i}
                    line={line}
                    index={i}
                    isActive={i === currentLine}
                  />
                ))}

                {lines[currentLine]?.type === 'question' && !answers.hasOwnProperty(currentLine) && (
                  <QuestionCard
                    line={lines[currentLine]}
                    onAnswer={handleAnswer}
                    answered={!!answers.hasOwnProperty(currentLine)}
                    isCorrect={answers[currentLine]}
                  />
                )}

                {lines[currentLine]?.type !== 'question' && currentLine + 1 < lines.length && (
                  <div className="flex justify-center">
                    <button
                      onClick={handleNext}
                      className="btn btn-primary py-3 px-8"
                    >
                      التالي ←
                    </button>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="solid-card p-6 text-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-xl font-extrabold text-[var(--text-primary)] mb-2">أحسنت! أكملت القصة</h2>
                <p className="text-sm text-[var(--text-muted)] mb-4">{story.titleEn}</p>

                <div className="bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-extrabold text-primary">{correctAnswers}/{totalQuestions}</div>
                      <div className="text-xs text-[var(--text-muted)]">إجابات صحيحة</div>
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-warning">+{story.xp}</div>
                      <div className="text-xs text-[var(--text-muted)]">XP</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link href="/stories" className="flex-1 btn btn-secondary py-3">
                    القصص
                  </Link>
                  <Link href="/" className="flex-1 btn btn-primary py-3">
                    الرئيسية
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
