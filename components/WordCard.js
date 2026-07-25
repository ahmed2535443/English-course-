'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

function getMasteryColor(level) {
  if (level >= 5) return 'text-success'
  if (level >= 3) return 'text-warning'
  return 'text-error'
}

function getMasteryBg(level) {
  if (level >= 5) return 'bg-success'
  if (level >= 3) return 'bg-warning'
  return 'bg-error'
}

function getMasteryLabel(level) {
  if (level >= 5) return 'مُتقَنة'
  if (level >= 3) return 'تتعلمها'
  return 'جديدة'
}

function formatDate(dateStr) {
  if (!dateStr) return 'لم تتم المراجعة بعد'
  const date = new Date(dateStr)
  const now = new Date()
  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'اليوم'
  if (diffDays === 1) return 'أمس'
  if (diffDays < 7) return `منذ ${diffDays} أيام`
  if (diffDays < 30) return `منذ ${Math.floor(diffDays / 7)} أسابيع`
  return `منذ ${Math.floor(diffDays / 30)} أشهر`
}

export default function WordCard({ word, onReview, compact = false }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const mastery = word.srsLevel || 0
  const masteryPct = Math.min(100, (mastery / 6) * 100)

  if (compact) {
    return (
      <div className="flex items-center justify-between p-3 bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)]">
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-[var(--text-primary)] direction-ltr">{word.en}</div>
          <div className="text-xs text-[var(--text-muted)]">{word.ar}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${getMasteryBg(mastery)}`} />
          {onReview && mastery < 4 && (
            <button
              onClick={() => onReview(word)}
              className="text-xs text-primary hover:underline"
            >
              راجع
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="solid-card overflow-hidden"
    >
      <div
        className="p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-[var(--text-primary)] direction-ltr">{word.en}</span>
              <span className={`text-xs font-bold ${getMasteryColor(mastery)}`}>
                {getMasteryLabel(mastery)}
              </span>
            </div>
            <div className="text-sm text-primary mt-0.5">{word.ar}</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className={`text-lg font-extrabold ${getMasteryColor(mastery)}`}>{masteryPct}%</div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-[var(--text-muted)]"
            >
              ▼
            </motion.div>
          </div>
        </div>

        <div className="mt-2">
          <div className="w-full bg-[var(--bg-surface-hover)] rounded-full h-1.5">
            <div
              className={`h-full rounded-full ${getMasteryBg(mastery)} transition-all duration-300`}
              style={{ width: `${masteryPct}%` }}
            />
          </div>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="border-t border-[var(--border-subtle)] p-4 bg-[var(--bg-surface-hover)]"
        >
          <div className="space-y-3">
            {word.d && (
              <div>
                <span className="text-xs font-bold text-[var(--text-muted)]">الشرح:</span>
                <p className="text-sm text-[var(--text-primary)] mt-1">{word.d}</p>
              </div>
            )}

            {word.cl && word.cl.length > 0 && (
              <div>
                <span className="text-xs font-bold text-[var(--text-muted)]">الcollocations:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {word.cl.map((col, i) => (
                    <span key={i} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full direction-ltr">
                      {col}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {word.us && word.us.length > 0 && (
              <div>
                <span className="text-xs font-bold text-[var(--text-muted)]">أمثلة:</span>
                <div className="space-y-1 mt-1">
                  {word.us.slice(0, 2).map((usage, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-primary">📝 {usage.t}:</span>
                      <span className="text-[var(--text-primary)] direction-ltr block">{usage.e}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-2 border-t border-[var(--border-subtle)]">
              <div className="text-xs text-[var(--text-muted)]">
                آخر مراجعة: {formatDate(word.lastReview)}
              </div>
              {onReview && mastery < 4 && (
                <button
                  onClick={() => onReview(word)}
                  className="btn btn-primary py-1.5 px-3 text-xs"
                >
                  🧠 راجع الآن
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}
