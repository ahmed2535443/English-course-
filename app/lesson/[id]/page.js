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

export default function LessonPage({ params }) {
  const { id } = use(params)
  const router = useRouter()
  const lesson = LESSONS.find((l) => l.id === Number(id))
  const course = getCourseForLesson(Number(id))
  const level = getLevelForLesson(Number(id))
  const { speak } = useSpeech()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('dialog')

  if (!lesson) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <p className="text-gray-500 dark:text-gray-400 font-bold">الدرس غير موجود</p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'dialog', label: 'المحادثة', icon: '💬' },
    { id: 'vocab', label: 'المفردات', icon: '📖' },
    { id: 'grammar', label: 'القواعد', icon: '💡' },
    { id: 'pron', label: 'النطق', icon: '🗣️' },
    { id: 'cul', label: 'الثقافة', icon: '🌍' },
  ]

  const activeTabIndex = tabs.findIndex(t => t.id === activeTab)
  const progress = ((activeTabIndex + 1) / tabs.length) * 100

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header className="h-14 bg-white dark:bg-[#1a2a32] px-4 flex items-center justify-between sticky top-0 z-30 border-b-2 border-gray-100 dark:border-[#233640]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-[#233640] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-sm font-extrabold text-gray-900 dark:text-white truncate">{lesson.t}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">{lesson.i}</span>
          </div>
        </header>

        {/* Progress Bar */}
        <div className="h-2 bg-gray-100 dark:bg-[#233640]">
          <div className="h-full bg-[#58CC02] transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>

        <main className="flex-1 pb-32">
          {/* Lesson Header */}
          <div className="bg-gradient-to-br from-[#58CC02] to-[#46A302] px-5 py-8 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="text-6xl mb-4"
              >
                {lesson.i}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-3xl font-extrabold mb-2"
              >
                {lesson.t}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white/80 font-medium"
              >
                {course?.name || 'محادثة'}
              </motion.p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto px-5">
            {/* Tabs */}
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide -mx-5 px-5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#58CC02] text-white shadow-lg shadow-[#58CC02]/30'
                      : 'bg-gray-100 dark:bg-[#233640] text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#2a3a42]'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {/* Dialogue */}
              {activeTab === 'dialog' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h2 className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                    💬 المحادثة
                  </h2>
                  <div className="bg-gray-50 dark:bg-[#233640] rounded-2xl p-4 border-2 border-gray-100 dark:border-[#2a3a42]">
                    <div className="space-y-4">
                      {lesson.dlg.map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * i }}
                          className="flex gap-3 items-start"
                        >
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg"
                            style={{ backgroundColor: line.c }}
                          >
                            {line.s.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-bold mb-1" style={{ color: line.c }}>{line.s}</div>
                            <div className="bg-white dark:bg-[#1a2a32] border-2 border-gray-100 dark:border-[#233640] rounded-2xl rounded-tr-sm p-3 shadow-sm">
                              <div className="text-sm font-bold direction-ltr text-gray-900 dark:text-white leading-relaxed">{line.e}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 italic">{line.a}</div>
                            </div>
                            <button
                              onClick={() => speak(line.e)}
                              className="mt-2 flex items-center gap-1 text-xs font-bold text-[#1CB0F6] hover:text-[#1899D6] transition-colors"
                            >
                              🔊 استمع
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Vocabulary */}
              {activeTab === 'vocab' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h2 className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                    📖 المفردات التفصيلية
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {lesson.voc.map((v, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * i }}
                        onClick={() => speak(v.e)}
                        className="bg-white dark:bg-[#1a2a32] border-2 border-gray-100 dark:border-[#233640] rounded-2xl p-4 cursor-pointer hover:border-[#58CC02]/30 hover:shadow-md transition-all duration-200"
                      >
                        <div className="text-base font-extrabold direction-ltr text-gray-900 dark:text-white">{v.e}</div>
                        <div className="text-sm font-bold text-[#58CC02] mt-1">{v.a}</div>
                        {v.d && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed">{v.d}</div>
                        )}
                        {v.cl && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {v.cl.map((c, j) => (
                              <span key={j} className="bg-gray-100 dark:bg-[#233640] px-2 py-0.5 rounded-full text-[10px] font-bold text-gray-500 dark:text-gray-400 direction-ltr">
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                        {v.us && v.us.map((u, j) => (
                          <div key={j} className="bg-[#58CC02]/5 border-2 border-[#58CC02]/10 rounded-xl p-3 mt-2 text-left">
                            <div className="text-[11px] font-bold text-[#58CC02] mb-0.5">📝 {u.t}</div>
                            <div className="text-xs font-bold direction-ltr text-gray-900 dark:text-white">{u.e}</div>
                            <div className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{u.a}</div>
                          </div>
                        ))}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Grammar */}
              {activeTab === 'grammar' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h2 className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                    💡 القواعد النحوية
                  </h2>
                  <div className="space-y-3">
                    {lesson.gram.map((g, i) => (
                      <div key={i} className="bg-white dark:bg-[#1a2a32] border-2 border-gray-100 dark:border-[#233640] rounded-2xl p-4">
                        <div className="text-sm font-extrabold text-[#1CB0F6] mb-2">{g.t}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{g.d}</div>
                        {g.r && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            القاعدة: <strong className="text-gray-900 dark:text-white">{g.r}</strong>
                          </div>
                        )}
                        {g.ex && g.ex.map((x, j) => (
                          <div key={j} className="bg-gray-50 dark:bg-[#233640] border-2 border-gray-100 dark:border-[#2a3a42] rounded-xl p-3 mt-2">
                            <div className="text-sm font-bold text-[#58CC02] direction-ltr">{x.e}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{x.a}</div>
                          </div>
                        ))}
                        {g.tp && <div className="text-xs text-[#FF9600] mt-2 font-bold">💡 {g.tp}</div>}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Pronunciation */}
              {activeTab === 'pron' && lesson.pron && lesson.pron.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h2 className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                    🗣️ نصائح النطق
                  </h2>
                  <div className="space-y-3">
                    {lesson.pron.map((p, i) => (
                      <div key={i} className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-2xl p-4">
                        <div className="text-sm font-extrabold text-amber-600 dark:text-amber-400 direction-ltr">{p.w}</div>
                        <div className="text-xs text-amber-700 dark:text-amber-300 mt-1">{p.t}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Cultural */}
              {activeTab === 'cul' && lesson.cul && lesson.cul.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h2 className="text-lg font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                    🌍 ملاحظات ثقافية
                  </h2>
                  <div className="space-y-3">
                    {lesson.cul.map((c, i) => (
                      <div key={i} className="flex items-start gap-3 bg-rose-50 dark:bg-rose-900/20 border-2 border-rose-200 dark:border-rose-800 rounded-2xl p-4">
                        <span className="text-xl">📌</span>
                        <span className="text-sm text-rose-700 dark:text-rose-300 leading-relaxed font-medium">{c.n}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button
                onClick={() => router.push(`/exercise/${lesson.id}`)}
                className="w-full py-4 rounded-2xl bg-gray-100 dark:bg-[#233640] text-gray-700 dark:text-gray-300 font-extrabold text-lg border-2 border-gray-200 dark:border-[#2a3a42] shadow-[0_4px_0_#d0d0d0] dark:shadow-[0_4px_0_#1a2a32] hover:translate-y-[1px] hover:shadow-[0_3px_0_#d0d0d0] dark:hover:shadow-[0_3px_0_#1a2a32] active:translate-y-[4px] active:shadow-none transition-all"
              >
                📝 التمرين
              </button>
              <button
                onClick={() => router.push(`/quiz/${lesson.id}`)}
                className="w-full py-4 rounded-2xl bg-[#58CC02] text-white font-extrabold text-lg shadow-[0_4px_0_#46A302] hover:translate-y-[1px] hover:shadow-[0_3px_0_#46A302] active:translate-y-[4px] active:shadow-none transition-all"
              >
                🎯 الكويز
              </button>
            </div>
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
