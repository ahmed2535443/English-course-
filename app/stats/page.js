'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'

const STATS = (xp, tot, wrd, accuracy, bst, don) => [
  { icon: '⭐', value: xp, label: 'النقاط', accent: 'text-amber-600' },
  { icon: '📝', value: tot, label: 'تمرين', accent: 'text-primary' },
  { icon: '📖', value: wrd, label: 'كلمة', accent: 'text-success' },
  { icon: '🎯', value: `${accuracy}%`, label: 'النجاح', accent: 'text-secondary' },
  { icon: '🔥', value: bst, label: 'أفضل سلسلة', accent: 'text-error' },
  { icon: '📚', value: `${don.length}/13`, label: 'دروس', accent: 'text-primary' },
]

export default function StatsPage() {
  const { xp, tot, wrd, cor, bst, don, resetAll } = useApp()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const accuracy = tot > 0 ? Math.round((cor / tot) * 100) : 0

  const handleReset = () => {
    if (confirm('هل أنت متأكد من إعادة تعيين كل التقدم؟')) {
      resetAll()
      window.location.reload()
    }
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="إحصائيات" onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 page-container">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="section-gap">
            <h2 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)]">📊 الإحصائيات</h2>
            <p className="text-sm text-[var(--text-muted)] mt-0.5">تتبع تقدمك في الكورس</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 mb-8">
            {STATS(xp, tot, wrd, accuracy, bst, don).map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="solid-card p-5 text-center"
              >
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className={`text-2xl font-extrabold ${s.accent}`}>{s.value}</div>
                <div className="text-xs text-[var(--text-muted)] mt-1 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <button onClick={handleReset} className="btn btn-danger w-full py-3.5 text-[15px]">
            🗑️ إعادة تعيين كل التقدم
          </button>
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
