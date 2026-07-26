'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { useSounds } from '@/hooks/useSounds'
import { COURSE, LEVELS, getUnitsForLevel, getPublishedLevels } from '@/data/course'
import { getCourseForLesson } from '@/data/curriculum'
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

export default function HomePage() {
  const { don, cst, srs, buildSRS, lastLesson, lastCourse, lastLevel, lessonProgress } = useApp()
  const { play } = useSounds()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showMascot, setShowMascot] = useState(true)

  useEffect(() => {
    buildSRS()
  }, [buildSRS])

  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0
  const completedLessons = don.length
  const publishedLevels = getPublishedLevels()

  const getLevelProgress = (level) => {
    let completed = 0
    let total = 0
    for (const category of level.categories) {
      for (const lesson of category.lessons) {
        total++
        if (don.includes(lesson.id)) {
          completed++
        }
      }
    }
    return { completed, total }
  }

  const getNextLesson = () => {
    for (const level of publishedLevels) {
      for (const category of level.categories) {
        for (const lesson of category.lessons) {
          if (!don.includes(lesson.id)) {
            return { lesson, category, level }
          }
        }
      }
    }
    return null
  }

  const next = getNextLesson()

  const getRandomMascot = () => MASCOTS[Math.floor(Math.random() * MASCOTS.length)]
  const getRandomMotivation = () => MOTIVATIONAL[Math.floor(Math.random() * MOTIVATIONAL.length)]

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="الرئيسية" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 pb-32" style={{ background: 'var(--bg)' }}>
          <StreakBanner />

          {/* Duolingo-style Hero Section */}
          <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #58CC02 0%, #46A302 100%)' }}>
            <div className="max-w-2xl mx-auto px-5 py-8 text-center relative z-10">
              {/* Mascot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="text-7xl mb-4"
              >
                {getRandomMascot()}
              </motion.div>

              {/* Welcome Text */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-extrabold text-white mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                مرحباً! 👋
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/90 font-medium"
              >
                {getRandomMotivation()}
              </motion.p>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center gap-6 mt-6"
              >
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-xl">🔥</span>
                  <span className="text-white font-bold">{cst?.streak || 0}</span>
                  <span className="text-white/80 text-sm">يوم</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-xl">⭐</span>
                  <span className="text-white font-bold">{cst?.xp || 0}</span>
                  <span className="text-white/80 text-sm">XP</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-xl">❤️</span>
                  <span className="text-white font-bold">{cst?.hearts || 5}</span>
                  <span className="text-white/80 text-sm">قلب</span>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 text-4xl opacity-20">📚</div>
            <div className="absolute bottom-4 left-4 text-4xl opacity-20">🎓</div>
            <div className="absolute top-1/2 right-10 text-3xl opacity-10">✨</div>
          </div>

          <div className="max-w-2xl mx-auto px-5">
            {/* Continue Learning Card */}
            {next && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative -mt-6 mb-6"
              >
                <Link
                  href={`/lesson/${next.lesson.id}`}
                  onClick={() => play('start')}
                  className="block bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-xl border-2 border-primary/20 hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                      ▶️
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-primary uppercase tracking-wide">كمّل التعلم</div>
                      <div className="text-lg font-extrabold text-gray-900 dark:text-white">{next.lesson.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{next.category.name}</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:translate-x-[-4px] transition-transform">
                      ←
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="mt-4 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                      style={{ width: `${next.lesson.id ? Math.max(5, (completedLessons / 15) * 100) : 0}%` }}
                    />
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Daily Quest */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold opacity-90">المهمة اليومية</div>
                    <div className="text-lg font-extrabold">ادرس 3 دروس اليوم</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold">{Math.min(completedLessons, 3)}/3</div>
                    <div className="text-xs opacity-80">درس</div>
                  </div>
                </div>
                <div className="mt-3 h-2 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (completedLessons / 3) * 100)}%` }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Learning Path - Duolingo Style */}
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
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 -translate-x-1/2 rounded-full" />

                {/* Lessons */}
                <div className="space-y-6">
                  {publishedLevels.map((level, levelIndex) => {
                    const { completed, total } = getLevelProgress(level)
                    const isCompleted = completed === total && total > 0
                    const isCurrent = !isCompleted && (levelIndex === 0 || getLevelProgress(publishedLevels[levelIndex - 1]).completed > 0)

                    return level.categories.map((category, catIndex) => {
                      const categoryLesson = category.lessons[0]
                      if (!categoryLesson) return null

                      const isLessonDone = don.includes(categoryLesson.id)
                      const isLessonCurrent = isCurrent && catIndex === 0
                      const lessonIndex = levelIndex * 3 + catIndex

                      const colors = [
                        'from-blue-400 to-blue-600',
                        'from-green-400 to-green-600',
                        'from-purple-400 to-purple-600',
                        'from-pink-400 to-pink-600',
                        'from-amber-400 to-amber-600',
                        'from-red-400 to-red-600',
                        'from-teal-400 to-teal-600',
                        'from-indigo-400 to-indigo-600',
                      ]
                      const colorClass = colors[lessonIndex % colors.length]

                      return (
                        <motion.div
                          key={categoryLesson.id}
                          initial={{ opacity: 0, x: lessonIndex % 2 === 0 ? -50 : 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + lessonIndex * 0.05 }}
                          className={`relative flex ${lessonIndex % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                          {/* Connector Dot */}
                          <div className={`absolute left-1/2 top-6 w-4 h-4 rounded-full -translate-x-1/2 z-10 ${
                            isLessonDone ? 'bg-success' : isLessonCurrent ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                          }`} />

                          {/* Lesson Card */}
                          <Link
                            href={`/lesson/${categoryLesson.id}`}
                            className={`w-[calc(50%-2rem)] ${
                              lessonIndex % 2 === 0 ? 'pr-4' : 'pl-4'
                            }`}
                          >
                            <div className={`relative rounded-2xl p-4 transition-all ${
                              isLessonDone
                                ? 'bg-success/10 border-2 border-success/30'
                                : isLessonCurrent
                                ? 'bg-white dark:bg-gray-800 border-2 border-primary shadow-lg shadow-primary/20 scale-105'
                                : 'bg-gray-50 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 opacity-60'
                            }`}>
                              {/* Icon */}
                              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center text-2xl text-white shadow-lg mb-3 ${
                                isLessonCurrent ? 'animate-bounce' : ''
                              }`}>
                                {isLessonDone ? '✓' : category.icon}
                              </div>

                              {/* Title */}
                              <div className="text-sm font-bold text-gray-900 dark:text-white">
                                {categoryLesson.title}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                {category.name}
                              </div>

                              {/* XP Badge */}
                              {isLessonDone && (
                                <div className="absolute top-2 right-2 bg-success text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                  +10 XP
                                </div>
                              )}

                              {/* Current Badge */}
                              {isLessonCurrent && (
                                <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                                  الحالي
                                </div>
                              )}
                            </div>
                          </Link>
                        </motion.div>
                      )
                    })
                  })}
                </div>
              </div>
            </motion.div>

            {/* Quick Actions - Duolingo Style */}
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
                <Link href="/stories" onClick={() => play('click')} className="group bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-all hover:shadow-lg">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📚</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">القصص</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">قصص تفاعلية</div>
                </Link>

                <Link href="/vocabulary" onClick={() => play('click')} className="group bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 border-gray-100 dark:border-gray-700 hover:border-primary/30 transition-all hover:shadow-lg">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📖</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">المفردات</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">قائمة الكلمات</div>
                </Link>

                <Link href="/srs" onClick={() => play('click')} className="group bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 border-gray-100 dark:border-gray-700 hover:border-secondary/30 transition-all hover:shadow-lg relative">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🧠</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">المراجعة الذكية</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {dueCount > 0 ? `${dueCount} كلمات` : '✓ محفوظة'}
                  </div>
                  {dueCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                      {dueCount}
                    </div>
                  )}
                </Link>

                <Link href="/leaderboard" onClick={() => play('click')} className="group bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 border-gray-100 dark:border-gray-700 hover:border-amber-300 transition-all hover:shadow-lg">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏆</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">التصنيف</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">لوحة الصدارة</div>
                </Link>
              </div>
            </motion.div>

            {/* Coming Soon - Duolingo Style */}
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
                {LEVELS.filter((l) => !l.isPublished).map((level, i) => (
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
