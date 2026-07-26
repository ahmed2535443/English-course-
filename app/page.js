'use client'
import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { useSounds } from '@/hooks/useSounds'
import { LESSONS } from '@/data/lessons'
import { LEVELS, getPublishedLevels } from '@/data/course'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import StreakBanner from '@/components/StreakBanner'
import Link from 'next/link'

const MASCOTS = ['🦉', '🐱', '🐶', '🦊', '🐻']
const MOTIVATIONAL = [
  'أحسنت! كمّل كده!',
  'ممتاز! إنت أقوى مما تتخيل!',
  'رائع! كل درس بيقرّبك من الهدف!',
  'يلا نكمل! مافيش حاجة توقفك!',
  'برافو عليك! إنت بتبني مستقبلك!'
]

const CONVERSATION_LESSONS = LESSONS.filter(l => l.id >= 1 && l.id <= 9)

const LESSON_COLORS = [
  'from-blue-400 to-blue-600',
  'from-green-400 to-green-600',
  'from-purple-400 to-purple-600',
  'from-pink-400 to-pink-600',
  'from-amber-400 to-amber-600',
  'from-red-400 to-red-600',
  'from-teal-400 to-teal-600',
  'from-indigo-400 to-indigo-600',
  'from-cyan-400 to-cyan-600',
]

