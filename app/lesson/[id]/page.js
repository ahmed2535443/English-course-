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

export default function LessonPage({ params }) {
  const { id } = use(params)
  const router = useRouter()
  const lesson = LESSONS.find((l) => l.id === Number(id))
  const { speak } = useSpeech()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!lesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>الحلقة غير موجودة</p>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={`الحلقة ${lesson.id}`} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 md:p-6 max-w-[800px] w-full mx-auto pb-24 lg:pb-6">
          <Link
            href="/"
            className="text-primary text-sm font-semibold mb-4 inline-block hover:underline"
          >
            ← العودة للدروس
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-extrabold mb-6"
          >
            {lesson.i} الحلقة {lesson.id}: {lesson.t}
          </motion.h1>

          {/* Dialogue */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 mb-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-[10px] flex items-center justify-center text-white text-lg">
                💬
              </div>
              <div className="text-base font-bold">المحادثة</div>
            </div>
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
                    className="min-w-[70px] px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-white text-center flex-shrink-0"
                    style={{ backgroundColor: line.c }}
                  >
                    {line.s}
                  </span>
                  <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-3 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold direction-ltr text-left">{line.e}</div>
                      <div className="text-xs text-neutral-500 mt-0.5">{line.a}</div>
                    </div>
                    <button
                      onClick={() => speak(line.e)}
                      className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm flex-shrink-0 hover:scale-110 transition-transform"
                    >
                      🔊
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vocabulary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 mb-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-success to-success-light rounded-[10px] flex items-center justify-center text-white text-lg">
                📖
              </div>
              <div className="text-base font-bold">المفردات التفصيلية</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {lesson.voc.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => speak(v.e)}
                  className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 text-center cursor-pointer hover:border-primary hover:shadow-md transition-all"
                >
                  <div className="text-base font-bold direction-ltr">{v.e}</div>
                  <div className="text-sm text-primary mt-1">{v.a}</div>
                  {v.d && (
                    <div className="text-xs text-neutral-500 mt-2 text-right leading-relaxed">
                      {v.d}
                    </div>
                  )}
                  {v.cl && (
                    <div className="flex flex-wrap gap-1.5 mt-2 justify-center">
                      {v.cl.map((c, j) => (
                        <span
                          key={j}
                          className="bg-neutral-100 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 px-2.5 py-1 rounded-full text-[11px] font-semibold direction-ltr"
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
                        className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/15 rounded-lg p-2.5 mt-2 text-left"
                      >
                        <div className="text-[11px] font-bold text-primary mb-1">📝 {u.t}</div>
                        <div className="text-xs font-semibold direction-ltr">{u.e}</div>
                        <div className="text-[11px] text-neutral-500 mt-0.5">{u.a}</div>
                      </div>
                    ))}
                  {v.ms &&
                    v.ms.map((m, j) => (
                      <div
                        key={j}
                        className="bg-error/5 border border-error/15 rounded-lg p-2.5 mt-2"
                      >
                        <div className="text-xs font-semibold text-error line-through direction-ltr">
                          ❌ {m.w}
                        </div>
                        <div className="text-xs font-semibold text-success direction-ltr">
                          ✅ {m.c}
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-1">{m.n}</div>
                      </div>
                    ))}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Grammar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 mb-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-light rounded-[10px] flex items-center justify-center text-white text-lg">
                💡
              </div>
              <div className="text-base font-bold">القواعد النحوية</div>
            </div>
            <div className="space-y-3">
              {lesson.gram.map((g, i) => (
                <div
                  key={i}
                  className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4"
                >
                  <div className="text-sm font-bold text-secondary mb-2">{g.t}</div>
                  <div className="text-xs text-neutral-500 leading-relaxed">{g.d}</div>
                  {g.r && (
                    <div className="text-xs text-neutral-500 mt-1.5">
                      القاعدة: <strong className="text-neutral-900 dark:text-white">{g.r}</strong>
                    </div>
                  )}
                  {g.ex &&
                    g.ex.map((x, j) => (
                      <div
                        key={j}
                        className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg p-2.5 mt-2"
                      >
                        <div className="text-sm font-semibold text-primary direction-ltr text-left">
                          {x.e}
                        </div>
                        <div className="text-xs text-neutral-500 mt-0.5">{x.a}</div>
                      </div>
                    ))}
                  {g.tp && (
                    <div className="text-xs text-secondary mt-2">💡 {g.tp}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pronunciation */}
          {lesson.pron && lesson.pron.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 mb-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-warning to-amber-400 rounded-[10px] flex items-center justify-center text-white text-lg">
                  🗣️
                </div>
                <div className="text-base font-bold">نصائح النطق</div>
              </div>
              <div className="space-y-2">
                {lesson.pron.map((p, i) => (
                  <div
                    key={i}
                    className="bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 rounded-lg p-3"
                  >
                    <div className="text-sm font-bold text-cyan-600 direction-ltr">{p.w}</div>
                    <div className="text-xs text-neutral-500 mt-1">{p.t}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Cultural */}
          {lesson.cul && lesson.cul.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 mb-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-pink-400 rounded-[10px] flex items-center justify-center text-white text-lg">
                  🌍
                </div>
                <div className="text-base font-bold">ملاحظات ثقافية</div>
              </div>
              <div className="space-y-2">
                {lesson.cul.map((c, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/15 rounded-lg p-3 flex items-start gap-2"
                  >
                    <span className="text-base">📌</span>
                    <span className="text-xs text-neutral-500 leading-relaxed">{c.n}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              className="w-full max-w-xs mx-auto py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-[15px] hover:shadow-lg transition-all"
            >
              📝 ابدأ التمرين
            </motion.button>
          </motion.div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
