'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { useUser, useClerk, UserButton } from '@clerk/nextjs'

const NAV_LINKS = [
  { href: '/', icon: '🏠', label: 'الرئيسية' },
  { href: '/levels', icon: '📚', label: 'المستويات' },
  { href: '/stories', icon: '📖', label: 'القصص' },
  { href: '/vocabulary', icon: '📝', label: 'المفردات' },
  { href: '/leaderboard', icon: '🏆', label: 'التصنيف' },
  { href: '/friends', icon: '👥', label: 'أصدقائي' },
  { href: '/challenges', icon: '⚔️', label: 'التحديات' },
  { href: '/achievements', icon: '🎯', label: 'إنجازاتي' },
  { href: '/activity', icon: '📅', label: 'نشاطي' },
  { href: '/stats', icon: '📊', label: 'الملف' },
]

function NavLink({ href, icon, label, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
        active
          ? 'bg-[#58CC02]/10 text-[#58CC02]'
          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#233640] hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      <span className="text-xl w-8 text-center">{icon}</span>
      <span>{label}</span>
      {active && (
        <div className="mr-auto w-2 h-2 rounded-full bg-[#58CC02]" />
      )}
    </Link>
  )
}

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname()
  const { xp, tot, dk, toggleDark, srs, str, cst } = useApp()
  const { isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0
  const hearts = cst?.hearts ?? 5

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 right-0 bottom-0 w-[280px] flex-col z-50 bg-white dark:bg-[#1a2a32] border-l-2 border-gray-100 dark:border-[#233640]">
        {/* Logo */}
        <div className="p-5 border-b-2 border-gray-100 dark:border-[#233640]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#58CC02] flex items-center justify-center text-white text-2xl shadow-lg shadow-[#58CC02]/30">
              🦉
            </div>
            <div>
              <div className="text-base font-extrabold text-gray-900 dark:text-white leading-tight">ZAmerican</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">كورس الإنجليزي</div>
            </div>
          </div>
        </div>

        {/* User Profile / Auth */}
        <div className="p-3 border-b-2 border-gray-100 dark:border-[#233640]">
          {isSignedIn ? (
            <div className="flex items-center gap-3 px-3 py-2">
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: 'w-12 h-12',
                  }
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-gray-900 dark:text-white truncate">
                  {user.firstName || user.emailAddresses[0]?.emailAddress}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {user.emailAddresses[0]?.emailAddress}
                </div>
              </div>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold bg-[#58CC02]/10 text-[#58CC02] hover:bg-[#58CC02]/20 transition-all"
            >
              <span className="text-xl w-8 text-center">👤</span>
              <span>تسجيل الدخول</span>
            </Link>
          )}
        </div>

        {/* Stats */}
        <div className="p-3 border-b-2 border-gray-100 dark:border-[#233640]">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl p-3 text-center bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800">
              <div className="text-lg font-extrabold text-orange-500">🔥 {str}</div>
              <div className="text-[10px] font-bold text-orange-400">يوم</div>
            </div>
            <div className="rounded-xl p-3 text-center bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800">
              <div className="text-lg font-extrabold text-amber-500">⭐ {xp}</div>
              <div className="text-[10px] font-bold text-amber-400">XP</div>
            </div>
            <div className="rounded-xl p-3 text-center bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800">
              <div className="text-lg font-extrabold text-red-500">❤️ {hearts}</div>
              <div className="text-[10px] font-bold text-red-400">قلب</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} active={pathname === link.href} />
          ))}

          <div className="h-px bg-gray-100 dark:bg-[#233640] my-3 mx-2" />

          <Link
            href="/srs"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-[#1CB0F6] hover:bg-[#1CB0F6]/10 transition-all duration-200"
          >
            <span className="text-xl w-8 text-center">🧠</span>
            <span>المراجعة الذكية</span>
            {dueCount > 0 && (
              <span className="mr-auto bg-[#1CB0F6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {dueCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t-2 border-gray-100 dark:border-[#233640]">
          <button
            onClick={toggleDark}
            className="w-full py-3 rounded-xl bg-gray-100 dark:bg-[#233640] text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2a3a42] transition-all duration-200"
          >
            {dk ? '☀️ الوضع الفاتح' : '🌙 الوضع الداكن'}
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
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
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white dark:bg-[#1a2a32] z-50 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="p-5 border-b-2 border-gray-100 dark:border-[#233640] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#58CC02] flex items-center justify-center text-white text-2xl shadow-lg shadow-[#58CC02]/30">
                    🦉
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-gray-900 dark:text-white">ZAmerican</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">كورس الإنجليزي</div>
                  </div>
                </div>
                <button onClick={onClose} className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gray-100 dark:hover:bg-[#233640] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>

              {/* Mobile User Profile */}
              <div className="p-3 border-b-2 border-gray-100 dark:border-[#233640]">
                {isSignedIn ? (
                  <div className="flex items-center gap-3 px-3 py-2">
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: 'w-12 h-12',
                        }
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-gray-900 dark:text-white truncate">
                        {user.firstName || user.emailAddresses[0]?.emailAddress}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user.emailAddresses[0]?.emailAddress}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/auth/login"
                    onClick={onClose}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold bg-[#58CC02]/10 text-[#58CC02] hover:bg-[#58CC02]/20 transition-all"
                  >
                    <span className="text-xl w-8 text-center">👤</span>
                    <span>تسجيل الدخول</span>
                  </Link>
                )}
              </div>

              {/* Mobile Stats */}
              <div className="p-3 border-b-2 border-gray-100 dark:border-[#233640]">
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-xl p-3 text-center bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-200 dark:border-orange-800">
                    <div className="text-lg font-extrabold text-orange-500">🔥 {str}</div>
                    <div className="text-[10px] font-bold text-orange-400">يوم</div>
                  </div>
                  <div className="rounded-xl p-3 text-center bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800">
                    <div className="text-lg font-extrabold text-amber-500">⭐ {xp}</div>
                    <div className="text-[10px] font-bold text-amber-400">XP</div>
                  </div>
                  <div className="rounded-xl p-3 text-center bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800">
                    <div className="text-lg font-extrabold text-red-500">❤️ {hearts}</div>
                    <div className="text-[10px] font-bold text-red-400">قلب</div>
                  </div>
                </div>
              </div>

              <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.href} {...link} active={pathname === link.href} onClick={onClose} />
                ))}
                <div className="h-px bg-gray-100 dark:bg-[#233640] my-3 mx-2" />
                <Link
                  href="/srs"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-[#1CB0F6] hover:bg-[#1CB0F6]/10 transition-all"
                >
                  <span className="text-xl w-8 text-center">🧠</span>
                  <span>المراجعة الذكية</span>
                  {dueCount > 0 && (
                    <span className="mr-auto bg-[#1CB0F6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {dueCount}
                    </span>
                  )}
                </Link>
              </nav>

              <div className="p-3 border-t-2 border-gray-100 dark:border-[#233640]">
                <button
                  onClick={toggleDark}
                  className="w-full py-3 rounded-xl bg-gray-100 dark:bg-[#233640] text-sm font-bold text-gray-600 dark:text-gray-300"
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
