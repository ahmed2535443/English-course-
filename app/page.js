'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import StreakBanner from '@/components/StreakBanner'
import LessonCard from '@/components/LessonCard'
import Link from 'next/link'

export default function HomePage() {
  const { lessons, srs, buildSRS } = useApp()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    buildSRS()
  }, [buildSRS])

  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="الدروس" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container">
          <StreakBanner />

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-gap"
          >
            <h2 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)]">الدروس</h2>
            <p className="text-sm text-[var(--text-muted)] mt-0.5">اختر حلقة وابدأ التعلم</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 section-gap">
            {lessons.map((lesson, i) => (
              <LessonCard key={lesson.id} lesson={lesson} index={i} />
            ))}
          </div>

          {/* SRS Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)] mb-4">🧠 مراجعة ذكية</h2>
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
