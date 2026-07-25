'use client'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'

export default function StreakBanner() {
  const { dly } = useApp()
  const progress = Math.min((dly / 5) * 100, 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 p-5 md:p-6 text-white rounded-2xl mb-6 shadow-xl shadow-indigo-500/20"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12" />
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative flex items-center gap-4">
        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl animate-bounce backdrop-blur-sm">
          🎯
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <div className="text-sm font-bold opacity-95">الهدف اليومي</div>
            <div className="text-lg font-extrabold">{dly} / 5</div>
          </div>
          <div className="text-xs opacity-75 mb-2.5">أكمل 5 تمارين للحفاظ على السلسلة!</div>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-white rounded-full shadow-sm"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
