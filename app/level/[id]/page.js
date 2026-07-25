'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { getLevelById, getCategoriesForLevel } from '@/data/curriculum'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

export default function LevelDetailPage() {
  const params = useParams()
  const levelId = parseInt(params.id)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { don } = useApp()

  const level = getLevelById(levelId)
  const categories = getCategoriesForLevel(levelId)

  if (!level) {
    return (
      <div className="flex min-h-screen">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
          <TopNav title="المستوى" onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 page-container pb-32 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">❌</div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">المستوى غير موجود</h2>
              <Link href="/levels" className="btn btn-primary mt-4">
                العودة للمستويات
              </Link>
            </div>
          </main>
        </div>
        <BottomNav />
      </div>
    )
  }

  const getCategoryProgress = (category) => {
    let completed = 0
    let total = category.lessons.length
    for (const lesson of category.lessons) {
      if (don.includes(lesson.id)) {
        completed++
      }
    }
    return { completed, total }
  }

  const getLevelProgress = () => {
    let completed = 0
    let total = 0
    for (const category of categories) {
      for (const lesson of category.lessons) {
        total++
        if (don.includes(lesson.id)) {
          completed++
        }
      }
    }
    return { completed, total }
  }

  const { completed: levelCompleted, total: levelTotal } = getLevelProgress()
  const levelProgressPct = levelTotal > 0 ? Math.round((levelCompleted / levelTotal) * 100) : 0

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={level.name} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          {/* Level Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card-strong p-5 md:p-6 mb-5"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center text-2xl text-white shadow-lg flex-shrink-0"
                style={{ backgroundColor: level.color }}
              >
                {level.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)]">{level.name}</h1>
                <p className="text-sm text-[var(--text-muted)] mt-0.5">{level.description}</p>
                {level.cefr && (
                  <span className="inline-block mt-2 px-2 py-0.5 text-xs font-bold bg-primary/10 text-primary rounded-full">
                    {level.cefr}
                  </span>
                )}
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[var(--text-muted)]">التقدم:</span>
                    <span className="text-xs font-bold text-primary">{levelProgressPct}%</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[var(--text-muted)]">الدروس:</span>
                    <span className="text-xs font-bold text-success">{levelCompleted}/{levelTotal}</span>
                  </div>
                </div>
                <div className="progress-track mt-3 h-2">
                  <div className="progress-fill h-full" style={{ width: `${levelProgressPct}%` }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-4"
          >
            <h2 className="text-lg font-extrabold text-[var(--text-primary)]">الأقسام</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((category, i) => {
              const { completed, total } = getCategoryProgress(category)
              const progressPct = total > 0 ? Math.round((completed / total) * 100) : 0
              const hasLessons = total > 0

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={`/course/${category.id}`}
                    className={`group block glass-card p-4 hover:shadow-lg transition-all duration-200 ${
                      !hasLessons && !category.isPublished ? 'opacity-60' : ''
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                        {category.icon}
                      </div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">{category.name}</h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{category.nameEn}</p>
                      {hasLessons ? (
                        <div className="mt-2">
                          <span className="text-xs text-success font-bold">{completed}/{total}</span>
                          {total > 0 && (
                            <div className="progress-track h-1.5 mt-1">
                              <div className="progress-fill h-full" style={{ width: `${progressPct}%` }} />
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs text-[var(--text-muted)] mt-2 block">قريباً</span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
