'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUser } from '@clerk/nextjs'
import { getLeaderboard } from '@/lib/supabase'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import { useApp } from '@/context/AppContext'

function LeaderboardRow({ rank, user, isCurrentUser }) {
  const getRankStyle = (rank) => {
    if (rank === 1) return 'bg-yellow-500/10 border-yellow-500/30'
    if (rank === 2) return 'bg-gray-400/10 border-gray-400/30'
    if (rank === 3) return 'bg-orange-500/10 border-orange-500/30'
    return 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)]'
  }

  const getRankIcon = (rank) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return `#${rank}`
  }

  const displayName = user.name || user.user_id?.slice(0, 8) || 'مستخدم'
  const lessonsCount = user.completed_lessons || user.lessons || 0

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 * Math.min(rank, 10) }}
      className={`p-4 rounded-[var(--radius-md)] border ${getRankStyle(rank)} ${
        isCurrentUser ? 'ring-2 ring-primary/30' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
          {getRankIcon(rank)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[var(--text-primary)] truncate">
              {displayName}
            </span>
            {isCurrentUser && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">أنت</span>
            )}
          </div>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-xs text-[var(--text-muted)]">🔥 {user.streak || 0}</span>
            <span className="text-xs text-[var(--text-muted)]">📚 {lessonsCount} دروس</span>
          </div>
        </div>
        <div className="text-left">
          <div className="text-lg font-extrabold text-primary">{user.xp || 0}</div>
          <div className="text-xs text-[var(--text-muted)]">XP</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function LeaderboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [leaderboard, setLeaderboard] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = useUser()
  const { xp, str, don } = useApp()

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const data = await getLeaderboard(100)
        setLeaderboard(data)
      } catch (error) {
        console.error('Error loading leaderboard:', error)
      } finally {
        setLoading(false)
      }
    }
    loadLeaderboard()
  }, [])

  const currentUserRank = leaderboard.findIndex(u => u.user_id === user?.id) + 1

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="لوحة الصدارة" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container">
          {/* My Rank Card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="solid-card p-5 mb-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl text-white shadow-lg shadow-primary/20">
                {user?.imageUrl ? (
                  <img src={user.imageUrl} alt="" className="w-full h-full rounded-full" />
                ) : (
                  '👤'
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-extrabold text-[var(--text-primary)]">
                  {user?.firstName || 'مستخدم'}
                </h2>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-sm text-[var(--text-muted)]">
                    المركز: <span className="font-bold text-primary">{currentUserRank || '-'}</span>
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">
                    XP: <span className="font-bold text-warning">{xp}</span>
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">
                    🔥 <span className="font-bold text-error">{str}</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <h2 className="text-lg font-extrabold text-[var(--text-primary)]">🏆 التصنيف</h2>
          </motion.div>

          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="solid-card p-4 animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--bg-surface-hover)]" />
                    <div className="flex-1">
                      <div className="h-4 bg-[var(--bg-surface-hover)] rounded w-1/3 mb-2" />
                      <div className="h-3 bg-[var(--bg-surface-hover)] rounded w-1/2" />
                    </div>
                    <div className="w-16 h-8 bg-[var(--bg-surface-hover)] rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : leaderboard.length > 0 ? (
            <div className="space-y-3">
              {leaderboard.map((u, i) => (
                <LeaderboardRow
                  key={u.user_id}
                  rank={i + 1}
                  user={u}
                  isCurrentUser={u.user_id === user?.id}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">لا يوجد مستخدمين بعد</h3>
              <p className="text-sm text-[var(--text-muted)] mt-2">كن أول من يظهر في لوحة الصدارة!</p>
            </div>
          )}
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
