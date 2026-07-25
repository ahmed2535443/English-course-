'use client'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'

export default function StreakBanner() {
  const { dly } = useApp()
  const progress = Math.min((dly / 5) * 100, 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[var(--radius-xl)] mb-6"
    >
      {/* Background - Modern Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-cyan-500 to-pink-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

      {/* Content */}
      <div className="relative p-5 md:p-6 flex items-center gap-4">
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-[var(--radius-md)] bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg"
        >
          🎯
        </motion.div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-bold text-white/90">الهدف اليومي</span>
            <span className="text-sm font-extrabold text-white bg-white/20 px-3 py-0.5 rounded-full">{dly} / 5</span>
          </div>
          <div className="text-xs text-white/70 mb-2.5">أكمل 5 تمارين للحفاظ على السلسلة</div>
          <div className="w-full h-2.5 bg-white/15 rounded-full overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="h-full bg-white rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
