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
      className="bg-gradient-to-br from-primary to-secondary p-4 md:p-5 text-white rounded-xl mb-6 flex items-center gap-4"
    >
      <div className="text-3xl animate-bounce">🎯</div>
      <div className="flex-1">
        <div className="text-sm font-bold opacity-95">الهدف اليومي: {dly} / 5</div>
        <div className="text-xs opacity-70 mt-0.5">أكمل 5 تمارين للحفاظ على السلسلة!</div>
        <div className="w-full h-1.5 bg-white/20 rounded-full mt-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-white rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}