export default function HomePage() {
  const { don, xp, str, cst, srs, buildSRS } = useApp()
  const { play } = useSounds()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const randomMascot = useMemo(() => MASCOTS[Math.floor(Math.random() * MASCOTS.length)], [])
  const randomMotivation = useMemo(() => MOTIVATIONAL[Math.floor(Math.random() * MOTIVATIONAL.length)], [])

  useEffect(() => {
    buildSRS()
  }, [buildSRS])

  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0
  const completedCount = don.filter(id => id >= 1 && id <= 9).length
  const totalLessons = CONVERSATION_LESSONS.length
  const hearts = cst?.hearts ?? 5

  const getNextLesson = () => {
    return CONVERSATION_LESSONS.find(l => !don.includes(l.id)) || null
  }

  const next = getNextLesson()

  const getPathStatus = (lessonIndex) => {
    const lesson = CONVERSATION_LESSONS[lessonIndex]
    if (!lesson) return 'locked'
    if (don.includes(lesson.id)) return 'completed'
    
    const prevLesson = CONVERSATION_LESSONS[lessonIndex - 1]
    if (!prevLesson || don.includes(prevLesson.id)) return 'current'
    
    return 'locked'
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="الرئيسية" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 pb-32" style={{ background: 'var(--bg)' }}>
          <StreakBanner />

          {/* Hero Section */}
          <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #58CC02 0%, #46A302 100%)' }}>
            <div className="max-w-2xl mx-auto px-5 py-8 text-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="text-6xl mb-4"
              >
                {randomMascot}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-extrabold text-white mb-2"
              >
                مرحباً! 👋
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/90 font-medium"
              >
                {randomMotivation}
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-4 mt-6"
              >
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-xl">🔥</span>
                  <span className="text-white font-bold">{str || 0}</span>
                  <span className="text-white/80 text-sm">يوم</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-xl">⭐</span>
                  <span className="text-white font-bold">{xp || 0}</span>
                  <span className="text-white/80 text-sm">XP</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-xl">❤️</span>
                  <span className="text-white font-bold">{hearts}</span>
                  <span className="text-white/80 text-sm">قلب</span>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto px-5">
            {/* Continue Learning */}
            {next && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative -mt-6 mb-6"
              >
                <Link
                  href={`/lesson/${next.id}`}
                  onClick={() => play('start')}
                  className="block bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-xl border-2 border-[#58CC02]/20 hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#58CC02] flex items-center justify-center text-3xl text-white shadow-lg shadow-[#58CC02]/30 group-hover:scale-110 transition-transform">
                      ▶️
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-[#58CC02] uppercase tracking-wide">كمّل التعلم</div>
                      <div className="text-lg font-extrabold text-gray-900 dark:text-white">{next.t}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">محادثة</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-[#58CC02]/10 flex items-center justify-center text-[#58CC02] group-hover:translate-x-[-4px] transition-transform">
                      ←
                    </div>
                  </div>
                  <div className="mt-4 h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#58CC02] rounded-full transition-all duration-500"
                      style={{ width: `${(completedCount / totalLessons) * 100}%` }}
                    />
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Learning Path */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
                🗺️ مسار التعلم
              </h2>

              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full" />

                {/* Lessons */}
                <div className="space-y-4">
                  {CONVERSATION_LESSONS.map((lesson, index) => {
                    const status = getPathStatus(index)
                    const isCompleted = status === 'completed'
                    const isCurrent = status === 'current'
                    const isLocked = status === 'locked'
                    const colorClass = LESSON_COLORS[index % LESSON_COLORS.length]

                    return (
                      <motion.div
                        key={lesson.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="relative pl-14"
                      >
                        {/* Node */}
                        <div className={`absolute left-3.5 top-4 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 z-10 ${
                          isCompleted ? 'bg-[#58CC02]' : isCurrent ? 'bg-[#1CB0F6]' : 'bg-gray-300 dark:bg-gray-600'
                        }`} />

                        {/* Card */}
                        <Link
                          href={isLocked ? '#' : `/lesson/${lesson.id}`}
                          onClick={() => !isLocked && play('click')}
                          className={`block rounded-2xl p-4 transition-all ${
                            isCompleted
                              ? 'bg-[#58CC02]/10 border-2 border-[#58CC02]/30'
                              : isCurrent
                              ? 'bg-white dark:bg-gray-800 border-2 border-[#1CB0F6] shadow-lg shadow-[#1CB0F6]/20'
                              : 'bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 opacity-60'
                          } ${isLocked ? 'pointer-events-none' : ''}`}
                        >
                          <div className="flex items-center gap-4">
                            {/* Icon */}
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center text-2xl text-white shadow-lg flex-shrink-0 ${
                              isCurrent ? 'animate-bounce' : ''
                            }`}>
                              {isCompleted ? '✓' : lesson.i}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-extrabold text-gray-900 dark:text-white">
                                {lesson.t}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                الدرس {index + 1} من {totalLessons}
                              </div>
                            </div>

                            {/* Badge */}
                            {isCompleted && (
                              <div className="bg-[#58CC02] text-white text-xs font-bold px-3 py-1 rounded-full">
                                +10 XP
                              </div>
                            )}
                            {isCurrent && (
                              <div className="bg-[#1CB0F6] text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                الحالي
                              </div>
                            )}
                            {isLocked && (
                              <div className="text-gray-400 dark:text-gray-500 text-xl">🔒</div>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">
                ⚡ وصول سريع
              </h2>

              <div className="grid grid-cols-2 gap-3">
                <Link href="/stories" onClick={() => play('click')} className="group bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 border-gray-100 dark:border-gray-700 hover:border-[#58CC02]/30 transition-all hover:shadow-lg">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📚</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">القصص</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">قصص تفاعلية</div>
                </Link>

                <Link href="/vocabulary" onClick={() => play('click')} className="group bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 border-gray-100 dark:border-gray-700 hover:border-[#58CC02]/30 transition-all hover:shadow-lg">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📖</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">المفردات</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">قائمة الكلمات</div>
                </Link>

                <Link href="/srs" onClick={() => play('click')} className="group bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 border-gray-100 dark:border-gray-700 hover:border-[#1CB0F6]/30 transition-all hover:shadow-lg relative">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🧠</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">المراجعة الذكية</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {dueCount > 0 ? `${dueCount} كلمات` : '✓ محفوظة'}
                  </div>
                  {dueCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF4B4B] text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                      {dueCount}
                    </div>
                  )}
                </Link>

                <Link href="/leaderboard" onClick={() => play('click')} className="group bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 border-gray-100 dark:border-gray-700 hover:border-[#FF9600]/30 transition-all hover:shadow-lg">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏆</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">التصنيف</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">لوحة الصدارة</div>
                </Link>
              </div>
            </motion.div>

            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mb-8"
            >
              <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4">
                🔜 قريباً إن شاء الله
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {LEVELS.filter((l) => !l.isPublished).map((level) => (
                  <div
                    key={level.id}
                    className="bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-4 border-2 border-gray-200 dark:border-gray-700 opacity-60"
                  >
                    <div className="text-2xl mb-2">🔒</div>
                    <div className="text-sm font-bold text-gray-600 dark:text-gray-400">{level.name}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">قريباً</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
