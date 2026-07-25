'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'

export default function StatsPage() {
  const { xp, tot, wrd, cor, bst, don, resetAll } = useApp()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const accuracy = tot > 0 ? Math.round((cor / tot) * 100) : 0

  const stats = [
    { icon: '⭐', value: xp, label: 'النقاط', gradient: 'from-amber-400 to-orange-400', bg: 'from-amber-50 to-orange-50 dark:from-amber-500/10 dark:to-orange-500/10', border: 'border-amber-100 dark:border-amber-500/15', text: 'text-amber-600 dark:text-amber-400' },
    { icon: '📝', value: tot, label: 'تمرين', gradient: 'from-blue-400 to-cyan-400', bg: 'from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10', border: 'border-blue-100 dark:border-blue-500/15', text: 'text-blue-600 dark:text-blue-400' },
    { icon: '📖', value: wrd, label: 'كلمة', gradient: 'from-emerald-400 to-teal-400', bg: 'from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10', border: 'border-emerald-100 dark:border-emerald-500/15', text: 'text-emerald-600 dark:text-emerald-400' },
    { icon: '🎯', value: `${accuracy}%`, label: 'النجاح', gradient: 'from-purple-400 to-pink-400', bg: 'from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10', border: 'border-purple-100 dark:border-purple-500/15', text: 'text-purple-600 dark:text-purple-400' },
    { icon: '🔥', value: bst, label: 'أفضل سلسلة', gradient: 'from-rose-400 to-red-400', bg: 'from-rose-50 to-red-50 dark:from-rose-500/10 dark:to-red-500/10', border: 'border-rose-100 dark:border-rose-500/15', text: 'text-rose-600 dark:text-rose-400' },
    { icon: '📚', value: `${don.length}/8`, label: 'دروس', gradient: 'from-indigo-400 to-blue-400', bg: 'from-indigo-50 to-blue-50 dark:from-indigo-500/10 dark:to-blue-500/10', border: 'border-indigo-100 dark:border-indigo-500/15', text: 'text-indigo-600 dark:text-indigo-400' },
  ]

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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-slate-100">📊 الإحصائيات</h2>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">تتبع تقدمك في الكورس</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="card p-5 text-center hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className={`text-2xl font-extrabold ${s.text}`}>{s.value}</div>
                <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 to-rose-500 text-white font-bold text-[15px] shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all"
          >
            🗑️ إعادة تعيين كل التقدم
          </motion.button>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
