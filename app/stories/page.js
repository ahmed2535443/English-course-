'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { STORIES } from '@/data/stories'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

function StoryCard({ story, index }) {
  const { don } = useApp()
  const isCompleted = don.includes(`story-${story.id}`)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index }}
    >
      <Link
        href={`/story/${story.id}`}
        className="group block solid-card hover:shadow-lg transition-all duration-200"
      >
        <div className="p-4">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center text-2xl group-hover:scale-105 transition-transform ${
              isCompleted
                ? 'bg-success/20'
                : 'bg-gradient-to-br from-primary/20 to-secondary/20'
            }`}>
              {story.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-[var(--text-primary)] truncate">{story.title}</h3>
                {isCompleted && <span className="text-success text-sm">✅</span>}
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-0.5 direction-ltr">{story.titleEn}</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">{story.description}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{story.difficulty}</span>
                <span className="text-xs text-[var(--text-muted)]">⏱️ {story.duration}</span>
                <span className="text-xs text-warning font-bold">⭐ {story.xp} XP</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function StoriesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [difficulty, setDifficulty] = useState('all')
  const { don } = useApp()

  const filteredStories = difficulty === 'all'
    ? STORIES
    : STORIES.filter(s => s.difficulty === difficulty)

  const completedCount = STORIES.filter(s => don.includes(`story-${s.id}`)).length

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="القصص" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="solid-card p-5 mb-5"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-[var(--radius-md)] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl text-white shadow-lg shadow-primary/20">
                📚
              </div>
              <div className="flex-1">
                <h1 className="text-lg font-extrabold text-[var(--text-primary)]">القصص التفاعلية</h1>
                <p className="text-sm text-[var(--text-muted)] mt-0.5">اقرأ قصصاً قصيرة وتعلم الإنجليزية</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-success font-bold">{completedCount}/{STORIES.length} مكتملة</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Difficulty Filter */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-2 mb-5"
          >
            {[
              { id: 'all', label: 'الكل' },
              { id: 'A1', label: 'A1 سهل' },
              { id: 'A2', label: 'A2 متوسط' },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setDifficulty(d.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  difficulty === d.id
                    ? 'bg-primary text-white'
                    : 'bg-[var(--bg-surface-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {d.label}
              </button>
            ))}
          </motion.div>

          {/* Stories List */}
          <div className="space-y-3">
            {filteredStories.map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">لا توجد قصص</h3>
              <p className="text-sm text-[var(--text-muted)] mt-2">قريباً إن شاء الله</p>
            </div>
          )}
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
