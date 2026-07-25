'use client'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'

export default function StreakBanner() {
  const { dly } = useApp()
  const progress = Math.min((dly / 5) * 100, 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-[var(--radius-xl)] mb-6"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-500" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTRWMjhIMjR2Mmgxem0tMSA4aDEydjJIMjV2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      {/* Content */}
      <div className="relative p-5 md:p-6 flex items-center gap-4">
        <div className="w-14 h-14 rounded-[var(--radius-md)] bg-white/15 backdrop-blur-sm flex items-center justify-center text-3xl">
          🎯
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-bold text-white/90">الهدف اليومي</span>
            <span className="text-sm font-extrabold text-white">{dly} / 5</span>
          </div>
          <div className="text-xs text-white/60 mb-2.5">أكمل 5 تمارين للحفاظ على السلسلة</div>
          <div className="w-full h-2 bg-white/15 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
