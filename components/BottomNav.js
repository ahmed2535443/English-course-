'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', icon: '📚', label: 'الرئيسية' },
  { href: '/achievements', icon: '🏆', label: 'إنجازات' },
  { href: '/stats', icon: '📊', label: 'إحصائيات' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] flex lg:hidden z-30 px-1">
      {NAV_LINKS.map((link) => {
        const active = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex-1 flex flex-col items-center py-2 gap-0.5 transition-all duration-200 ${
              active ? 'text-primary' : 'text-[var(--text-muted)]'
            }`}
          >
            <span className={`text-lg transition-transform duration-200 ${active ? 'scale-110' : ''}`}>
              {link.icon}
            </span>
            <span className="text-[10px] font-bold">{link.label}</span>
            {active && (
              <div className="w-5 h-[3px] rounded-full bg-primary mt-0.5" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
