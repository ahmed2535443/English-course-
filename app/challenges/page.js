'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUser } from '@clerk/nextjs'
import { getChallenges, createChallenge } from '@/lib/supabase'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'

function ChallengeCard({ challenge, isCreator }) {
  const progress = isCreator ? challenge.creator_progress : challenge.friend_progress
  const otherProgress = isCreator ? challenge.friend_progress : challenge.creator_progress
  const progressPct = Math.min(100, (progress / challenge.target) * 100)
  const otherPct = Math.min(100, (otherProgress / challenge.target) * 100)

  const typeLabels = {
    xp: 'نقاط XP',
    lessons: 'دروس',
    streak: 'أيام متتالية',
  }

  const statusColors = {
    active: 'bg-primary/10 text-primary',
    completed: 'bg-success/10 text-success',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="solid-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">⚔️</span>
          <span className="text-sm font-bold text-[var(--text-primary)]">
            تحدي {typeLabels[challenge.type]}
          </span>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColors[challenge.status]}`}>
          {challenge.status === 'active' ? 'نشط' : 'مكتمل'}
        </span>
      </div>

      <div className="space-y-4">
        {/* My Progress */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-[var(--text-muted)]">تقدمك</span>
            <span className="text-xs font-bold text-primary">{progress}/{challenge.target}</span>
          </div>
          <div className="w-full bg-[var(--bg-surface-hover)] rounded-full h-2">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Friend Progress */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-[var(--text-muted)]">تقدم الصديق</span>
            <span className="text-xs font-bold text-secondary">{otherProgress}/{challenge.target}</span>
          </div>
          <div className="w-full bg-[var(--bg-surface-hover)] rounded-full h-2">
            <div
              className="h-full rounded-full bg-secondary transition-all"
              style={{ width: `${otherPct}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t border-[var(--border-subtle)]">
        <span className="text-xs text-[var(--text-muted)]">
          الهدف: {challenge.target} {typeLabels[challenge.type]}
        </span>
        <span className="text-xs text-[var(--text-muted)]">
          ينتهي: {new Date(challenge.end_date).toLocaleDateString('ar-EG')}
        </span>
      </div>
    </motion.div>
  )
}

export default function ChallengesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [newChallenge, setNewChallenge] = useState({
    friendId: '',
    type: 'xp',
    target: 100,
    days: 7,
  })
  const { user } = useUser()

  useEffect(() => {
    async function loadChallenges() {
      if (!user?.id) return
      try {
        const data = await getChallenges(user.id)
        setChallenges(data)
      } catch (error) {
        console.error('Error loading challenges:', error)
      } finally {
        setLoading(false)
      }
    }
    loadChallenges()
  }, [user?.id])

  const handleCreateChallenge = async () => {
    if (!newChallenge.friendId.trim() || !user?.id) return
    try {
      const startDate = new Date()
      const endDate = new Date()
      endDate.setDate(endDate.getDate() + newChallenge.days)

      await createChallenge(
        user.id,
        newChallenge.friendId,
        newChallenge.type,
        newChallenge.target,
        startDate.toISOString(),
        endDate.toISOString()
      )

      const data = await getChallenges(user.id)
      setChallenges(data)
      setShowCreate(false)
      setNewChallenge({ friendId: '', type: 'xp', target: 100, days: 7 })
    } catch (error) {
      console.error('Error creating challenge:', error)
    }
  }

  const activeChallenges = challenges.filter(c => c.status === 'active')
  const completedChallenges = challenges.filter(c => c.status === 'completed')

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="تحديات" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container">
          {/* Create Challenge Button */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5"
          >
            <button
              onClick={() => setShowCreate(!showCreate)}
              className="w-full btn btn-primary py-3"
            >
              {showCreate ? 'إلغاء' : '⚔️ إنشاء تحدي جديد'}
            </button>
          </motion.div>

          {/* Create Challenge Form */}
          {showCreate && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="solid-card p-5 mb-5"
            >
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-4">إنشاء تحدي</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-1 block">معرّف الصديق</label>
                  <input
                    type="text"
                    value={newChallenge.friendId}
                    onChange={(e) => setNewChallenge({ ...newChallenge, friendId: e.target.value })}
                    placeholder="أدخل معرّف الصديق"
                    className="w-full p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-1 block">نوع التحدي</label>
                  <select
                    value={newChallenge.type}
                    onChange={(e) => setNewChallenge({ ...newChallenge, type: e.target.value })}
                    className="w-full p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-primary/50"
                  >
                    <option value="xp">نقاط XP</option>
                    <option value="lessons">دروس</option>
                    <option value="streak">أيام متتالية</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-1 block">الهدف</label>
                  <input
                    type="number"
                    value={newChallenge.target}
                    onChange={(e) => setNewChallenge({ ...newChallenge, target: parseInt(e.target.value) })}
                    className="w-full p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="text-xs text-[var(--text-muted)] mb-1 block">المدة (أيام)</label>
                  <input
                    type="number"
                    value={newChallenge.days}
                    onChange={(e) => setNewChallenge({ ...newChallenge, days: parseInt(e.target.value) })}
                    className="w-full p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-primary/50"
                  />
                </div>

                <button
                  onClick={handleCreateChallenge}
                  disabled={!newChallenge.friendId.trim()}
                  className="w-full btn btn-primary py-3"
                >
                  إنشاء التحدي
                </button>
              </div>
            </motion.div>
          )}

          {/* Active Challenges */}
          <div className="mb-5">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
              التحديات النشطة ({activeChallenges.length})
            </h3>
            {loading ? (
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div key={i} className="solid-card p-5 animate-pulse">
                    <div className="h-4 bg-[var(--bg-surface-hover)] rounded w-1/3 mb-4" />
                    <div className="space-y-3">
                      <div className="h-3 bg-[var(--bg-surface-hover)] rounded" />
                      <div className="h-3 bg-[var(--bg-surface-hover)] rounded" />
                    </div>
                  </div>
                ))}
              </div>
            ) : activeChallenges.length > 0 ? (
              <div className="space-y-3">
                {activeChallenges.map((challenge) => (
                  <ChallengeCard
                    key={challenge.id}
                    challenge={challenge}
                    isCreator={challenge.creator_id === user?.id}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">⚔️</div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">لا توجد تحديات نشطة</h3>
                <p className="text-sm text-[var(--text-muted)] mt-2">أضف صديقاً وابدأ تحدياً!</p>
              </div>
            )}
          </div>

          {/* Completed Challenges */}
          {completedChallenges.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
                التحديات المكتملة ({completedChallenges.length})
              </h3>
              <div className="space-y-3">
                {completedChallenges.map((challenge) => (
                  <ChallengeCard
                    key={challenge.id}
                    challenge={challenge}
                    isCreator={challenge.creator_id === user?.id}
                  />
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
