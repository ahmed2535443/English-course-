'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'

const gradients = [
  'from-blue-500 to-cyan-400',
  'from-purple-500 to-pink-400',
  'from-emerald-500 to-teal-400',
  'from-orange-500 to-amber-400',
  'from-rose-500 to-red-400',
  'from-indigo-500 to-blue-400',
  'from-fuchsia-500 to-purple-400',
  'from-teal-500 to-emerald-400',
]

const shadows = [
  'shadow-blue-500/20',
  'shadow-purple-500/20',
  'shadow-emerald-500/20',
  'shadow-orange-500/20',
  'shadow-rose-500/20',
  'shadow-indigo-500/20',
  'shadow-fuchsia-500/20',
  'shadow-teal-500/20',
]

export default function LessonCard({ lesson, index }) {
  const { don } = useApp()
  const isDone = don.includes(lesson.id)
  const gradient = gradients[index % gradients.length]
  const shadow = shadows[index % shadows.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link
        href={`/lesson/${lesson.id}`}
        className="group block card overflow-hidden"
      >
        <div className="p-4 md:p-5 flex items-center gap-4">
          {/* Icon */}
          <div className={`relative w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg ${shadow} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            {lesson.i}
            {isDone && (
              <div className="absolute -top-1 -left-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-[10px] text-white shadow-sm">
                ✓
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="text-[15px] md:text-base font-bold text-slate-800 dark:text-slate-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {lesson.t}
            </div>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                <span className="w-1 h-1 rounded-full bg-blue-400" />
                💬 {lesson.dlg.length}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                <span className="w-1 h-1 rounded-full bg-emerald-400" />
                📖 {lesson.voc.length}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
                <span className="w-1 h-1 rounded-full bg-purple-400" />
                📝 {lesson.ex.length}
              </span>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-10 h-10 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:text-indigo-500 transition-all duration-300 group-hover:-translate-x-1">
            {isDone ? (
              <span className="text-lg">✅</span>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
