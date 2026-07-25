'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { COURSE, LEVELS, getUnitsForLevel, getPublishedLevels } from '@/data/course'
import { getCourseForLesson } from '@/data/curriculum'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import StreakBanner from '@/components/StreakBanner'
import LevelCard from '@/components/LevelCard'
import Link from 'next/link'

export default function HomePage() {
  const { don, cst, srs, buildSRS, lastLesson, lastCourse, lastLevel, lessonProgress } = useApp()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    buildSRS()
  }, [buildSRS])

  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0

  const completedLessons = don.length
  const totalLessons = 8
  const progressPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

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

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="الرئيسية" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          <StreakBanner />

          {/* Course Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card-strong p-5 md:p-6 mb-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-[var(--radius-md)] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl text-white shadow-lg shadow-primary/20 flex-shrink-0">
                📚
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)]">{COURSE.title}</h1>
                <p className="text-sm text-[var(--text-muted)] mt-0.5">{COURSE.subtitle}</p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[var(--text-muted)]">التقدم:</span>
                    <span className="text-xs font-bold text-primary">{progressPct}%</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[var(--text-muted)]">مكتملة:</span>
                    <span className="text-xs font-bold text-success">{completedLessons}/{totalLessons}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[var(--text-muted)]">متبقية:</span>
                    <span className="text-xs font-bold text-warning">{totalLessons - completedLessons}</span>
                  </div>
                </div>
                <div className="progress-track mt-3 h-2">
                  <div className="progress-fill h-full" style={{ width: `${progressPct}%` }} />
                </div>
              </div>
            </div>

            {next && (
              <Link
                href={`/lesson/${next.lesson.id}`}
                className="btn btn-primary w-full mt-4 py-3"
              >
                ▶️ استكمال التعلم - {next.lesson.title}
              </Link>
            )}
          </motion.div>

          {/* Levels */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-4"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-extrabold text-[var(--text-primary)]">المستويات</h2>
              <Link href="/levels" className="text-sm text-primary font-semibold hover:underline">
                عرض الكل ←
              </Link>
            </div>
          </motion.div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden mb-5">
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {publishedLevels.map((level, i) => {
                const { completed, total } = getLevelProgress(level)
                const isCompleted = completed === total && total > 0
                const isCurrent = !isCompleted && (i === 0 || getLevelProgress(publishedLevels[i - 1]).completed > 0)
                const isLocked = !isCompleted && !isCurrent && i > 0 && getLevelProgress(publishedLevels[i - 1]).completed === 0
                return (
                  <div key={level.id} className="min-w-[280px] max-w-[320px] snap-center flex-shrink-0">
                    <LevelCard
                      level={level}
                      index={i}
                      completedCount={completed}
                      totalCount={total}
                      isLocked={isLocked}
                      isCompleted={isCompleted}
                      isCurrent={isCurrent}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            {publishedLevels.map((level, i) => {
              const { completed, total } = getLevelProgress(level)
              const isCompleted = completed === total && total > 0
              const isCurrent = !isCompleted && (i === 0 || getLevelProgress(publishedLevels[i - 1]).completed > 0)
              const isLocked = !isCompleted && !isCurrent && i > 0 && getLevelProgress(publishedLevels[i - 1]).completed === 0
              return (
                <LevelCard
                  key={level.id}
                  level={level}
                  index={i}
                  completedCount={completed}
                  totalCount={total}
                  isLocked={isLocked}
                  isCompleted={isCompleted}
                  isCurrent={isCurrent}
                />
              )
            })}
          </div>

          {/* Coming Soon Levels */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-extrabold text-[var(--text-primary)]">المستويات القادمة</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-5">
            {LEVELS.filter((l) => !l.isPublished).map((level, i) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="glass-card p-4 opacity-60 cursor-not-allowed hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[var(--radius-md)] bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-lg shadow-md">
                    🔒
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">{level.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">قريباً إن شاء الله</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions Grid */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-5"
          >
            <h2 className="text-lg font-extrabold text-[var(--text-primary)] mb-3">الوصول السريع</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            <Link href="/stories" className="group solid-card p-4 hover:shadow-lg transition-all">
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📚</div>
                <div className="text-sm font-bold text-[var(--text-primary)]">القصص</div>
                <div className="text-xs text-[var(--text-muted)]">قصص تفاعلية</div>
              </div>
            </Link>
            <Link href="/vocabulary" className="group solid-card p-4 hover:shadow-lg transition-all">
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📖</div>
                <div className="text-sm font-bold text-[var(--text-primary)]">المفردات</div>
                <div className="text-xs text-[var(--text-muted)]">قائمة الكلمات</div>
              </div>
            </Link>
            <Link href="/leaderboard" className="group solid-card p-4 hover:shadow-lg transition-all">
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏆</div>
                <div className="text-sm font-bold text-[var(--text-primary)]">التصنيف</div>
                <div className="text-xs text-[var(--text-muted)]">لوحة الصدارة</div>
              </div>
            </Link>
            <Link href="/activity" className="group solid-card p-4 hover:shadow-lg transition-all">
              <div className="text-center">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📅</div>
                <div className="text-sm font-bold text-[var(--text-primary)]">النشاط</div>
                <div className="text-xs text-[var(--text-muted)]">تقويم النشاط</div>
              </div>
            </Link>
          </div>

          {/* SRS Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/srs" className="group block solid-card overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-secondary to-accent" />
              <div className="p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-[var(--radius-md)] bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-2xl text-white shadow-lg shadow-secondary/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  🧠
                </div>
                <div className="flex-1">
                  <div className="text-[15px] font-bold text-[var(--text-primary)] group-hover:text-secondary transition-colors">
                    مراجعة ذكية (SRS)
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mt-0.5">
                    {dueCount > 0 ? `${dueCount} كلمات تحتاج مراجعة` : '✓ كل الكلمات محفوظة!'}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-secondary/10 flex items-center justify-center text-secondary transition-transform duration-200 group-hover:-translate-x-1">
                  ←
                </div>
              </div>
            </Link>
          </motion.div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
