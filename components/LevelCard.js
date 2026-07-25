'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const LEVEL_GRADIENTS = [
  'linear-gradient(135deg, #7c3aed, #06b6d4)',
  'linear-gradient(135deg, #ec4899, #f59e0b)',
  'linear-gradient(135deg, #10b981, #06b6d4)',
  'linear-gradient(135deg, #f59e0b, #ef4444)',
]

export default function LevelCard({ level, index, completedCount, totalCount, isLocked, isCompleted, isCurrent }) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0
  const gradient = LEVEL_GRADIENTS[(level.id - 1) % LEVEL_GRADIENTS.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        href={isLocked ? '#' : `/level/${level.id}`}
        className={`group block solid-card overflow-hidden ${isLocked ? 'opacity-50 pointer-events-none' : ''}`}
      >
        {/* Gradient Header */}
        <div 
          className="h-2 w-full"
          style={{ background: gradient }}
        />
        
        <div className="p-5">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center text-2xl text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{ 
                background: gradient,
                boxShadow: `0 8px 24px rgba(124, 58, 237, 0.25)`
              }}
            >
              {level.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-base font-bold text-[var(--text-primary)] group-hover:text-primary transition-colors">
                {level.name}
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">{level.description}</div>
              {level.cefr && (
                <span 
                  className="inline-block mt-1.5 px-2.5 py-0.5 text-[10px] font-bold text-white rounded-full"
                  style={{ background: gradient }}
                >
                  {level.cefr}
                </span>
              )}
            </div>
            {isCompleted && (
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-success to-emerald-400 flex items-center justify-center text-white text-sm flex-shrink-0 shadow-lg shadow-success/30">
                ✓
              </div>
            )}
            {isLocked && (
              <div className="w-10 h-10 rounded-full bg-[var(--bg-surface-hover)] flex items-center justify-center text-[var(--text-faint)] text-lg flex-shrink-0">
                🔒
              </div>
            )}
          </div>

          {totalCount > 0 && (
            <>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2.5">
                <span>{totalCount} درس</span>
                <span className="font-semibold">{completedCount}/{totalCount} مكتملة</span>
              </div>

              <div className="progress-track h-2">
                <div
                  className="progress-fill h-full transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    background: isCompleted ? 'linear-gradient(90deg, #10b981, #34d399)' : gradient,
                  }}
                />
              </div>
            </>
          )}

          {totalCount === 0 && !isLocked && (
            <div className="text-xs text-[var(--text-muted)]">قريباً إن شاء الله</div>
          )}

          {isCurrent && (
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-primary">ابدأ هنا</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
