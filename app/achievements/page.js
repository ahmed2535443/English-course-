'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { ACHIEVEMENTS } from '@/lib/achievements'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'

export default function AchievementsPage() {
  const { ach } = useApp()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="إنجازات" onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 page-container pb-32">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="section-gap">
            <h2 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)]">🏆 الإنجازات</h2>
            <p className="text-sm text-[var(--text-muted)] mt-0.5">أكمل الدروس لفتح الإنجازات</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
            {ACHIEVEMENTS.map((a, i) => {
              const unlocked = ach.includes(a.id)
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`solid-card p-5 text-center transition-all duration-200 ${
                    unlocked
                      ? 'hover:-translate-y-0.5 border-amber-200/60 dark:border-amber-500/20'
                      : 'opacity-40 grayscale hover:opacity-55'
                  }`}
                >
                  <div className="text-3xl mb-2">{a.i}</div>
                  <div className="text-xs font-bold text-[var(--text-primary)]">{a.n}</div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-1">{a.d}</div>
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
