'use client'
import { useState } from 'react'

const FILTER_OPTIONS = [
  { id: 'all', label: 'الكل', icon: '📚' },
  { id: 'mastered', label: 'مُتقَنة', icon: '📗' },
  { id: 'learning', label: 'تتعلمها', icon: '📙' },
  { id: 'new', label: 'جديدة', icon: '📕' },
]

const CATEGORY_OPTIONS = [
  { id: 'all', label: 'الكل' },
  { id: 'verb', label: 'أفعال' },
  { id: 'noun', label: 'اسماء' },
  { id: 'adjective', label: 'صفات' },
  { id: 'phrase', label: 'تعابير' },
]

export default function WordSearch({ 
  value, 
  onChange, 
  filter, 
  onFilterChange,
  categoryFilter,
  onCategoryFilterChange,
  stats = {}
}) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="space-y-3">
      <div className={`relative flex items-center bg-[var(--bg-surface-hover)] border rounded-[var(--radius-md)] transition-colors ${
        isFocused ? 'border-primary/50' : 'border-[var(--border-subtle)]'
      }`}>
        <span className="absolute right-3 text-[var(--text-muted)]">🔍</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="ابحث عن كلمة..."
          className="w-full pr-10 pl-4 py-3 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none text-sm"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute left-3 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            ✕
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => onFilterChange(option.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filter === option.id
                ? 'bg-primary text-white'
                : 'bg-[var(--bg-surface-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <span>{option.icon}</span>
            <span>{option.label}</span>
            {stats[option.id] !== undefined && (
              <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${
                filter === option.id ? 'bg-white/20' : 'bg-[var(--bg-surface)]'
              }`}>
                {stats[option.id]}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {CATEGORY_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => onCategoryFilterChange(option.id)}
            className={`px-2.5 py-1 rounded-[var(--radius-sm)] text-xs font-semibold transition-all ${
              categoryFilter === option.id
                ? 'bg-secondary text-white'
                : 'bg-[var(--bg-surface-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
