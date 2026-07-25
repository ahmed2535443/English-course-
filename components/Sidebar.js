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
    { href: '/', icon: '📚', label: 'الدروس' },
    { href: '/achievements', icon: '🏆', label: 'إنجازات' },
    { href: '/stats', icon: '📊', label: 'إحصائيات' },
  ]

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 right-0 bottom-0 w-[260px] bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border-l border-slate-200/60 dark:border-slate-700/60 flex-col z-50">
        {/* Header */}
        <div className="p-5 border-b border-slate-200/60 dark:border-slate-700/60">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/25">
              ✈️
            </div>
            <div>
              <div className="text-[15px] font-extrabold gradient-text">zAmericanEnglish</div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">كورس المحادثة</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 overflow-y-auto space-y-1">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-slate-800 dark:hover:text-slate-100'
                }`}
              >
                <span className="text-lg w-7 text-center">{link.icon}</span>
                {link.label}
                {active && (
                  <div className="mr-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                )}
              </Link>
            )
          })}

          <div className="h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent dark:via-slate-700 my-3" />

          <Link
            href="/srs"
            className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all duration-200"
          >
            <span className="text-lg w-7 text-center">🧠</span>
            مراجعة ذكية
            {dueCount > 0 && (
              <span className="mr-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                {dueCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Stats + Dark mode */}
        <div className="p-3 border-t border-slate-200/60 dark:border-slate-700/60">
          <div className="flex gap-2 mb-3">
            <div className="flex-1 bg-amber-50 dark:bg-amber-500/10 rounded-xl p-3 text-center border border-amber-200/60 dark:border-amber-500/15">
              <div className="text-lg font-extrabold text-amber-700 dark:text-amber-300">{xp}</div>
              <div className="text-[10px] font-semibold text-amber-600/70 dark:text-amber-400/60">⭐ النقاط</div>
            </div>
            <div className="flex-1 bg-blue-50 dark:bg-blue-500/10 rounded-xl p-3 text-center border border-blue-200/60 dark:border-blue-500/15">
              <div className="text-lg font-extrabold text-blue-700 dark:text-blue-300">{tot}</div>
              <div className="text-[10px] font-semibold text-blue-600/70 dark:text-blue-400/60">📝 تمارين</div>
            </div>
          </div>
          <button
            onClick={toggleDark}
            className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[300px] bg-white dark:bg-slate-900 z-50 lg:hidden flex flex-col shadow-2xl"
            >
              <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/25">
                    ✈️
                  </div>
                  <div>
                    <div className="text-[15px] font-extrabold gradient-text">zAmericanEnglish</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">كورس المحادثة</div>
                  </div>
                </div>
                <button onClick={onClose} className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">
                  ✕
                </button>
              </div>

              <nav className="flex-1 p-3 space-y-1">
                {links.map((link) => {
                  const active = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        active
                          ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-lg w-7 text-center">{link.icon}</span>
                      {link.label}
                    </Link>
                  )
                })}
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-3" />
                <Link
                  href="/srs"
                  onClick={onClose}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 transition-all"
                >
                  <span className="text-lg w-7 text-center">🧠</span>
                  مراجعة ذكية
                </Link>
              </nav>

              <div className="p-3 border-t border-slate-200 dark:border-slate-700">
                <button
                  onClick={toggleDark}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300"
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
