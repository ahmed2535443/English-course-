'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()

  const links = [
    { href: '/', icon: '🏠', label: 'الرئيسية' },
    { href: '/achievements', icon: '🏆', label: 'إنجازات' },
    { href: '/stats', icon: '📊', label: 'إحصائيات' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 flex lg:hidden z-30">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`flex-1 flex flex-col items-center py-2.5 gap-0.5 transition-all ${
            pathname === link.href ? 'text-primary' : 'text-neutral-500'
          }`}
        >
          <span className={`text-xl transition-transform ${pathname === link.href ? 'scale-110 -translate-y-0.5' : ''}`}>
            {link.icon}
          </span>
          <span className="text-[10px] font-semibold">{link.label}</span>
        </Link>
      ))}
    </nav>
  )
}
