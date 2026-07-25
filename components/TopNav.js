'use client'
import { useApp } from '@/context/AppContext'

export default function TopNav({ title, onMenuClick }) {
  const { xp, str } = useApp()

  return (
    <header className="h-14 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 px-4 md:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center lg:hidden"
        >
          ☰
        </button>
        <h1 className="text-[15px] font-bold">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-sm font-semibold text-neutral-500">
          🔥 <span className="text-neutral-900 dark:text-white font-bold">{str}</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-neutral-500">
          ⭐ <span className="text-neutral-900 dark:text-white font-bold">{xp}</span>
        </div>
      </div>
    </header>
  )
}
