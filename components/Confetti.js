'use client'
import { useEffect, useState } from 'react'

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#ef4444']

export default function Confetti({ show }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (!show) return
    const p = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      color: COLORS[i % COLORS.length],
      left: Math.random() * 100,
      delay: Math.random() * 0.8,
      size: 4 + Math.random() * 6,
    }))
    setParticles(p)
    const timer = setTimeout(() => setParticles([]), 3500)
    return () => clearTimeout(timer)
  }, [show])

  if (!particles.length) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="animate-confetti"
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: -10,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
