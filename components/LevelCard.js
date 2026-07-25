'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LevelCard({ level, index, completedCount, totalCount, isLocked, isCompleted, isCurrent }) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
    >
      <Link
        href={isLocked ? '#' : `/level/${level.id}`}
        className={`group block solid-card ${isLocked ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <div className="p-5">
          <div className="flex items-center gap-4 mb-3">
            <div
              className="w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: level.color, boxShadow: `0 4px 14px ${level.color}40` }}
            >
              {level.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-base font-bold text-[var(--text-primary)] group-hover:text-primary transition-colors">
                {level.name}
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">{level.description}</div>
              {level.cefr && (
                <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-bold bg-primary/10 text-primary rounded-full">
                  {level.cefr}
                </span>
              )}
            </div>
            {isCompleted && (
              <div className="w-8 h-8 rounded-full bg-success/15 flex items-center justify-center text-success text-sm flex-shrink-0">
                ✓
              </div>
            )}
            {isLocked && (
              <div className="w-8 h-8 rounded-full bg-[var(--bg-surface-hover)] flex items-center justify-center text-[var(--text-faint)] text-sm flex-shrink-0">
                🔒
              </div>
            )}
          </div>

          {totalCount > 0 && (
            <>
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2">
                <span>{totalCount} درس</span>
                <span>{completedCount}/{totalCount} مكتملة</span>
              </div>

              <div className="progress-track h-1.5">
                <div
                  className="progress-fill h-full transition-all duration-500"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: isCompleted ? 'var(--color-success, #22c55e)' : level.color,
                  }}
                />
              </div>
            </>
          )}

          {totalCount === 0 && !isLocked && (
            <div className="text-xs text-[var(--text-muted)]">قريباً إن شاء الله</div>
          )}

          {isCurrent && (
            <div className="mt-3 text-xs font-bold text-primary">← ابدأ هنا</div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
