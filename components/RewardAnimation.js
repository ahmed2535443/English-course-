'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function FloatingReward({ value, type, index, onComplete }) {
  const colors = {
    xp: 'from-amber-400 to-orange-500',
    star: 'from-yellow-400 to-amber-500',
    streak: 'from-red-400 to-pink-500',
    combo: 'from-purple-400 to-violet-500',
  }

  const icons = {
    xp: '⭐',
    star: '✨',
    streak: '🔥',
    combo: '💥',
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(index)
    }, 1500)
    return () => clearTimeout(timer)
  }, [index, onComplete])

  return (
    <motion.div
      initial={{ opacity: 0, y: 0, scale: 0.5 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: -80,
        scale: [0.5, 1.2, 1, 0.8],
      }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className={`absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${colors[type]} text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg pointer-events-none`}
      style={{ bottom: '100%' }}
    >
      <div className="flex items-center gap-2">
        <span>{icons[type]}</span>
        <span>+{value}</span>
      </div>
    </motion.div>
  )
}

export default function RewardAnimation({ rewards = [], onComplete }) {
  const [activeRewards, setActiveRewards] = useState([])

  useEffect(() => {
    if (rewards.length > 0) {
      setActiveRewards(rewards.map((r, i) => ({ ...r, id: Date.now() + i })))
    }
  }, [rewards])

  const handleComplete = (index) => {
    setActiveRewards(prev => prev.filter((_, i) => i !== index))
    if (activeRewards.length === 1 && onComplete) {
      onComplete()
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <div className="relative">
        <AnimatePresence>
          {activeRewards.map((reward, index) => (
            <FloatingReward
              key={reward.id}
              value={reward.value}
              type={reward.type}
              index={index}
              onComplete={handleComplete}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Simple inline reward component for use within cards
export function InlineReward({ show, value = 10, type = 'xp' }) {
  const colors = {
    xp: 'text-amber-500',
    star: 'text-yellow-500',
    streak: 'text-red-500',
    combo: 'text-purple-500',
  }

  const icons = {
    xp: '⭐',
    star: '✨',
    streak: '🔥',
    combo: '💥',
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.8 }}
          className={`inline-flex items-center gap-1 ${colors[type]} font-bold text-sm`}
        >
          <span>{icons[type]}</span>
          <span>+{value}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Confetti burst effect
export function ConfettiBurst({ show, onComplete }) {
  useEffect(() => {
    if (show && onComplete) {
      const timer = setTimeout(onComplete, 2000)
      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  const colors = ['#7c3aed', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444']
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    x: Math.random() * 400 - 200,
    y: Math.random() * -300 - 100,
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
  }))

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                opacity: 1,
                x: '50%',
                y: '50%',
                scale: 0,
                rotate: 0,
              }}
              animate={{
                opacity: [1, 1, 0],
                x: `calc(50% + ${particle.x}px)`,
                y: `calc(50% + ${particle.y}px)`,
                scale: particle.scale,
                rotate: particle.rotation,
              }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute w-3 h-3 rounded-sm"
              style={{ backgroundColor: particle.color }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}

// Level up animation
export function LevelUpAnimation({ show, level, onComplete }) {
  useEffect(() => {
    if (show && onComplete) {
      const timer = setTimeout(onComplete, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl p-8 text-center shadow-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <div className="text-white text-3xl font-bold mb-2">Level Up!</div>
            <div className="text-white/80 text-xl">Level {level}</div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
              className="text-5xl mt-4"
            >
              ⭐
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
