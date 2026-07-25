'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { LEVELS } from '@/data/course'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import LevelCard from '@/components/LevelCard'

export default function LevelsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { cst, don } = useApp()

  const getLevelProgress = (level) => {
    let completedCount = 0
    let totalCount = 0
    for (const category of level.categories) {
      for (const lesson of category.lessons) {
        totalCount++
        if (don.includes(lesson.id)) {
          completedCount++
        }
      }
    }
    return { completedCount, totalCount }
  }

  const getLevelStatus = (level, index) => {
    if (!level.isPublished) {
      return { isLocked: true, isCompleted: false, isCurrent: false }
    }
    if (index === 0) return { isLocked: false, isCompleted: false, isCurrent: true }
    
    const prevLevel = LEVELS[index - 1]
    if (!prevLevel.isPublished) {
      return { isLocked: false, isCompleted: false, isCurrent: true }
    }
    
    const { completedCount, totalCount } = getLevelProgress(prevLevel)
    if (completedCount >= totalCount && totalCount > 0) {
      const { completedCount: currentCompleted, totalCount: currentTotal } = getLevelProgress(level)
      return {
        isLocked: false,
        isCompleted: currentCompleted >= currentTotal && currentTotal > 0,
        isCurrent: currentCompleted < currentTotal,
      }
    }
    return { isLocked: true, isCompleted: false, isCurrent: false }
  }

  const publishedLevels = LEVELS.filter((l) => l.isPublished)
  const comingSoonLevels = LEVELS.filter((l) => !l.isPublished)

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="المستويات" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-gap"
          >
            <h2 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)]">اختر مستواك</h2>
            <p className="text-sm text-[var(--text-muted)] mt-0.5">4 مستويات لتعلم الإنجليزية من الصفر إلى الاحتراف</p>
          </motion.div>

          {/* Published Levels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 section-gap">
            {publishedLevels.map((level, i) => {
              const { completedCount, totalCount } = getLevelProgress(level)
              const { isLocked, isCompleted, isCurrent } = getLevelStatus(level, i)
              return (
                <LevelCard
                  key={level.id}
                  level={level}
                  index={i}
                  completedCount={completedCount}
                  totalCount={totalCount}
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
            className="section-gap"
          >
            <h2 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)]">المستويات القادمة</h2>
            <p className="text-sm text-[var(--text-muted)] mt-0.5">قريباً إن شاء الله</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {comingSoonLevels.map((level) => (
              <div
                key={level.id}
                className="glass-card p-4 opacity-50 cursor-not-allowed"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-lg">
                    🔒
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">{level.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">قريباً</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
