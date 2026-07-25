'use client'
import { use, useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { getUnit, getLevelForUnit, STEP_INFO } from '@/data/course'
import { LESSONS } from '@/data/lessons'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

const STEP_GRADIENTS = {
  explanation: 'from-indigo-500 to-blue-500',
  vocabulary: 'from-emerald-500 to-teal-400',
  conversation: 'from-violet-500 to-purple-400',
  practice: 'from-amber-500 to-orange-400',
}

function ExplanationContent({ lesson }) {
  return (
    <div className="space-y-4">
      {lesson.gram && lesson.gram.length > 0 && (
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
            <span className="w-7 h-7 rounded-[var(--radius-sm)] bg-gradient-to-br from-violet-500 to-purple-400 flex items-center justify-center text-white text-xs">💡</span>
            القواعد النحوية
          </h4>
          <div className="space-y-2">
            {lesson.gram.map((g, i) => (
              <div key={i} className="bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4">
                <div className="text-sm font-bold text-secondary mb-1.5">{g.t}</div>
                <div className="text-xs text-[var(--text-muted)] leading-relaxed">{g.d}</div>
                {g.r && (
                  <div className="text-xs text-[var(--text-muted)] mt-1.5">
                    القاعدة: <strong className="text-[var(--text-primary)]">{g.r}</strong>
                  </div>
                )}
                {g.ex && g.ex.map((x, j) => (
                  <div key={j} className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)] p-2.5 mt-2">
                    <div className="text-sm font-semibold text-primary direction-ltr">{x.e}</div>
                    <div className="text-xs text-[var(--text-muted)] mt-0.5">{x.a}</div>
                  </div>
                ))}
                {g.tp && <div className="text-xs text-secondary mt-2">💡 {g.tp}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {lesson.pron && lesson.pron.length > 0 && (
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
            <span className="w-7 h-7 rounded-[var(--radius-sm)] bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center text-white text-xs">🗣️</span>
            نصائح النطق
          </h4>
          <div className="space-y-2">
            {lesson.pron.map((p, i) => (
              <div key={i} className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200/60 dark:border-amber-500/20 rounded-[var(--radius-md)] p-3">
                <div className="text-sm font-bold text-amber-700 dark:text-amber-300 direction-ltr">{p.w}</div>
                <div className="text-xs text-amber-800 dark:text-amber-200/70 mt-0.5">{p.t}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {lesson.cul && lesson.cul.length > 0 && (
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
            <span className="w-7 h-7 rounded-[var(--radius-sm)] bg-gradient-to-br from-rose-500 to-pink-400 flex items-center justify-center text-white text-xs">🌍</span>
            ملاحظات ثقافية
          </h4>
          <div className="space-y-2">
            {lesson.cul.map((c, i) => (
              <div key={i} className="flex items-start gap-2 bg-rose-50 dark:bg-rose-900/20 border border-rose-200/60 dark:border-rose-500/20 rounded-[var(--radius-md)] p-3">
                <span className="text-sm">📌</span>
                <span className="text-xs text-rose-800 dark:text-rose-200/70 leading-relaxed">{c.n}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function VocabularyContent({ lesson }) {
  return (
    <div className="grid grid-cols-1 gap-2.5">
      {lesson.voc.map((v, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.04 * i }}
          className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4"
        >
          <div className="text-base font-bold direction-ltr text-[var(--text-primary)]">{v.e}</div>
          <div className="text-sm text-primary font-semibold mt-1">{v.a}</div>
          {v.d && (
            <div className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">{v.d}</div>
          )}
          {v.cl && (
            <div className="flex flex-wrap gap-1 mt-2">
              {v.cl.map((c, j) => (
                <span key={j} className="bg-[var(--bg-surface-hover)] px-2 py-0.5 rounded-full text-[10px] font-semibold text-[var(--text-muted)] direction-ltr">
                  {c}
                </span>
              ))}
            </div>
          )}
          {v.us && v.us.map((u, j) => (
            <div key={j} className="bg-primary/5 border border-primary/10 rounded-[var(--radius-sm)] p-2.5 mt-2 text-left">
              <div className="text-[11px] font-bold text-primary mb-0.5">📝 {u.t}</div>
              <div className="text-xs font-semibold direction-ltr text-[var(--text-primary)]">{u.e}</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">{u.a}</div>
            </div>
          ))}
          {v.ms && v.ms.map((m, j) => (
            <div key={j} className="bg-error/5 border border-error/10 rounded-[var(--radius-sm)] p-2.5 mt-2">
              <div className="text-xs font-semibold text-error line-through direction-ltr">❌ {m.w}</div>
              <div className="text-xs font-semibold text-success direction-ltr">✅ {m.c}</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-1">{m.n}</div>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}

function ConversationContent({ lesson }) {
  return (
    <div className="space-y-2.5">
      {lesson.dlg.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.04 * i }}
          className="flex gap-2.5 items-start"
        >
          <span
            className="min-w-[64px] px-2 py-1.5 rounded-[var(--radius-sm)] text-[11px] font-bold text-white text-center flex-shrink-0"
            style={{ backgroundColor: line.c }}
          >
            {line.s}
          </span>
          <div className="flex-1 bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-3">
            <div className="text-sm font-semibold direction-ltr text-[var(--text-primary)]">{line.e}</div>
            <div className="text-xs text-[var(--text-muted)] mt-0.5">{line.a}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function UnitDetailPage({ params }) {
  const { id } = use(params)
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeStep, setActiveStep] = useState(null)
  const { cst, completeStep, setLastLocation } = useApp()

  const unit = getUnit(Number(id))
  const level = unit ? getLevelForUnit(unit.id) : null
  const lesson = unit ? LESSONS.find((l) => l.id === unit.lessonId) : null

  if (!unit || !lesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[var(--text-muted)]">الوحدة غير موجودة</p>
      </div>
    )
  }

  const completedSteps = cst[unit.id] || []
  const totalSteps = unit.steps.length
  const completedCount = completedSteps.length
  const pct = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0
  const isUnitCompleted = completedCount >= totalSteps

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step)
    setLastLocation(unit.id, step)
  }

  const markComplete = (step) => {
    completeStep(unit.id, step)
  }

  const currentStepIndex = activeStep ? unit.steps.indexOf(activeStep) : -1
  const prevStep = currentStepIndex > 0 ? unit.steps[currentStepIndex - 1] : null
  const nextStep = currentStepIndex < unit.steps.length - 1 ? unit.steps[currentStepIndex + 1] : null

  const renderStepContent = () => {
    if (!activeStep) return null
    switch (activeStep) {
      case 'explanation':
        return <ExplanationContent lesson={lesson} />
      case 'vocabulary':
        return <VocabularyContent lesson={lesson} />
      case 'conversation':
        return <ConversationContent lesson={lesson} />
      case 'practice':
        return (
          <div className="text-center py-6">
            <div className="text-4xl mb-3">✏️</div>
            <p className="text-sm text-[var(--text-muted)] mb-4">تمارين تدريبية على محتوى الدرس</p>
            <Link
              href={`/exercise/${lesson.id}`}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-md)] text-sm font-bold"
            >
              ابدأ التمرين
            </Link>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={`الوحدة ${unit.id}`} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          {level && (
            <Link
              href={`/level/${level.id}`}
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mb-4 hover:underline"
            >
              <span>←</span> العودة لـ {level.title}
            </Link>
          )}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="solid-card mb-5"
          >
            <div className="p-5">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-[var(--radius-md)] bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-3xl text-white shadow-lg shadow-primary/20">
                  {unit.icon}
                </div>
                <div className="flex-1">
                  <h1 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)]">
                    الوحدة {unit.id}: {unit.title}
                  </h1>
                  <p className="text-sm text-[var(--text-muted)] mt-1">{unit.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2 mt-4">
                <span>{totalSteps} خطوات</span>
                <span>{completedCount}/{totalSteps} مكتملة</span>
              </div>

              <div className="progress-track h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="progress-fill h-full"
                />
              </div>

              {isUnitCompleted && (
                <div className="mt-3 flex items-center gap-2 text-success text-sm font-bold">
                  <span>✓</span> أكملت هذه الوحدة
                </div>
              )}
            </div>
          </motion.div>

          <div className="section-gap">
            <h2 className="text-base font-bold text-[var(--text-primary)] mb-3">خطوات التعلم</h2>
          </div>

          <div className="space-y-2.5">
            {unit.steps.map((step, i) => {
              const info = STEP_INFO[step]
              const isDone = completedSteps.includes(step)
              const isActive = activeStep === step

              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <button
                    onClick={() => toggleStep(step)}
                    className={`w-full text-start solid-card transition-all duration-200 ${
                      isActive ? 'ring-2 ring-primary/30' : ''
                    }`}
                  >
                    <div className="p-4 flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-[var(--radius-sm)] bg-gradient-to-br ${STEP_GRADIENTS[step]} flex items-center justify-center text-xl text-white flex-shrink-0 shadow-md transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}>
                        {info.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[15px] font-bold text-[var(--text-primary)]">
                          {info.title}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-0.5">{info.description}</div>
                      </div>
                      {isDone ? (
                        <div className="w-8 h-8 rounded-full bg-success/15 flex items-center justify-center text-success text-sm flex-shrink-0">
                          ✓
                        </div>
                      ) : (
                        <div className={`w-8 h-8 rounded-full bg-[var(--bg-surface-hover)] flex items-center justify-center text-[var(--text-faint)] text-sm flex-shrink-0 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}>
                          ↓
                        </div>
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] border-t-0 rounded-b-[var(--radius-md)] p-4">
                          {renderStepContent()}

                          <div className="flex items-center justify-between mt-5 pt-4 border-t border-[var(--border-subtle)]">
                            <div className="flex items-center gap-2">
                              {!isDone && step !== 'practice' && (
                                <button
                                  onClick={(e) => { e.stopPropagation(); markComplete(step) }}
                                  className="btn-primary px-4 py-2 rounded-[var(--radius-sm)] text-xs font-bold"
                                >
                                  ✓ تم الإكمال
                                </button>
                              )}
                              {!isDone && step === 'practice' && (
                                <button
                                  onClick={(e) => { e.stopPropagation(); markComplete(step) }}
                                  className="btn-primary px-4 py-2 rounded-[var(--radius-sm)] text-xs font-bold"
                                >
                                  ✓ تم الإكمال
                                </button>
                              )}
                              {isDone && (
                                <span className="text-xs text-success font-bold flex items-center gap-1">
                                  ✓ مكتمل
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2">
                              {prevStep && (
                                <button
                                  onClick={(e) => { e.stopPropagation(); toggleStep(prevStep) }}
                                  className="btn-ghost px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold"
                                >
                                  ← السابق
                                </button>
                              )}
                              {nextStep && (
                                <button
                                  onClick={(e) => { e.stopPropagation(); toggleStep(nextStep) }}
                                  className="btn-ghost px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-semibold"
                                >
                                  التالي →
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
