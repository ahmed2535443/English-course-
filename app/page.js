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

        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-5xl w-full mx-auto pb-24 lg:pb-6">
          <StreakBanner />

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5"
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-slate-100">الدروس</h2>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">اختر حلقة وابدأ التعلم</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lessons.map((lesson, i) => (
              <LessonCard key={lesson.id} lesson={lesson} index={i} />
            ))}
          </div>

          {/* SRS Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-slate-100 mb-5">🧠 مراجعة ذكية</h2>
            <Link
              href="/srs"
              className="group block card overflow-hidden"
            >
              <div className="p-5 md:p-6 flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg shadow-purple-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  🧠
                </div>
                <div className="flex-1">
                  <div className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    مراجعة الكلمات
                  </div>
                  <div className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">
                    {dueCount > 0 ? `${dueCount} كلمات تحتاج مراجعة` : 'كل الكلمات محفوظة!'}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 flex items-center justify-center text-purple-500 transition-all duration-300 group-hover:-translate-x-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
