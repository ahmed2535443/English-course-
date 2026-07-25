'use client'
import { useMemo } from 'react'
import { motion } from 'framer-motion'

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

function getActivityLevel(count) {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  return 3
}

const LEVEL_COLORS = [
  'bg-[var(--bg-surface-hover)]',
  'bg-primary/20',
  'bg-primary/40',
  'bg-primary/70',
]

const LEVEL_TEXT_COLORS = [
  'text-[var(--text-muted)]',
  'text-primary',
  'text-primary',
  'text-white',
]

export default function ActivityCalendar({ activity = {}, streak = 0, className = '' }) {
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth)

  const days = useMemo(() => {
    const result = []
    
    for (let i = 0; i < firstDay; i++) {
      result.push({ day: null, date: null, count: 0, level: 0 })
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const count = activity[dateStr]?.exercises || 0
      const level = getActivityLevel(count)
      const isToday = day === today.getDate()

      result.push({ day, date: dateStr, count, level, isToday })
    }

    return result
  }, [daysInMonth, firstDay, currentYear, currentMonth, activity])

  const monthName = today.toLocaleDateString('ar-EG', { month: 'long', year: 'numeric' })

  const totalExercises = useMemo(() => {
    return Object.values(activity).reduce((sum, day) => sum + (day.exercises || 0), 0)
  }, [activity])

  const activeDays = useMemo(() => {
    return Object.values(activity).filter(day => day.exercises > 0).length
  }, [activity])

  return (
    <div className={`solid-card p-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-[var(--text-primary)]">📅 نشاطك</h3>
        <span className="text-xs text-[var(--text-muted)]">{monthName}</span>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {['ح', 'ث', 'أ', 'ن', 'خ', 'ج', 'س'].map((day) => (
          <div key={day} className="text-center text-xs text-[var(--text-muted)] font-semibold py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((dayData, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.01 }}
            className={`aspect-square rounded-[var(--radius-sm)] flex items-center justify-center text-xs font-semibold ${
              dayData.day
                ? `${LEVEL_COLORS[dayData.level]} ${LEVEL_TEXT_COLORS[dayData.level]} ${
                    dayData.isToday ? 'ring-2 ring-primary ring-offset-1' : ''
                  }`
                : 'bg-transparent'
            }`}
            title={dayData.day ? `${dayData.date}: ${dayData.count} تمارين` : ''}
          >
            {dayData.day || ''}
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-[var(--border-subtle)]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[var(--text-muted)]">🔥</span>
            <span className="text-xs font-bold text-primary">{streak}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[var(--text-muted)]">📝</span>
            <span className="text-xs font-bold text-success">{totalExercises}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-[var(--text-muted)]">📅</span>
          <span className="text-xs font-bold text-secondary">{activeDays} أيام</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <span className="text-xs text-[var(--text-muted)]">أقل</span>
        {LEVEL_COLORS.map((color, i) => (
          <div key={i} className={`w-3 h-3 rounded ${color}`} />
        ))}
        <span className="text-xs text-[var(--text-muted)]">أكثر</span>
      </div>
    </div>
  )
}
