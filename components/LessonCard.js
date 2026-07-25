'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'

const GRADIENTS = [
  'from-blue-500 to-cyan-400',
  'from-violet-500 to-purple-400',
  'from-emerald-500 to-teal-400',
  'from-amber-500 to-orange-400',
  'from-rose-500 to-pink-400',
  'from-indigo-500 to-blue-400',
  'from-fuchsia-500 to-purple-400',
  'from-teal-500 to-emerald-400',
]

const SHADOWS = [
  'shadow-blue-500/25',
  'shadow-violet-500/25',
  'shadow-emerald-500/25',
  'shadow-amber-500/25',
  'shadow-rose-500/25',
  'shadow-indigo-500/25',
  'shadow-fuchsia-500/25',
  'shadow-teal-500/25',
]

export default function LessonCard({ lesson, index }) {
  const { don } = useApp()
  const isDone = don.includes(lesson.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
    >
      <Link href={`/lesson/${lesson.id}`} className="group block solid-card">
        <div className="p-4 flex items-center gap-4">
          {/* Icon */}
          <div className={`relative w-12 h-12 rounded-[var(--radius-sm)] bg-gradient-to-br ${GRADIENTS[index % 8]} flex items-center justify-center text-xl text-white flex-shrink-0 shadow-lg ${SHADOWS[index % 8]} transition-transform duration-300 group-hover:scale-105`}>
            {lesson.i}
            {isDone && (
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-success rounded-full flex items-center justify-center text-[9px] text-white shadow-sm">
                ✓
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold text-[var(--text-primary)] truncate group-hover:text-primary transition-colors duration-200">
              {lesson.t}
            </div>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-[11px] text-[var(--text-muted)] flex items-center gap-1">
                💬 {lesson.dlg.length}
              </span>
              <span className="text-[11px] text-[var(--text-muted)] flex items-center gap-1">
                📖 {lesson.voc.length}
              </span>
              <span className="text-[11px] text-[var(--text-muted)] flex items-center gap-1">
                📝 {lesson.ex.length}
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--bg-surface-hover)] flex items-center justify-center text-[var(--text-faint)] group-hover:bg-primary/10 group-hover:text-primary transition-all duration-200">
            {isDone ? '✅' : '←'}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
