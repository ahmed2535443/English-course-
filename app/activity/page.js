'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import ActivityCalendar from '@/components/ActivityCalendar'

export default function ActivityPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { don, xp, str, bst, activity } = useApp()

  const totalExercises = don.length
  const totalXP = xp
  const currentStreak = str
  const bestStreak = bst

  const weeklyStats = Object.entries(activity || {}).reduce((acc, [date, data]) => {
    const d = new Date(date)
    const now = new Date()
    const diffDays = Math.floor((now - d) / (1000 * 60 * 60 * 24))
    
    if (diffDays < 7) {
      acc.thisWeek += data.exercises || 0
    } else if (diffDays < 14) {
      acc.lastWeek += data.exercises || 0
    }
    return acc
  }, { thisWeek: 0, lastWeek: 0 })

  const weeklyChange = weeklyStats.lastWeek > 0
    ? Math.round(((weeklyStats.thisWeek - weeklyStats.lastWeek) / weeklyStats.lastWeek) * 100)
    : weeklyStats.thisWeek > 0 ? 100 : 0

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="نشاطي" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 gap-3 mb-5"
          >
            <div className="solid-card p-4 text-center">
              <div className="text-2xl mb-1">🔥</div>
              <div className="text-2xl font-extrabold text-primary">{currentStreak}</div>
              <div className="text-xs text-[var(--text-muted)]">نشاط حالي</div>
            </div>
            <div className="solid-card p-4 text-center">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-2xl font-extrabold text-secondary">{bestStreak}</div>
              <div className="text-xs text-[var(--text-muted)]">أفضل نشاط</div>
            </div>
            <div className="solid-card p-4 text-center">
              <div className="text-2xl mb-1">⭐</div>
              <div className="text-2xl font-extrabold text-warning">{totalXP}</div>
              <div className="text-xs text-[var(--text-muted)]">إجمالي XP</div>
            </div>
            <div className="solid-card p-4 text-center">
              <div className="text-2xl mb-1">📝</div>
              <div className="text-2xl font-extrabold text-success">{totalExercises}</div>
              <div className="text-xs text-[var(--text-muted)]">تمارين مكتملة</div>
            </div>
          </motion.div>

          {/* Weekly Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="solid-card p-4 mb-5"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[var(--text-primary)]">📊 مقارنة أسبوعية</h3>
              <span className={`text-xs font-bold ${
                weeklyChange > 0 ? 'text-success' : weeklyChange < 0 ? 'text-error' : 'text-[var(--text-muted)]'
              }`}>
                {weeklyChange > 0 ? '+' : ''}{weeklyChange}%
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-[var(--text-muted)] mb-1">هذا الأسبوع</div>
                <div className="text-lg font-bold text-primary">{weeklyStats.thisWeek}</div>
              </div>
              <div>
                <div className="text-xs text-[var(--text-muted)] mb-1">الأسبوع الماضي</div>
                <div className="text-lg font-bold text-[var(--text-muted)]">{weeklyStats.lastWeek}</div>
              </div>
            </div>
          </motion.div>

          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ActivityCalendar activity={activity} streak={currentStreak} />
          </motion.div>

          {/* Tips */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="solid-card p-4 mt-5"
          >
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">💡 نصائح للحفاظ على النشاط</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-sm">🎯</span>
                <p className="text-xs text-[var(--text-muted)]">حاول أكمل 5 تمارين يومياً على الأقل</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sm">⏰</span>
                <p className="text-xs text-[var(--text-muted)]">حدد وقت ثابت للتعلم كل يوم</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sm">🧠</span>
                <p className="text-xs text-[var(--text-muted)]">راجع الكلمات القديمة بانتظام</p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
