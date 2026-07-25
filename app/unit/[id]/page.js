'use client'
import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { getCourseById, getLessonsForCourse, getLevelForCourse } from '@/data/curriculum'
import { LESSONS } from '@/data/lessons'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

const STEP_INFO = {
  explanation: { title: "شرح الدرس", icon: "📖", description: "شرح المفاهيم والقواعد الجديدة" },
  vocabulary: { title: "الكلمات الجديدة", icon: "📝", description: "تعلم الكلمات والمصطلحات الجديدة" },
  conversation: { title: "المحادثة", icon: "🗣️", description: "تدريب على المحادثة اليومية" },
  practice: { title: "التدريبات", icon: "✏️", description: "تمارين تدريبية على محتوى الدرس" },
}

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
  const { cst, completeStep, setLastLocation, don } = useApp()

  const courseId = id
  const course = getCourseById(courseId)
  const level = course ? getLevelForCourse(courseId) : null
  const lessons = course ? getLessonsForCourse(courseId) : []

  if (!course || lessons.length === 0) {
    return (
      <div className="flex min-h-screen">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
          <TopNav title="الكورس" onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 page-container pb-32 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">الكورس غير متاح</h2>
              <p className="text-sm text-[var(--text-muted)] mt-2">قريباً إن شاء الله</p>
              {level && (
                <Link href={`/level/${level.id}`} className="btn btn-primary mt-4">
                  العودة للمستوى
                </Link>
              )}
            </div>
          </main>
        </div>
        <BottomNav />
      </div>
    )
  }

  const completedLessons = lessons.filter((l) => don.includes(l.id)).length
  const totalLessons = lessons.length
  const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={course.name} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          {level && (
            <Link
              href={`/level/${level.id}`}
              className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mb-4 hover:underline"
            >
              <span>←</span> العودة لـ {level.name}
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
                  📖
                </div>
                <div className="flex-1">
                  <h1 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)]">
                    {course.name}
                  </h1>
                  <p className="text-sm text-[var(--text-muted)] mt-1">{course.nameEn}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2 mt-4">
                <span>{totalLessons} دروس</span>
                <span>{completedLessons}/{totalLessons} مكتملة</span>
              </div>

              <div className="progress-track h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="progress-fill h-full"
                />
              </div>

              {completedLessons >= totalLessons && totalLessons > 0 && (
                <div className="mt-3 flex items-center gap-2 text-success text-sm font-bold">
                  <span>✓</span> أكملت هذا الكورس
                </div>
              )}
            </div>
          </motion.div>

          <div className="section-gap">
            <h2 className="text-base font-bold text-[var(--text-primary)] mb-3">الدروس</h2>
          </div>

          <div className="space-y-2.5">
            {lessons.map((lesson, i) => {
              const isCompleted = don.includes(lesson.id)
              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={`/lesson/${lesson.id}`}
                    className={`w-full text-start solid-card transition-all duration-200 hover:shadow-lg block`}
                  >
                    <div className="p-4 flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center text-xl text-white flex-shrink-0 shadow-md transition-transform duration-300 ${
                        isCompleted
                          ? 'bg-gradient-to-br from-success to-green-400'
                          : 'bg-gradient-to-br from-primary/20 to-secondary/20'
                      }`}>
                        {isCompleted ? '✅' : (lesson.icon || '📝')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {lesson.order}
                          </span>
                          <div className="text-[15px] font-bold text-[var(--text-primary)] truncate">
                            {lesson.title}
                          </div>
                        </div>
                        {lesson.titleEn && (
                          <div className="text-xs text-[var(--text-muted)] mt-0.5">{lesson.titleEn}</div>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-surface-hover)] flex items-center justify-center text-[var(--text-muted)]">
                        ←
                      </div>
                    </div>
                  </Link>
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
