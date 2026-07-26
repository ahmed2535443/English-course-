'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { getCourseById, getLessonsForCourse, getLevelForCourse } from '@/data/curriculum'
import { useApp } from '@/context/AppContext'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = params.id
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { don, lessonProgress } = useApp()

  const course = getCourseById(courseId)
  const lessons = getLessonsForCourse(courseId)
  const level = getLevelForCourse(courseId)

  if (!course) {
    return (
      <div className="flex min-h-screen">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
          <TopNav title="الكورس" onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 page-container flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">❌</div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">الكورس غير موجود</h2>
              <Link href="/levels" className="btn btn-primary mt-4">
                العودة للمستويات
              </Link>
            </div>
          </main>
        </div>
        <BottomNav />
      </div>
    )
  }

  const getLessonProgress = (lesson) => {
    const completed = don.includes(lesson.id)
    const progress = lessonProgress[lesson.id]
    return { completed, score: progress?.score }
  }

  const completedCount = lessons.filter((l) => don.includes(l.id)).length
  const progressPct = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={course.name} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container">
          {/* Breadcrumb */}
          {level && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-4"
            >
              <Link
                href={`/level/${level.id}`}
                className="text-sm text-primary hover:underline"
              >
                {level.name}
              </Link>
              <span className="text-sm text-[var(--text-muted)] mx-2">←</span>
              <span className="text-sm text-[var(--text-muted)]">{course.name}</span>
            </motion.div>
          )}

          {/* Course Header */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card-strong p-5 md:p-6 mb-5"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-[var(--radius-md)] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl text-white shadow-lg shadow-primary/20 flex-shrink-0">
                📖
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-lg md:text-xl font-extrabold text-[var(--text-primary)]">{course.name}</h1>
                <p className="text-sm text-[var(--text-muted)] mt-0.5">{course.nameEn}</p>
                {course.description && (
                  <p className="text-sm text-[var(--text-muted)] mt-2">{course.description}</p>
                )}
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[var(--text-muted)]">التقدم:</span>
                    <span className="text-xs font-bold text-primary">{progressPct}%</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-[var(--text-muted)]">الدروس:</span>
                    <span className="text-xs font-bold text-success">{completedCount}/{lessons.length}</span>
                  </div>
                </div>
                <div className="progress-track mt-3 h-2">
                  <div className="progress-fill h-full" style={{ width: `${progressPct}%` }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lessons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-4"
          >
            <h2 className="text-lg font-extrabold text-[var(--text-primary)]">الدروس</h2>
          </motion.div>

          <div className="space-y-3">
            {lessons.map((lesson, i) => {
              const { completed, score } = getLessonProgress(lesson)

              return (
                <motion.div
                  key={lesson.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={`/lesson/${lesson.id}`}
                    className="group block glass-card p-4 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-[var(--radius-sm)] flex items-center justify-center text-xl group-hover:scale-105 transition-transform ${
                        completed
                          ? 'bg-success/20 text-success'
                          : 'bg-gradient-to-br from-primary/20 to-secondary/20'
                      }`}>
                        {completed ? '✅' : (lesson.icon || '📝')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            {lesson.order}
                          </span>
                          <h3 className="text-sm font-bold text-[var(--text-primary)] truncate">{lesson.title}</h3>
                        </div>
                        {lesson.titleEn && (
                          <p className="text-xs text-[var(--text-muted)] mt-1">{lesson.titleEn}</p>
                        )}
                        {completed && score !== undefined && (
                          <p className="text-xs text-success mt-1">مكتمل - النتيجة: {score}%</p>
                        )}
                        {completed && (
                          <Link
                            href={`/quiz/${lesson.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-block mt-1 text-xs text-primary hover:underline"
                          >
                            🎯 أعد الكويز
                          </Link>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-primary transition-colors">
                        ←
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {lessons.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">لا توجد دروس بعد</h3>
              <p className="text-sm text-[var(--text-muted)] mt-2">سيتم إضافة الدروس قريباً إن شاء الله</p>
            </div>
          )}

          {/* Course Completion Certificate */}
          {completedCount === lessons.length && lessons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <div className="glass-card-strong p-6 text-center border-2 border-success/30">
                <div className="text-5xl mb-3">🏆</div>
                <h3 className="text-xl font-extrabold text-success mb-2">مبروك! أكملت الكورس</h3>
                <p className="text-sm text-[var(--text-muted)] mb-4">
                  لقد أتممت جميع دروس "{course.name}" بنجاح
                </p>
                <div className="flex gap-3 justify-center">
                  {level && (
                    <Link href={`/level/${level.id}`} className="btn btn-secondary">
                      العودة للمستوى
                    </Link>
                  )}
                  <Link href="/stats" className="btn btn-primary">
                    عرض الإحصائيات
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
