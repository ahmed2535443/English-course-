'use client'
import { useApp } from '@/context/AppContext'

export default function TopNav({ title, onMenuClick }) {
  const { xp, str } = useApp()

  return (
    <header className="h-[60px] glass border-b border-white/30 dark:border-indigo-500/10 px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="w-10 h-10 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center lg:hidden hover:bg-slate-200/80 dark:hover:bg-slate-700/50 transition-colors"
        >
          <span className="text-lg">☰</span>
        </button>
        <h1 className="text-base md:text-lg font-extrabold text-slate-800 dark:text-slate-100">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-500/10 dark:to-red-500/10 border border-orange-100 dark:border-orange-500/15">
          <span className="text-sm">🔥</span>
          <span className="text-sm font-extrabold text-orange-600 dark:text-orange-400">{str}</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-500/10 dark:to-yellow-500/10 border border-amber-100 dark:border-amber-500/15">
          <span className="text-sm">⭐</span>
          <span className="text-sm font-extrabold text-amber-600 dark:text-amber-400">{xp}</span>
        </div>
      </div>
    </header>
  )
}
