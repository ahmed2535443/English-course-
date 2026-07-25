'use client'
import { useEffect, useState } from 'react'

const COLORS = ['#0070f3', '#7928ca', '#ff0080', '#00c853', '#ff9100', '#ff1744']

export default function Confetti({ show }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (!show) return
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 2,
    }))
    setParticles(newParticles)
    const timer = setTimeout(() => setParticles([]), 4000)
    return () => clearTimeout(timer)
  }, [show])

  if (particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-2.5 h-2.5 rounded-sm animate-confetti"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
