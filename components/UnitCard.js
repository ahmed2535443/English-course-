'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const STEP_ICONS = {
  explanation: '📖',
  vocabulary: '📝',
  conversation: '🗣️',
  practice: '✏️',
}

export default function UnitCard({ unit, index, completedSteps, totalSteps, isLocked, isCompleted, isCurrent }) {
  const pct = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
    >
      <Link
        href={isLocked ? '#' : `/unit/${unit.id}`}
        className={`group block solid-card ${isLocked ? 'opacity-50 pointer-events-none' : ''}`}
      >
        <div className="p-5">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-2xl text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
              {unit.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-base font-bold text-[var(--text-primary)] group-hover:text-primary transition-colors">
                الوحدة {unit.id}: {unit.title}
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-0.5 line-clamp-1">{unit.description}</div>
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

          <div className="flex items-center gap-2 mb-2">
            {unit.steps.map((step) => (
              <span
                key={step}
                className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--bg-surface-hover)] text-[var(--text-muted)]"
              >
                {STEP_ICONS[step]} {step === 'explanation' ? 'شرح' : step === 'vocabulary' ? 'كلمات' : step === 'conversation' ? 'محادثة' : 'تدريب'}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2">
            <span>{totalSteps} خطوات</span>
            <span>{completedSteps}/{totalSteps} مكتملة</span>
          </div>

          <div className="progress-track h-1.5">
            <div
              className="progress-fill h-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>

          {isCurrent && (
            <div className="mt-3 text-xs font-bold text-primary">← واصل التعلم</div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
