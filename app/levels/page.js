'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { LEVELS, getUnitsForLevel } from '@/data/course'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import LevelCard from '@/components/LevelCard'

export default function LevelsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { cst, don } = useApp()

  const getLevelProgress = (level) => {
    const units = getUnitsForLevel(level.id)
    let completedCount = 0
    units.forEach((unit) => {
      const steps = cst[unit.id] || []
      if (steps.length >= 4) completedCount++
    })
    return { completedCount, totalCount: units.length }
  }

  const getLevelStatus = (level, index) => {
    if (index === 0) return { isLocked: false, isCompleted: false, isCurrent: true }
    const prevLevel = LEVELS[index - 1]
    const prevUnits = getUnitsForLevel(prevLevel.id)
    const prevCompleted = prevUnits.every((unit) => {
      const steps = cst[unit.id] || []
      return steps.length >= 4
    })
    if (prevCompleted) {
      const { completedCount, totalCount } = getLevelProgress(level)
      return {
        isLocked: false,
        isCompleted: completedCount >= totalCount,
        isCurrent: completedCount < totalCount,
      }
    }
    return { isLocked: true, isCompleted: false, isCurrent: false }
  }

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
            <p className="text-sm text-[var(--text-muted)] mt-0.5">4 مستويات لتعلم المحادثة الإنجليزية</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 section-gap">
            {LEVELS.map((level, i) => {
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
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
