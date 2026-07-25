'use client'
import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { getLevel, getUnitsForLevel, LEVELS } from '@/data/course'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import UnitCard from '@/components/UnitCard'
import Link from 'next/link'

export default function LevelDetailPage({ params }) {
  const { id } = use(params)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { cst, don } = useApp()

  const level = getLevel(Number(id))
  const units = level ? getUnitsForLevel(level.id) : []

  if (!level) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[var(--text-muted)]">المستوى غير موجود</p>
      </div>
    )
  }

  const getUnitStatus = (unit, index) => {
    const steps = cst[unit.id] || []
    const completedSteps = steps.length
    const totalSteps = 4
    const isCompleted = completedSteps >= totalSteps

    if (index === 0) {
      return { completedSteps, totalSteps, isLocked: false, isCompleted, isCurrent: !isCompleted }
    }
    const prevUnit = units[index - 1]
    const prevSteps = cst[prevUnit.id] || []
    const prevDone = prevSteps.length >= 4
    if (prevDone) {
      return { completedSteps, totalSteps, isLocked: false, isCompleted, isCurrent: !isCompleted }
    }
    return { completedSteps, totalSteps, isLocked: true, isCompleted: false, isCurrent: false }
  }

  const totalCompleted = units.filter((u) => (cst[u.id] || []).length >= 4).length
  const totalUnits = units.length
  const pct = totalUnits > 0 ? Math.round((totalCompleted / totalUnits) * 100) : 0

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={`المستوى ${level.id}`} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          <Link
            href="/levels"
            className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mb-4 hover:underline"
          >
            <span>←</span> العودة للمستويات
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="solid-card mb-5"
          >
            <div className="p-5">
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center text-3xl text-white shadow-lg"
                  style={{ backgroundColor: level.color, boxShadow: `0 4px 14px ${level.color}40` }}
                >
                  {level.icon}
                </div>
                <div className="flex-1">
                  <h1 className="text-xl md:text-2xl font-extrabold text-[var(--text-primary)]">
                    المستوى {level.id}: {level.title}
                  </h1>
                  <p className="text-sm text-[var(--text-muted)] mt-1">{level.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2 mt-4">
                <span>{totalUnits} وحدات</span>
                <span>{totalCompleted}/{totalUnits} مكتملة</span>
              </div>

              <div className="progress-track h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="progress-fill h-full"
                  style={{ backgroundColor: level.color }}
                />
              </div>
            </div>
          </motion.div>

          <div className="section-gap">
            <h2 className="text-base font-bold text-[var(--text-primary)] mb-3">الوحدات</h2>
          </div>

          <div className="space-y-3">
            {units.map((unit, i) => {
              const status = getUnitStatus(unit, i)
              return (
                <UnitCard
                  key={unit.id}
                  unit={unit}
                  index={i}
                  completedSteps={status.completedSteps}
                  totalSteps={status.totalSteps}
                  isLocked={status.isLocked}
                  isCompleted={status.isCompleted}
                  isCurrent={status.isCurrent}
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
