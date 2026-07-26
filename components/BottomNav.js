'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', icon: '🏠', label: 'الرئيسية' },
  { href: '/stories', icon: '📚', label: 'القصص' },
  { href: '/srs', icon: '🧠', label: 'المراجعة' },
  { href: '/leaderboard', icon: '🏆', label: 'التصنيف' },
  { href: '/stats', icon: '📊', label: 'الملف' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1a2a32] border-t-2 border-gray-100 dark:border-[#233640] flex lg:hidden z-30 px-2 pb-safe">
      {NAV_LINKS.map((link) => {
        const active = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex-1 flex flex-col items-center py-3 gap-1 transition-all duration-200 ${
              active ? 'text-[#58CC02]' : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            <span className={`text-2xl transition-transform duration-200 ${active ? 'scale-110' : ''}`}>
              {link.icon}
            </span>
            <span className={`text-[10px] font-bold ${active ? 'text-[#58CC02]' : ''}`}>
              {link.label}
            </span>
            {active && (
              <div className="w-8 h-1 rounded-full bg-[#58CC02] mt-0.5" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
