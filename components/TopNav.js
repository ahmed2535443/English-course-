'use client'
import { useApp } from '@/context/AppContext'

export default function TopNav({ title, onMenuClick }) {
  const { xp, str } = useApp()

  return (
    <header className="h-[var(--topnav-h)] glass-surface px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 border-b border-[var(--border-subtle)]">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="btn-icon lg:hidden"
        >
          ☰
        </button>
        <h1 className="text-[15px] font-extrabold text-[var(--text-primary)]">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="badge bg-orange-500/10 text-orange-600 dark:bg-orange-400/15 dark:text-orange-400 border border-orange-200/50 dark:border-orange-400/20">
          🔥 <span className="font-extrabold">{str}</span>
        </div>
        <div className="badge bg-primary/10 text-primary border border-primary/20">
          ⭐ <span className="font-extrabold">{xp}</span>
        </div>
      </div>
    </header>
  )
}
