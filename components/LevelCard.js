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
                المستوى {level.id}: {level.title}
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">{level.description}</div>
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

          <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2">
            <span>{totalCount} وحدات</span>
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

          {isCurrent && (
            <div className="mt-3 text-xs font-bold text-primary">← ابدأ هنا</div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
