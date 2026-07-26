'use client'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'

export default function ThemeToggle() {
  const { dk, toggleDark } = useApp()

  return (
    <button
      onClick={toggleDark}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 dark:from-indigo-600 dark:to-purple-600 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
      aria-label={dk ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
        style={{
          marginLeft: dk ? 'auto' : '0',
        }}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: dk ? 180 : 0,
            scale: dk ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          ☀️
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: dk ? 0 : -180,
            scale: dk ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          🌙
        </motion.div>
      </motion.div>

      {/* Background stars for dark mode */}
      <motion.div
        initial={false}
        animate={{ opacity: dk ? 1 : 0 }}
        className="absolute inset-0 overflow-hidden rounded-full"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </motion.div>
    </button>
  )
}

// Alternative: Icon-only toggle
export function ThemeIconToggle() {
  const { dk, toggleDark } = useApp()

  return (
    <button
      onClick={toggleDark}
      className="btn-icon relative overflow-hidden"
      aria-label={dk ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: dk ? 180 : 0,
          scale: dk ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        ☀️
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: dk ? 0 : -180,
          scale: dk ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        🌙
      </motion.div>
    </button>
  )
}

// Dropdown theme selector
export function ThemeSelector() {
  const { dk, toggleDark } = useApp()

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-[var(--radius-md)] bg-[var(--bg-surface-hover)]">
      <span className="text-sm font-semibold text-[var(--text-primary)]">🎨 Theme</span>
      <div className="flex gap-2">
        <button
          onClick={() => dk && toggleDark()}
          className={`w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-sm transition-all ${
            !dk ? 'ring-2 ring-primary ring-offset-2' : 'opacity-50'
          }`}
        >
          ☀️
        </button>
        <button
          onClick={() => !dk && toggleDark()}
          className={`w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-sm transition-all ${
            dk ? 'ring-2 ring-primary ring-offset-2' : 'opacity-50'
          }`}
        >
          🌙
        </button>
      </div>
    </div>
  )
}
