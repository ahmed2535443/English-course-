'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'

export default function LessonCard({ lesson, index }) {
  const { don } = useApp()
  const isDone = don.includes(lesson.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link
        href={`/lesson/${lesson.id}`}
        className={`block bg-white dark:bg-neutral-900 border rounded-xl p-4 md:p-5 transition-all hover:shadow-lg hover:-translate-x-1 group ${
          isDone ? 'border-success' : 'border-neutral-200 dark:border-neutral-800 hover:border-primary'
        }`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110 group-hover:-rotate-3 ${
              isDone
                ? 'bg-gradient-to-br from-success to-success-light'
                : 'bg-gradient-to-br from-primary to-primary-light'
            } text-white`}
          >
            {lesson.i}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[15px] font-bold truncate">{lesson.t}</div>
            <div className="text-xs text-neutral-500 mt-1 flex gap-3">
              <span>💬 {lesson.dlg.length}</span>
              <span>📖 {lesson.voc.length}</span>
              <span>📝 {lesson.ex.length}</span>
            </div>
          </div>
          <div className="text-neutral-400 transition-all group-hover:text-primary group-hover:-translate-x-1">
            {isDone ? '✅' : '←'}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
