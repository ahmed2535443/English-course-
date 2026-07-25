'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()

  const links = [
    { href: '/', icon: '📚', label: 'الرئيسية' },
    { href: '/achievements', icon: '🏆', label: 'إنجازات' },
    { href: '/stats', icon: '📊', label: 'إحصائيات' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass border-t border-slate-200/60 dark:border-slate-700/60 flex lg:hidden z-30 px-2 pb-safe">
      {links.map((link) => {
        const active = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-all duration-200 ${
              active ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-500 dark:text-slate-400'
            }`}
          >
            <span className={`text-xl transition-all duration-200 ${active ? 'scale-110 -translate-y-0.5' : ''}`}>
              {link.icon}
            </span>
            <span className="text-[10px] font-bold">{link.label}</span>
            {active && (
              <div className="w-4 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-0.5" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
