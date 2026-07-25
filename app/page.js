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

        <main className="flex-1 p-4 md:p-6 max-w-[800px] w-full mx-auto pb-24 lg:pb-6">
          <StreakBanner />

          <h2 className="text-xl font-extrabold mb-4">الدروس</h2>
          <div className="space-y-2.5">
            {lessons.map((lesson, i) => (
              <LessonCard key={lesson.id} lesson={lesson} index={i} />
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-extrabold mb-4">🧠 مراجعة ذكية</h2>
            <Link
              href="/srs"
              className="block bg-white dark:bg-neutral-900 border border-secondary/30 rounded-xl p-5 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-secondary-light rounded-[10px] flex items-center justify-center text-lg text-white">
                  🧠
                </div>
                <div>
                  <div className="text-base font-bold">مراجعة الكلمات</div>
                  <div className="text-xs text-neutral-500 mt-0.5">{dueCount} كلمات تحتاج مراجعة</div>
                </div>
              </div>
            </Link>
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
