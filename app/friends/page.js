'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUser } from '@clerk/nextjs'
import { getFriends, addFriend, acceptFriend } from '@/lib/supabase'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'

function FriendCard({ friend, type, onAccept }) {
  const statusColors = {
    pending: 'bg-warning/10 text-warning',
    accepted: 'bg-success/10 text-success',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="solid-card p-4"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-xl">
          👤
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-[var(--text-primary)]">
            صديق
          </div>
          <div className="text-xs text-[var(--text-muted)] mt-0.5">
            {type === 'received' ? 'طلب صداقة وارد' : 'طلب صداقة صادر'}
          </div>
        </div>
        <div>
          {type === 'received' && (
            <button
              onClick={() => onAccept(friend.user_id)}
              className="btn btn-primary py-1.5 px-3 text-xs"
            >
              قبول
            </button>
          )}
          {type === 'sent' && (
            <span className="text-xs text-warning font-semibold">بانتظار</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function FriendsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)
  const [friendId, setFriendId] = useState('')
  const [searching, setSearching] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    async function loadFriends() {
      if (!user?.id) return
      try {
        const data = await getFriends(user.id)
        setFriends(data)
      } catch (error) {
        console.error('Error loading friends:', error)
      } finally {
        setLoading(false)
      }
    }
    loadFriends()
  }, [user?.id])

  const handleAddFriend = async () => {
    if (!friendId.trim() || !user?.id) return
    setSearching(true)
    try {
      await addFriend(user.id, friendId)
      setFriendId('')
      const data = await getFriends(user.id)
      setFriends(data)
    } catch (error) {
      console.error('Error adding friend:', error)
    } finally {
      setSearching(false)
    }
  }

  const handleAcceptFriend = async (friendId) => {
    if (!user?.id) return
    try {
      await acceptFriend(user.id, friendId)
      const data = await getFriends(user.id)
      setFriends(data)
    } catch (error) {
      console.error('Error accepting friend:', error)
    }
  }

  const receivedRequests = friends.filter(f => f.friend_id === user?.id && f.status === 'pending')
  const sentRequests = friends.filter(f => f.user_id === user?.id && f.status === 'pending')
  const acceptedFriends = friends.filter(f => f.status === 'accepted')

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="أصدقائي" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          {/* Add Friend */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="solid-card p-5 mb-5"
          >
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">إضافة صديق</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={friendId}
                onChange={(e) => setFriendId(e.target.value)}
                placeholder="أدخل معرّف المستخدم"
                className="flex-1 p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-primary/50"
              />
              <button
                onClick={handleAddFriend}
                disabled={!friendId.trim() || searching}
                className="btn btn-primary py-3 px-4"
              >
                {searching ? '...' : 'إضافة'}
              </button>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-2">
              معرّف المستخدم: {user?.id?.slice(0, 16)}...
            </p>
          </motion.div>

          {/* Received Requests */}
          {receivedRequests.length > 0 && (
            <div className="mb-5">
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
                طلبات صداقة واردة ({receivedRequests.length})
              </h3>
              <div className="space-y-3">
                {receivedRequests.map((friend) => (
                  <FriendCard
                    key={friend.user_id}
                    friend={friend}
                    type="received"
                    onAccept={handleAcceptFriend}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sent Requests */}
          {sentRequests.length > 0 && (
            <div className="mb-5">
              <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
                طلبات صداقة صادة ({sentRequests.length})
              </h3>
              <div className="space-y-3">
                {sentRequests.map((friend) => (
                  <FriendCard
                    key={friend.friend_id}
                    friend={friend}
                    type="sent"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Friends List */}
          <div className="mb-5">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-3">
              أصدقائي ({acceptedFriends.length})
            </h3>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="solid-card p-4 animate-pulse">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--bg-surface-hover)]" />
                      <div className="flex-1">
                        <div className="h-4 bg-[var(--bg-surface-hover)] rounded w-1/3 mb-2" />
                        <div className="h-3 bg-[var(--bg-surface-hover)] rounded w-1/2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : acceptedFriends.length > 0 ? (
              <div className="space-y-3">
                {acceptedFriends.map((friend) => (
                  <FriendCard
                    key={friend.friend_id}
                    friend={friend}
                    type="accepted"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">لا يوجد أصدقاء بعد</h3>
                <p className="text-sm text-[var(--text-muted)] mt-2">أضف أصدقاء لمتابعة تقدمهم</p>
              </div>
            )}
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
