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

        <main className="flex-1 p-4 md:p-6 max-w-[800px] w-full mx-auto pb-24 lg:pb-6">
          <h2 className="text-xl font-extrabold mb-6">🏆 الإنجازات</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {ACHIEVEMENTS.map((a, i) => {
              const unlocked = ach.includes(a.id)
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`bg-white dark:bg-neutral-900 border rounded-xl p-5 text-center transition-all hover:-translate-y-1 ${
                    unlocked
                      ? 'border-warning bg-gradient-to-br from-warning/5 to-accent/5'
                      : 'border-neutral-200 dark:border-neutral-800 opacity-40 grayscale'
                  }`}
                >
                  <div className="text-4xl mb-2">{a.i}</div>
                  <div className="text-xs font-bold">{a.n}</div>
                  <div className="text-[10px] text-neutral-500 mt-1">{a.d}</div>
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
