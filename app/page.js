'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { COURSE, LEVELS, getUnitsForLevel } from '@/data/course'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import StreakBanner from '@/components/StreakBanner'
import LevelCard from '@/components/LevelCard'
import Link from 'next/link'

export default function HomePage() {
  const { don, cst, srs, buildSRS, lastUnit, lastStep } = useApp()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    buildSRS()
  }, [buildSRS])

  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0

  const completedLessons = don.length
  const totalLessons = COURSE.totalLessons
  const progressPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  const getLevelProgress = (level) => {
    const units = getUnitsForLevel(level.id)
    const completed = units.filter((u) => {
      const steps = cst[u.id] || []
      return steps.length >= 4
    }).length
    return { completed, total: units.length }
  }

  const getNextUnit = () => {
    for (const level of LEVELS) {
      const units = getUnitsForLevel(level.id)
      for (const unit of units) {
        const steps = cst[unit.id] || []
        if (steps.length < 4) return unit
      }
    }
    return null
  }

  const nextUnit = getNextUnit()

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
                ✈️
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

            {nextUnit && (
              <Link
                href={`/unit/${nextUnit.id}`}
                className="btn btn-primary w-full mt-4 py-3"
              >
                ▶️ استكمال التعلم - {nextUnit.title}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
            {LEVELS.map((level, i) => {
              const { completed, total } = getLevelProgress(level)
              const isCompleted = completed === total
              const isCurrent = !isCompleted && (i === 0 || getLevelProgress(LEVELS[i - 1]).completed > 0)
              const isLocked = !isCompleted && !isCurrent && i > 0 && getLevelProgress(LEVELS[i - 1]).completed === 0
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

          {/* SRS Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-extrabold text-[var(--text-primary)] mb-3">🧠 مراجعة ذكية</h2>
            <Link href="/srs" className="group block solid-card">
              <div className="p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-xl text-white shadow-lg shadow-secondary/20 transition-transform duration-300 group-hover:scale-105">
                  🧠
                </div>
                <div className="flex-1">
                  <div className="text-[15px] font-bold text-[var(--text-primary)] group-hover:text-secondary transition-colors">
                    مراجعة الكلمات
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mt-0.5">
                    {dueCount > 0 ? `${dueCount} كلمات تحتاج مراجعة` : 'كل الكلمات محفوظة!'}
                  </div>
                </div>
                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-secondary/10 flex items-center justify-center text-secondary transition-transform duration-200 group-hover:-translate-x-1">
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
