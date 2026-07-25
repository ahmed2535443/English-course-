'use client'
import { useApp } from '@/context/AppContext'

export default function TopNav({ title, onMenuClick }) {
  const { xp, str } = useApp()

  return (
    <header className="h-[60px] glass border-b border-slate-200/60 dark:border-slate-700/60 px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center lg:hidden hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <span className="text-lg text-slate-600 dark:text-slate-300">☰</span>
        </button>
        <h1 className="text-base md:text-lg font-extrabold text-slate-800 dark:text-slate-100">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 dark:bg-orange-500/10 border border-orange-200/60 dark:border-orange-500/15">
          <span className="text-sm">🔥</span>
          <span className="text-sm font-extrabold text-orange-700 dark:text-orange-300">{str}</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200/60 dark:border-amber-500/15">
          <span className="text-sm">⭐</span>
          <span className="text-sm font-extrabold text-amber-700 dark:text-amber-300">{xp}</span>
        </div>
      </div>
    </header>
  )
}
