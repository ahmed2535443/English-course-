'use client'
import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { LESSONS } from '@/data/lessons'
import { useApp } from '@/context/AppContext'
import { useSpeech } from '@/hooks/useSpeech'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

const sectionIcons = {
  dialog: { icon: '💬', gradient: 'from-indigo-500 to-blue-500', shadow: 'shadow-indigo-500/20' },
  vocab: { icon: '📖', gradient: 'from-emerald-500 to-teal-400', shadow: 'shadow-emerald-500/20' },
  grammar: { icon: '💡', gradient: 'from-purple-500 to-pink-400', shadow: 'shadow-purple-500/20' },
  pron: { icon: '🗣️', gradient: 'from-amber-500 to-orange-400', shadow: 'shadow-amber-500/20' },
  cul: { icon: '🌍', gradient: 'from-rose-500 to-red-400', shadow: 'shadow-rose-500/20' },
}

function SectionCard({ icon, gradient, shadow, title, delay, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="card overflow-hidden mb-4"
    >
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className={`w-11 h-11 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-white text-lg shadow-lg ${shadow}`}>
            {icon}
          </div>
          <div className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100">{title}</div>
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
  const { speak } = useSpeech()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!lesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-slate-500">الحلقة غير موجودة</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={`الحلقة ${lesson.id}`} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-5 hover:underline"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            العودة للدروس
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-6 text-slate-800 dark:text-slate-100"
          >
            <span className="text-2xl md:text-3xl">{lesson.i}</span>{' '}
            الحلقة {lesson.id}: {lesson.t}
          </motion.h1>

          {/* Dialogue */}
          <SectionCard {...sectionIcons.dialog} delay={0.1} title="المحادثة">
            <div className="space-y-3">
              {lesson.dlg.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="flex gap-2.5 items-start"
                >
                  <span
                    className="min-w-[70px] px-2.5 py-1.5 rounded-xl text-[11px] font-bold text-white text-center flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: line.c }}
                  >
                    {line.s}
                  </span>
                  <div className="flex-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-3 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold direction-ltr text-left text-slate-700 dark:text-slate-200">{line.e}</div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{line.a}</div>
                    </div>
                    <button
                      onClick={() => speak(line.e)}
                      className="w-9 h-9 rounded-xl bg-indigo-500 text-white flex items-center justify-center text-sm flex-shrink-0 hover:scale-110 transition-transform shadow-sm"
                    >
                      🔊
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionCard>

          {/* Vocabulary */}
          <SectionCard {...sectionIcons.vocab} delay={0.2} title="المفردات التفصيلية">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {lesson.voc.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => speak(v.e)}
                  className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-xl p-4 text-center cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:shadow-md transition-all duration-200"
                >
                  <div className="text-base font-bold direction-ltr text-slate-700 dark:text-slate-200">{v.e}</div>
                  <div className="text-sm text-indigo-600 dark:text-indigo-400 mt-1 font-semibold">{v.a}</div>
                  {v.d && (
                    <div className="text-xs text-slate-400 dark:text-slate-500 mt-2 text-right leading-relaxed">
                      {v.d}
                    </div>
                  )}
                  {v.cl && (
                    <div className="flex flex-wrap gap-1.5 mt-2 justify-center">
                      {v.cl.map((c, j) => (
                        <span
                          key={j}
                          className="bg-slate-100 dark:bg-slate-700/50 px-2.5 py-1 rounded-full text-[11px] font-semibold direction-ltr text-slate-600 dark:text-slate-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                  {v.us &&
                    v.us.map((u, j) => (
                      <div
                        key={j}
                        className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/15 rounded-lg p-2.5 mt-2 text-left"
                      >
                        <div className="text-[11px] font-bold text-indigo-500 mb-1">📝 {u.t}</div>
                        <div className="text-xs font-semibold direction-ltr text-slate-700 dark:text-slate-200">{u.e}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{u.a}</div>
                      </div>
                    ))}
                  {v.ms &&
                    v.ms.map((m, j) => (
                      <div
                        key={j}
                        className="bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/15 rounded-lg p-2.5 mt-2"
                      >
                        <div className="text-xs font-semibold text-red-500 line-through direction-ltr">
                          ❌ {m.w}
                        </div>
                        <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 direction-ltr">
                          ✅ {m.c}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-1">{m.n}</div>
                      </div>
                    ))}
                </motion.div>
              ))}
            </div>
          </SectionCard>

          {/* Grammar */}
          <SectionCard {...sectionIcons.grammar} delay={0.3} title="القواعد النحوية">
            <div className="space-y-3">
              {lesson.gram.map((g, i) => (
                <div
                  key={i}
                  className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-4"
                >
                  <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">{g.t}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{g.d}</div>
                  {g.r && (
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
                      القاعدة: <strong className="text-slate-800 dark:text-slate-100">{g.r}</strong>
                    </div>
                  )}
                  {g.ex &&
                    g.ex.map((x, j) => (
                      <div
                        key={j}
                        className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-lg p-2.5 mt-2"
                      >
                        <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 direction-ltr text-left">
                          {x.e}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">{x.a}</div>
                      </div>
                    ))}
                  {g.tp && (
                    <div className="text-xs text-purple-500 mt-2">💡 {g.tp}</div>
                  )}
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Pronunciation */}
          {lesson.pron && lesson.pron.length > 0 && (
            <SectionCard {...sectionIcons.pron} delay={0.4} title="نصائح النطق">
              <div className="space-y-2">
                {lesson.pron.map((p, i) => (
                  <div
                    key={i}
                    className="bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/15 rounded-xl p-3"
                  >
                    <div className="text-sm font-bold text-amber-600 dark:text-amber-400 direction-ltr">{p.w}</div>
                    <div className="text-xs text-slate-500 mt-1">{p.t}</div>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Cultural */}
          {lesson.cul && lesson.cul.length > 0 && (
            <SectionCard {...sectionIcons.cul} delay={0.5} title="ملاحظات ثقافية">
              <div className="space-y-2">
                {lesson.cul.map((c, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-500/10 dark:to-pink-500/10 border border-rose-100 dark:border-rose-500/15 rounded-xl p-3 flex items-start gap-2"
                  >
                    <span className="text-base">📌</span>
                    <span className="text-xs text-slate-500 leading-relaxed">{c.n}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Start Exercise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-6 pb-8"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => router.push(`/exercise/${lesson.id}`)}
              className="w-full max-w-sm mx-auto py-4 rounded-2xl btn-primary text-[15px] flex items-center justify-center gap-2"
            >
              <span>📝</span>
              <span>ابدأ التمرين</span>
            </motion.button>
          </motion.div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
