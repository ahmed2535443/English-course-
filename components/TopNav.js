'use client'
import { useApp } from '@/context/AppContext'

export default function TopNav({ title, onMenuClick }) {
  const { xp, str, cst } = useApp()
  const hearts = cst?.hearts ?? 5

  return (
    <header className="h-[var(--topnav-h)] bg-white dark:bg-[#1a2a32] px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 border-b-2 border-gray-100 dark:border-[#233640]">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-[#233640] transition-colors lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <h1 className="text-[15px] font-extrabold text-gray-900 dark:text-white">{title}</h1>
      </div>

      <div className="flex items-center gap-2">
        {/* Streak */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800">
          <span className="text-base">🔥</span>
          <span className="text-sm font-extrabold text-orange-500">{str}</span>
        </div>

        {/* XP */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800">
          <span className="text-base">⭐</span>
          <span className="text-sm font-extrabold text-amber-500">{xp}</span>
        </div>

        {/* Hearts */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800">
          <span className="text-base">❤️</span>
          <span className="text-sm font-extrabold text-red-500">{hearts}</span>
        </div>
      </div>
    </header>
  )
}
