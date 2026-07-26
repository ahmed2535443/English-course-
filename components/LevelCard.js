'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const LEVEL_COLORS = [
  { bg: '#58CC02', shadow: '#46A302' },
  { bg: '#1CB0F6', shadow: '#1899D6' },
  { bg: '#FF9600', shadow: '#E08600' },
  { bg: '#FF4B4B', shadow: '#E03E3E' },
]

export default function LevelCard({ level, index, completedCount, totalCount, isLocked, isCompleted, isCurrent }) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
  const color = LEVEL_COLORS[(level.id - 1) % LEVEL_COLORS.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <Link
        href={isLocked ? '#' : `/level/${level.id}`}
        className={`group block bg-white dark:bg-[#1a2a32] border-2 rounded-2xl overflow-hidden transition-all duration-200 ${
          isLocked
            ? 'border-gray-200 dark:border-[#233640] opacity-50 pointer-events-none'
            : isCurrent
            ? 'border-[#58CC02] shadow-lg shadow-[#58CC02]/20'
            : isCompleted
            ? 'border-[#58CC02]/30'
            : 'border-gray-100 dark:border-[#233640] hover:border-gray-200 dark:hover:border-[#2a3a42]'
        }`}
      >
        {/* Header */}
        <div className="p-5">
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg transition-all duration-300 group-hover:scale-105 ${
                isCurrent ? 'animate-bounce' : ''
              }`}
              style={{ 
                backgroundColor: color.bg,
                boxShadow: `0 4px 0 ${color.shadow}`
              }}
            >
              {isCompleted ? '✓' : level.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="text-base font-extrabold text-gray-900 dark:text-white group-hover:text-[#58CC02] transition-colors">
                {level.name}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                {level.description}
              </div>
              {level.cefr && (
                <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[10px] font-extrabold text-white rounded-full" style={{ backgroundColor: color.bg }}>
                  {level.cefr}
                </span>
              )}
            </div>

            {/* Status */}
            {isCompleted && (
              <div className="w-10 h-10 rounded-full bg-[#58CC02] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg shadow-[#58CC02]/30">
                ✓
              </div>
            )}
            {isLocked && (
              <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#233640] flex items-center justify-center text-gray-400 dark:text-gray-500 text-lg flex-shrink-0">
                🔒
              </div>
            )}
          </div>

          {/* Progress */}
          {totalCount > 0 && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs font-bold text-gray-500 dark:text-gray-400 mb-2">
                <span>{totalCount} درس</span>
                <span>{completedCount}/{totalCount} مكتملة</span>
              </div>
              <div className="h-4 bg-gray-100 dark:bg-[#233640] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: isCompleted ? '#58CC02' : color.bg,
                  }}
                />
              </div>
            </div>
          )}

          {totalCount === 0 && !isLocked && (
            <div className="mt-4 text-xs text-gray-400 dark:text-gray-500 font-bold">قريباً إن شاء الله</div>
          )}

          {/* Current Indicator */}
          {isCurrent && (
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#58CC02] animate-pulse" />
              <span className="text-xs font-extrabold text-[#58CC02]">ابدأ هنا</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
