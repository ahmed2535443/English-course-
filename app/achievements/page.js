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

        <main className="flex-1 page-container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-slate-100">🏆 الإنجازات</h2>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">أكمل الدروس لفتح الإنجازات</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {ACHIEVEMENTS.map((a, i) => {
              const unlocked = ach.includes(a.id)
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className={`card p-5 text-center transition-all duration-300 ${
                    unlocked
                      ? 'hover:-translate-y-1 border-amber-200 dark:border-amber-500/20 bg-gradient-to-br from-amber-50/80 to-orange-50/80 dark:from-amber-500/5 dark:to-orange-500/5'
                      : 'opacity-40 grayscale hover:opacity-60'
                  }`}
                >
                  <div className="text-4xl mb-3">{a.i}</div>
                  <div className="text-xs font-bold text-slate-700 dark:text-slate-200">{a.n}</div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">{a.d}</div>
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
