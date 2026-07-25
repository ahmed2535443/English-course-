'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/context/AppContext'

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname()
  const { xp, tot, dk, toggleDark, srs } = useApp()

  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0

  const links = [
    { href: '/', icon: '🏠', label: 'الدروس' },
    { href: '/achievements', icon: '🏆', label: 'إنجازات' },
    { href: '/stats', icon: '📊', label: 'إحصائيات' },
  ]

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 right-0 bottom-0 w-[260px] bg-white border-l border-neutral-200 flex-col z-50 dark:bg-neutral-900 dark:border-neutral-800">
        <div className="p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-[10px] flex items-center justify-center text-white text-lg">
            ✈️
          </div>
          <div>
            <div className="text-[15px] font-bold">zAmericanEnglish</div>
            <div className="text-[11px] text-neutral-500">كورس المحادثة المستوى الأول</div>
          </div>
        </div>

        <nav className="flex-1 p-3 overflow-y-auto space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                pathname === link.href
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800'
              }`}
            >
              <span className="text-lg w-6 text-center">{link.icon}</span>
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2" />
          <Link
            href="/srs"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-secondary hover:bg-secondary/10 transition-all"
          >
            <span className="text-lg w-6 text-center">🧠</span>
            مراجعة ذكية
            {dueCount > 0 && (
              <span className="mr-auto bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {dueCount}
              </span>
            )}
          </Link>
        </nav>

        <div className="p-3 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex gap-2 mb-3">
            <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-2.5 text-center">
              <div className="text-lg font-extrabold">{xp}</div>
              <div className="text-[10px] text-neutral-500">⭐ النقاط</div>
            </div>
            <div className="flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-2.5 text-center">
              <div className="text-lg font-extrabold">{tot}</div>
              <div className="text-[10px] text-neutral-500">📝 تمارين</div>
            </div>
          </div>
          <button
            onClick={toggleDark}
            className="w-full py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all"
          >
            {dk ? '☀️ الوضع الفاتح' : '🌙 الوضع الداكن'}
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[300px] bg-white dark:bg-neutral-900 z-50 lg:hidden flex flex-col shadow-xl"
            >
              <div className="p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-[10px] flex items-center justify-center text-white text-lg">
                    ✈️
                  </div>
                  <div>
                    <div className="text-[15px] font-bold">zAmericanEnglish</div>
                    <div className="text-[11px] text-neutral-500">كورس المحادثة</div>
                  </div>
                </div>
                <button onClick={onClose} className="text-2xl text-neutral-400 hover:text-neutral-600">
                  ✕
                </button>
              </div>

              <nav className="flex-1 p-3 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      pathname === link.href
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-neutral-500 hover:bg-neutral-100'
                    }`}
                  >
                    <span className="text-lg w-6 text-center">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
                <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-2" />
                <Link
                  href="/srs"
                  onClick={onClose}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium text-secondary hover:bg-secondary/10 transition-all"
                >
                  <span className="text-lg w-6 text-center">🧠</span>
                  مراجعة ذكية
                </Link>
              </nav>

              <div className="p-3 border-t border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={toggleDark}
                  className="w-full py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-sm font-semibold"
                >
                  {dk ? '☀️ الوضع الفاتح' : '🌙 الوضع الداكن'}
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
