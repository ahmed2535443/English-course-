'use client'
import { motion } from 'framer-motion'

export function SkeletonCard({ className = '' }) {
  return (
    <div className={`solid-card overflow-hidden ${className}`}>
      <div className="p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--bg-surface-hover)] animate-pulse" />
          <div className="flex-1">
            <div className="h-4 bg-[var(--bg-surface-hover)] rounded w-2/3 animate-pulse mb-2" />
            <div className="h-3 bg-[var(--bg-surface-hover)] rounded w-1/3 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-3 bg-[var(--bg-surface-hover)] rounded animate-pulse"
          style={{ width: `${85 - i * 15}%` }}
        />
      ))}
    </div>
  )
}

export function SkeletonCircle({ size = 12, className = '' }) {
  return (
    <div
      className={`rounded-full bg-[var(--bg-surface-hover)] animate-pulse ${className}`}
      style={{ width: size * 4, height: size * 4 }}
    />
  )
}

export function SkeletonLesson({ count = 3 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}
