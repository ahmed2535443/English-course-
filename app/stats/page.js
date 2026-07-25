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
    { icon: '⭐', value: xp, label: 'النقاط' },
    { icon: '📝', value: tot, label: 'تمرين' },
    { icon: '📖', value: wrd, label: 'كلمة' },
    { icon: '🎯', value: `${accuracy}%`, label: 'النجاح' },
    { icon: '🔥', value: bst, label: 'أفضل سلسلة' },
    { icon: '📚', value: `${don.length}/8`, label: 'دروس' },
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

        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-5xl w-full mx-auto pb-24 lg:pb-6">
          <h2 className="text-xl font-extrabold mb-6">📊 الإحصائيات</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 text-center hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="text-xs text-neutral-500 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="w-full py-3.5 rounded-xl bg-error text-white font-bold text-[15px] hover:shadow-lg transition-all"
          >
            🗑️ إعادة تعيين
          </motion.button>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
