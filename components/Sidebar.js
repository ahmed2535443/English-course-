'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { useUser, useClerk, UserButton } from '@clerk/nextjs'

const NAV_LINKS = [
  { href: '/', icon: '🏠', label: 'الرئيسية' },
  { href: '/levels', icon: '📚', label: 'المستويات' },
  { href: '/vocabulary', icon: '📖', label: 'المفردات' },
  { href: '/stories', icon: '📚', label: 'القصص' },
  { href: '/activity', icon: '📅', label: 'نشاطي' },
  { href: '/leaderboard', icon: '🏆', label: 'لوحة الصدارة' },
  { href: '/friends', icon: '👥', label: 'أصدقائي' },
  { href: '/challenges', icon: '⚔️', label: 'تحديات' },
  { href: '/achievements', icon: '🎯', label: 'إنجازاتي' },
  { href: '/stats', icon: '📊', label: 'إحصائيات' },
]

function NavLink({ href, icon, label, active, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-semibold transition-all duration-200 ${
        active
          ? 'bg-primary/10 text-primary'
          : 'text-[var(--text-muted)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)]'
      }`}
    >
      <span className="text-lg w-7 text-center">{icon}</span>
      <span>{label}</span>
      {active && (
        <div className="mr-auto w-1.5 h-1.5 rounded-full bg-primary" />
      )}
    </Link>
  )
}

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname()
  const { xp, tot, dk, toggleDark, srs } = useApp()
  const { isSignedIn, user } = useUser()
  const { signOut } = useClerk()
  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed top-0 right-0 bottom-0 w-[260px] flex-col z-50 glass-surface">
        {/* Logo */}
        <div className="p-5 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-lg shadow-md shadow-primary/20">
              ✈️
            </div>
            <div>
              <div className="text-sm font-extrabold gradient-text leading-tight">zAmericanEnglish</div>
              <div className="text-[11px] text-[var(--text-muted)] mt-0.5">كورس المحادثة</div>
            </div>
          </div>
        </div>

        {/* User Profile / Auth */}
        <div className="p-3 border-b border-[var(--border-subtle)]">
          {isSignedIn ? (
            <div className="flex items-center gap-3 px-3 py-2">
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10',
                  }
                }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-[var(--text-primary)] truncate">
                  {user.firstName || user.emailAddresses[0]?.emailAddress}
                </div>
                <div className="text-xs text-[var(--text-muted)] truncate">
                  {user.emailAddresses[0]?.emailAddress}
                </div>
              </div>
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-all"
            >
              <span className="text-lg w-7 text-center">👤</span>
              <span>تسجيل الدخول</span>
            </Link>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} active={pathname === link.href} />
          ))}

          <div className="h-px bg-[var(--border-subtle)] my-3 mx-2" />

          <Link
            href="/srs"
            className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-semibold text-secondary hover:bg-secondary/10 transition-all duration-200"
          >
            <span className="text-lg w-7 text-center">🧠</span>
            <span>مراجعة ذكية</span>
            {dueCount > 0 && (
              <span className="mr-auto bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {dueCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Footer Stats */}
        <div className="p-3 border-t border-[var(--border-subtle)]">
          <div className="flex gap-2 mb-3">
            <div className="flex-1 rounded-[var(--radius-sm)] p-2.5 text-center bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <div className="text-base font-extrabold text-amber-600">{xp}</div>
              <div className="text-[10px] font-semibold text-[var(--text-muted)]">⭐ النقاط</div>
            </div>
            <div className="flex-1 rounded-[var(--radius-sm)] p-2.5 text-center bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
              <div className="text-base font-extrabold text-primary">{tot}</div>
              <div className="text-[10px] font-semibold text-[var(--text-muted)]">📝 تمارين</div>
            </div>
          </div>
          <button
            onClick={toggleDark}
            className="w-full py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] transition-all duration-200"
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
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[var(--bg-surface)] z-50 lg:hidden flex flex-col shadow-2xl border-l border-[var(--border-subtle)]"
            >
              <div className="p-5 border-b border-[var(--border-subtle)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-lg shadow-md shadow-primary/20">
                    ✈️
                  </div>
                  <div>
                    <div className="text-sm font-extrabold gradient-text">zAmericanEnglish</div>
                    <div className="text-[11px] text-[var(--text-muted)]">كورس المحادثة</div>
                  </div>
                </div>
                <button onClick={onClose} className="btn-icon text-lg">✕</button>
              </div>

              {/* Mobile User Profile */}
              <div className="p-3 border-b border-[var(--border-subtle)]">
                {isSignedIn ? (
                  <div className="flex items-center gap-3 px-3 py-2">
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: 'w-10 h-10',
                        }
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-[var(--text-primary)] truncate">
                        {user.firstName || user.emailAddresses[0]?.emailAddress}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] truncate">
                        {user.emailAddresses[0]?.emailAddress}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/auth/login"
                    onClick={onClose}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                  >
                    <span className="text-lg w-7 text-center">👤</span>
                    <span>تسجيل الدخول</span>
                  </Link>
                )}
              </div>

              <nav className="flex-1 p-3 space-y-0.5">
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.href} {...link} active={pathname === link.href} onClick={onClose} />
                ))}
                <div className="h-px bg-[var(--border-subtle)] my-3 mx-2" />
                <Link
                  href="/srs"
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[var(--radius-sm)] text-sm font-semibold text-secondary hover:bg-secondary/10 transition-all"
                >
                  <span className="text-lg w-7 text-center">🧠</span>
                  <span>مراجعة ذكية</span>
                  {dueCount > 0 && (
                    <span className="mr-auto bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {dueCount}
                    </span>
                  )}
                </Link>
              </nav>

              <div className="p-3 border-t border-[var(--border-subtle)]">
                <button
                  onClick={toggleDark}
                  className="w-full py-2.5 rounded-[var(--radius-sm)] bg-[var(--bg-surface-hover)] text-sm font-semibold text-[var(--text-secondary)]"
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
