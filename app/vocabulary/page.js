'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { LESSONS } from '@/data/lessons'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import WordCard from '@/components/WordCard'
import WordSearch from '@/components/WordSearch'
import Link from 'next/link'

export default function VocabularyPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [selectedLesson, setSelectedLesson] = useState('all')
  const { srs, don } = useApp()

  const allWords = useMemo(() => {
    const words = []
    for (const lesson of LESSONS) {
      if (lesson.voc) {
        for (const voc of lesson.voc) {
          const srsData = srs?.find(w => w.en === voc.e)
          words.push({
            ...voc,
            lessonId: lesson.id,
            lessonTitle: lesson.t,
            srsLevel: srsData?.l || 0,
            lastReview: srsData?.nx ? new Date(srsData.nx - 86400000 * (6 - (srsData.l || 0))).toISOString() : null,
          })
        }
      }
    }
    return words
  }, [srs])

  const filteredWords = useMemo(() => {
    return allWords.filter(word => {
      const matchesSearch = search === '' || 
        word.en.toLowerCase().includes(search.toLowerCase()) ||
        word.ar.includes(search)

      let matchesFilter = true
      if (filter === 'mastered') matchesFilter = word.srsLevel >= 5
      else if (filter === 'learning') matchesFilter = word.srsLevel >= 3 && word.srsLevel < 5
      else if (filter === 'new') matchesFilter = word.srsLevel < 3

      const matchesLesson = selectedLesson === 'all' || word.lessonId === parseInt(selectedLesson)

      return matchesSearch && matchesFilter && matchesLesson
    })
  }, [allWords, search, filter, selectedLesson])

  const stats = useMemo(() => {
    const mastered = allWords.filter(w => w.srsLevel >= 5).length
    const learning = allWords.filter(w => w.srsLevel >= 3 && w.srsLevel < 5).length
    const newWords = allWords.filter(w => w.srsLevel < 3).length
    return { all: allWords.length, mastered, learning, new: newWords }
  }, [allWords])

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="قائمة المفردات" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-4 gap-2 mb-5"
          >
            <div className="solid-card p-3 text-center">
              <div className="text-lg font-extrabold text-primary">{stats.all}</div>
              <div className="text-xs text-[var(--text-muted)]">الكل</div>
            </div>
            <div className="solid-card p-3 text-center">
              <div className="text-lg font-extrabold text-success">{stats.mastered}</div>
              <div className="text-xs text-[var(--text-muted)]">مُتقَنة</div>
            </div>
            <div className="solid-card p-3 text-center">
              <div className="text-lg font-extrabold text-warning">{stats.learning}</div>
              <div className="text-xs text-[var(--text-muted)]">تتعلمها</div>
            </div>
            <div className="solid-card p-3 text-center">
              <div className="text-lg font-extrabold text-error">{stats.new}</div>
              <div className="text-xs text-[var(--text-muted)]">جديدة</div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5"
          >
            <WordSearch
              value={search}
              onChange={setSearch}
              filter={filter}
              onFilterChange={setFilter}
              categoryFilter={categoryFilter}
              onCategoryFilterChange={setCategoryFilter}
              stats={stats}
            />
          </motion.div>

          {/* Lesson Filter */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-5"
          >
            <select
              value={selectedLesson}
              onChange={(e) => setSelectedLesson(e.target.value)}
              className="w-full p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-primary/50"
            >
              <option value="all">جميع الدروس</option>
              {LESSONS.map(lesson => (
                <option key={lesson.id} value={lesson.id}>{lesson.t}</option>
              ))}
            </select>
          </motion.div>

          {/* Words List */}
          <div className="space-y-3">
            {filteredWords.length > 0 ? (
              filteredWords.map((word, i) => (
                <motion.div
                  key={`${word.en}-${word.lessonId}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * Math.min(i, 10) }}
                >
                  <WordCard word={word} />
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {search ? 'لا توجد نتائج' : 'لا توجد كلمات بعد'}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-2">
                  {search ? 'جرب البحث بكلمات مختلفة' : 'ابدأ بالدروس لجمع المفردات'}
                </p>
                {!search && (
                  <Link href="/" className="btn btn-primary mt-4 inline-block">
                    ابدأ التعلم
                  </Link>
                )}
              </div>
            )}
          </div>

          {filteredWords.length > 0 && (
            <div className="text-center mt-5">
              <p className="text-xs text-[var(--text-muted)]">
                عرض {filteredWords.length} من {allWords.length} كلمة
              </p>
            </div>
          )}
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
