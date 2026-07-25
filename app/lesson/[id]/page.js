'use client'
import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { LESSONS } from '@/data/lessons'
import { getCourseForLesson, getLevelForLesson } from '@/data/curriculum'
import { useApp } from '@/context/AppContext'
import { useSpeech } from '@/hooks/useSpeech'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

const SECTIONS = {
  dialog: { icon: '💬', gradient: 'from-indigo-500 to-blue-500' },
  vocab: { icon: '📖', gradient: 'from-emerald-500 to-teal-400' },
  grammar: { icon: '💡', gradient: 'from-violet-500 to-purple-400' },
  pron: { icon: '🗣️', gradient: 'from-amber-500 to-orange-400' },
  cul: { icon: '🌍', gradient: 'from-rose-500 to-pink-400' },
}

function Section({ icon, gradient, title, delay, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35 }}
      className="solid-card mb-3"
    >
      <div className="p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-[var(--radius-sm)] bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-base shadow-md`}>
            {icon}
          </div>
          <h3 className="text-base font-bold text-[var(--text-primary)]">{title}</h3>
        </div>
        {children}
      </div>
    </motion.div>
  )
}

export default function LessonPage({ params }) {
  const { id } = use(params)
  const router = useRouter()
  const lesson = LESSONS.find((l) => l.id === Number(id))
  const course = getCourseForLesson(Number(id))
  const level = getLevelForLesson(Number(id))
  const { speak } = useSpeech()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!lesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[var(--text-muted)]">الدرس غير موجود</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={lesson.t} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-4 flex-wrap">
            {level && (
              <Link href={`/level/${level.id}`} className="text-primary hover:underline">
                {level.name}
              </Link>
            )}
            {level && course && <span className="text-[var(--text-muted)]">←</span>}
            {course && (
              <Link href={`/course/${course.id}`} className="text-primary hover:underline">
                {course.name}
              </Link>
            )}
            {course && <span className="text-[var(--text-muted)]">←</span>}
            <span className="text-[var(--text-muted)]">{lesson.t}</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)] mb-5"
          >
            <span className="text-2xl">{lesson.i}</span>{' '}
            {lesson.t}
          </motion.h1>

          {/* Dialogue */}
          <Section {...SECTIONS.dialog} delay={0.1} title="المحادثة">
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
                  <div className="flex-1 bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-3 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-sm font-semibold direction-ltr text-[var(--text-primary)]">{line.e}</div>
                      <div className="text-xs text-[var(--text-muted)] mt-0.5">{line.a}</div>
                    </div>
                    <button
                      onClick={() => speak(line.e)}
                      className="btn-icon w-8 h-8 flex-shrink-0 text-sm hover:text-primary"
                    >
                      🔊
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Vocabulary */}
          <Section {...SECTIONS.vocab} delay={0.15} title="المفردات التفصيلية">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {lesson.voc.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.04 * i }}
                  onClick={() => speak(v.e)}
                  className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4 cursor-pointer hover:border-primary/30 hover:shadow-md transition-all duration-200"
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
          </Section>

          {/* Grammar */}
          <Section {...SECTIONS.grammar} delay={0.2} title="القواعد النحوية">
            <div className="space-y-2.5">
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
          </Section>

          {/* Pronunciation */}
          {lesson.pron && lesson.pron.length > 0 && (
            <Section {...SECTIONS.pron} delay={0.25} title="نصائح النطق">
              <div className="space-y-2">
                {lesson.pron.map((p, i) => (
                  <div key={i} className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200/60 dark:border-amber-500/20 rounded-[var(--radius-md)] p-3">
                    <div className="text-sm font-bold text-amber-700 dark:text-amber-300 direction-ltr">{p.w}</div>
                    <div className="text-xs text-amber-800 dark:text-amber-200/70 mt-0.5">{p.t}</div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Cultural */}
          {lesson.cul && lesson.cul.length > 0 && (
            <Section {...SECTIONS.cul} delay={0.3} title="ملاحظات ثقافية">
              <div className="space-y-2">
                {lesson.cul.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 bg-rose-50 dark:bg-rose-900/20 border border-rose-200/60 dark:border-rose-500/20 rounded-[var(--radius-md)] p-3">
                    <span className="text-sm">📌</span>
                    <span className="text-xs text-rose-800 dark:text-rose-200/70 leading-relaxed">{c.n}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Start Exercise & Quiz */}
          <div className="flex gap-3 mb-4 max-w-md mx-auto">
            <button
              onClick={() => router.push(`/exercise/${lesson.id}`)}
              className="flex-1 btn btn-secondary py-3.5 text-[15px]"
            >
              📝 التمرين
            </button>
            <button
              onClick={() => router.push(`/quiz/${lesson.id}`)}
              className="flex-1 btn btn-primary py-3.5 text-[15px]"
            >
              🎯 الكويز
            </button>
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
