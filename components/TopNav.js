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
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200/50 dark:border-orange-400/20">
          <span className="text-sm">🔥</span>
          <span className="text-xs font-extrabold text-orange-600 dark:text-orange-400">{str}</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-200/50 dark:border-amber-400/20">
          <span className="text-sm">⭐</span>
          <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400">{xp}</span>
        </div>
      </div>
    </header>
  )
}
