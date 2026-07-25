'use client'
import { use, useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { LESSONS } from '@/data/lessons'
import { getCourseForLesson, getLevelForCourse } from '@/data/curriculum'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Link from 'next/link'

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function QuestionCard({ question, index, total, onAnswer, answered, selectedAnswer }) {
  const [localAnswer, setLocalAnswer] = useState(null)
  const [textInput, setTextInput] = useState('')
  const [matchSelected, setMatchSelected] = useState([])

  const handleSubmit = () => {
    if (question.tp === 'mcq' || question.tp === 'listen') {
      if (localAnswer !== null) onAnswer(localAnswer)
    } else if (question.tp === 'fill') {
      if (textInput.trim()) onAnswer(textInput.trim())
    } else if (question.tp === 'reorder') {
      onAnswer(localAnswer || [])
    } else if (question.tp === 'translate' || question.tp === 'egpt' || question.tp === 'usage') {
      if (textInput.trim()) onAnswer(textInput.trim())
    } else if (question.tp === 'match') {
      onAnswer(matchSelected)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="solid-card"
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
            سؤال {index + 1} / {total}
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            {question.tp === 'mcq' && 'اختيار من متعدد'}
            {question.tp === 'fill' && 'ملء الفراغ'}
            {question.tp === 'reorder' && 'ترتيب الكلمات'}
            {question.tp === 'match' && 'تطابق'}
            {question.tp === 'translate' && 'ترجمة'}
            {question.tp === 'listen' && 'استماع'}
            {question.tp === 'egpt' && 'مصري'}
            {question.tp === 'usage' && 'استخدام'}
          </span>
        </div>

        <h3 className="text-base font-bold text-[var(--text-primary)] mb-4">{question.q}</h3>

        {question.tp === 'mcq' && (
          <div className="space-y-2">
            {question.o.map((opt, i) => (
              <button
                key={i}
                onClick={() => !answered && setLocalAnswer(i)}
                disabled={answered}
                className={`w-full text-start p-3 rounded-[var(--radius-md)] border transition-all ${
                  answered
                    ? i === question.c
                      ? 'bg-success/10 border-success/30 text-success'
                      : i === selectedAnswer
                        ? 'bg-error/10 border-error/30 text-error'
                        : 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)] opacity-50'
                    : localAnswer === i
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)] hover:border-primary/30'
                }`}
              >
                <span className="text-sm">{opt}</span>
              </button>
            ))}
          </div>
        )}

        {question.tp === 'fill' && (
          <div>
            <input
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={answered}
              placeholder={question.q.replace('________', '...')}
              className="w-full p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary/50 direction-ltr text-center text-lg font-bold"
              onKeyDown={(e) => e.key === 'Enter' && !answered && textInput.trim() && onAnswer(textInput.trim())}
            />
            {answered && (
              <div className="mt-2 text-center text-sm font-bold text-success">
                الإجابة الصحيحة: {question.an}
              </div>
            )}
          </div>
        )}

        {question.tp === 'reorder' && (
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {question.w.map((word, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (answered) return
                    const newOrder = localAnswer || []
                    if (newOrder.includes(word)) {
                      setLocalAnswer(newOrder.filter(w => w !== word))
                    } else {
                      setLocalAnswer([...newOrder, word])
                    }
                  }}
                  disabled={answered}
                  className={`px-4 py-2 rounded-[var(--radius-sm)] border text-sm font-bold direction-ltr transition-all ${
                    (localAnswer || []).includes(word)
                      ? 'bg-primary text-white border-primary'
                      : 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-primary/30'
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
            <div className="bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-3 min-h-[48px] direction-ltr text-center">
              {(localAnswer || []).length > 0 ? (
                <span className="text-sm font-bold text-primary">{(localAnswer || []).join(' ')}</span>
              ) : (
                <span className="text-xs text-[var(--text-muted)]">اضغط على الكلمات لترتيبها</span>
              )}
            </div>
          </div>
        )}

        {question.tp === 'match' && (
          <div className="space-y-2">
            {question.p.map((pair, i) => (
              <button
                key={i}
                onClick={() => {
                  if (answered) return
                  if (matchSelected.includes(i)) {
                    setMatchSelected(matchSelected.filter(x => x !== i))
                  } else {
                    setMatchSelected([...matchSelected, i])
                  }
                }}
                disabled={answered}
                className={`w-full flex items-center justify-between p-3 rounded-[var(--radius-md)] border transition-all ${
                  answered
                    ? 'bg-success/10 border-success/30'
                    : matchSelected.includes(i)
                      ? 'bg-primary/10 border-primary/30'
                      : 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)] hover:border-primary/30'
                }`}
              >
                <span className="text-sm font-bold direction-ltr text-[var(--text-primary)]">{pair[0]}</span>
                <span className="text-sm text-[var(--text-muted)]">←</span>
                <span className="text-sm font-bold text-primary">{pair[1]}</span>
              </button>
            ))}
          </div>
        )}

        {(question.tp === 'translate' || question.tp === 'egpt' || question.tp === 'usage') && (
          <div>
            {question.hint && (
              <div className="text-xs text-[var(--text-muted)] mb-2">💡 {question.hint}</div>
            )}
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              disabled={answered}
              placeholder={question.ph || 'اكتب إجابتك هنا...'}
              className="w-full p-3 rounded-[var(--radius-md)] bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-primary/50 direction-ltr text-sm min-h-[80px] resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.ctrlKey && !answered && textInput.trim()) {
                  onAnswer(textInput.trim())
                }
              }}
            />
            {answered && question.an && (
              <div className="mt-2 text-sm font-bold text-success">
                الإجابة المقترحة: {question.an}
              </div>
            )}
          </div>
        )}

        {question.tp === 'listen' && (
          <div className="space-y-2">
            <div className="bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-3 text-center">
              <span className="text-sm font-bold direction-ltr text-primary">{question.en}</span>
            </div>
            {question.o.map((opt, i) => (
              <button
                key={i}
                onClick={() => !answered && setLocalAnswer(i)}
                disabled={answered}
                className={`w-full text-start p-3 rounded-[var(--radius-md)] border transition-all ${
                  answered
                    ? i === question.c
                      ? 'bg-success/10 border-success/30 text-success'
                      : i === selectedAnswer
                        ? 'bg-error/10 border-error/30 text-error'
                        : 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)] opacity-50'
                    : localAnswer === i
                      ? 'bg-primary/10 border-primary/30 text-primary'
                      : 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)] hover:border-primary/30'
                }`}
              >
                <span className="text-sm">{opt}</span>
              </button>
            ))}
          </div>
        )}

        {!answered && (
          <button
            onClick={handleSubmit}
            disabled={
              (question.tp === 'mcq' || question.tp === 'listen') && localAnswer === null ||
              question.tp === 'fill' && !textInput.trim() ||
              question.tp === 'reorder' && (!localAnswer || localAnswer.length === 0) ||
              question.tp === 'match' && matchSelected.length === 0 ||
              (question.tp === 'translate' || question.tp === 'egpt' || question.tp === 'usage') && !textInput.trim()
            }
            className="w-full mt-4 btn btn-primary py-3"
          >
            تأكيد الإجابة
          </button>
        )}
      </div>
    </motion.div>
  )
}

function QuizResults({ score, total, lesson, onRetry, onNextLesson }) {
  const percentage = Math.round((score / total) * 100)
  const isPassed = percentage >= 60

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="solid-card"
    >
      <div className="p-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 ${
            isPassed ? 'bg-success/10' : 'bg-error/10'
          }`}
        >
          {isPassed ? '🎉' : '📚'}
        </motion.div>

        <h2 className="text-2xl font-extrabold text-[var(--text-primary)] mb-2">
          {isPassed ? 'مبروك!' : 'حاول مرة تانية'}
        </h2>

        <p className="text-sm text-[var(--text-muted)] mb-4">
          {isPassed
            ? 'أحسنت! لقد أجبت بشكل ممتاز'
            : 'محتاج تراجع الدرس وتحاول تاني'}
        </p>

        <div className="bg-[var(--bg-surface-hover)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4 mb-4">
          <div className="text-4xl font-extrabold text-primary mb-1">{score}/{total}</div>
          <div className="text-sm text-[var(--text-muted)]">{percentage}%</div>
        </div>

        <div className="flex gap-3">
          <button onClick={onRetry} className="flex-1 btn btn-secondary py-3">
            حاول تاني
          </button>
          {isPassed && onNextLesson && (
            <button onClick={onNextLesson} className="flex-1 btn btn-primary py-3">
              الدرس الجاي ←
            </button>
          )}
        </div>

        {!isPassed && (
          <Link href={`/lesson/${lesson.id}`} className="block mt-3 text-primary text-sm font-bold hover:underline">
            راجع الدرس الأول
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default function QuizPage({ params }) {
  const { id } = use(params)
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { saveQuizAttempt, completeLesson, don } = useApp()

  const lessonId = parseInt(id)
  const lesson = LESSONS.find(l => l.id === lessonId)
  const course = lesson ? getCourseForLesson(lessonId) : null
  const level = course ? getLevelForCourse(course.id) : null

  const [questions, setQuestions] = useState([])
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    if (lesson && lesson.ex && lesson.ex.length > 0) {
      const shuffled = shuffleArray(lesson.ex)
      setQuestions(shuffled.slice(0, Math.min(10, shuffled.length)))
    }
  }, [lesson])

  const handleAnswer = useCallback((answer) => {
    if (answered) return

    setAnswered(true)
    setSelectedAnswer(answer)

    const isCorrect = (() => {
      const q = questions[currentQ]
      if (q.tp === 'mcq' || q.tp === 'listen') {
        return answer === q.c
      }
      if (q.tp === 'fill') {
        return answer.toLowerCase() === q.an.toLowerCase()
      }
      if (q.tp === 'reorder') {
        return answer.join(' ') === q.a
      }
      if (q.tp === 'translate' || q.tp === 'egpt') {
        const userAns = answer.toLowerCase().replace(/[^\w\s]/g, '').trim()
        const correctAns = q.an.toLowerCase().replace(/[^\w\s]/g, '').trim()
        return userAns.includes(correctAns) || correctAns.includes(userAns)
      }
      return true
    })()

    if (isCorrect) setScore(s => s + 1)

    setAnswers(prev => [...prev, {
      question: questions[currentQ],
      userAnswer: answer,
      isCorrect
    }])

    setTimeout(() => {
      if (currentQ + 1 < questions.length) {
        setCurrentQ(c => c + 1)
        setAnswered(false)
        setSelectedAnswer(null)
      } else {
        const finalScore = score + (isCorrect ? 1 : 0)
        saveQuizAttempt({
          lessonId,
          score: finalScore,
          total: questions.length,
          date: new Date().toISOString()
        })
        if (!don.includes(lessonId)) {
          completeLesson(lessonId)
        }
        setShowResults(true)
      }
    }, 1500)
  }, [answered, currentQ, questions, score, lessonId, don, completeLesson, saveQuizAttempt])

  const handleRetry = () => {
    const shuffled = shuffleArray(lesson.ex)
    setQuestions(shuffled.slice(0, Math.min(10, shuffled.length)))
    setCurrentQ(0)
    setScore(0)
    setAnswers([])
    setAnswered(false)
    setSelectedAnswer(null)
    setShowResults(false)
  }

  const handleNextLesson = () => {
    const allLessons = LESSONS.filter(l => don.includes(l.id) || l.id === lessonId)
    const currentIndex = allLessons.findIndex(l => l.id === lessonId)
    if (currentIndex < allLessons.length - 1) {
      router.push(`/lesson/${allLessons[currentIndex + 1].id}`)
    } else {
      if (course) router.push(`/course/${course.id}`)
      else router.push('/')
    }
  }

  if (!lesson) {
    return (
      <div className="flex min-h-screen">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
          <TopNav title="كويز" onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 page-container pb-32 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">❓</div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">الدرس غير موجود</h2>
              <Link href="/" className="btn btn-primary mt-4">الرئيسية</Link>
            </div>
          </main>
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title={`كويز: ${lesson.t}`} onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container pb-32">
          {level && course && (
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-4">
              <Link href={`/level/${level.id}`} className="hover:text-primary">{level.name}</Link>
              <span>←</span>
              <Link href={`/course/${course.id}`} className="hover:text-primary">{course.name}</Link>
              <span>←</span>
              <span className="text-[var(--text-primary)]">{lesson.t}</span>
            </div>
          )}

          {showResults ? (
            <QuizResults
              score={score}
              total={questions.length}
              lesson={lesson}
              onRetry={handleRetry}
              onNextLesson={handleNextLesson}
            />
          ) : questions.length > 0 ? (
            <>
              <div className="progress-track h-2 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                  className="progress-fill h-full"
                />
              </div>

              <AnimatePresence mode="wait">
                <QuestionCard
                  key={currentQ}
                  question={questions[currentQ]}
                  index={currentQ}
                  total={questions.length}
                  onAnswer={handleAnswer}
                  answered={answered}
                  selectedAnswer={selectedAnswer}
                />
              </AnimatePresence>

              {answered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-3 rounded-[var(--radius-md)] text-center text-sm font-bold ${
                    answers[answers.length - 1]?.isCorrect
                      ? 'bg-success/10 text-success'
                      : 'bg-error/10 text-error'
                  }`}
                >
                  {answers[answers.length - 1]?.isCorrect ? '✅ إجابة صحيحة!' : '❌ إجابة خاطئة'}
                </motion.div>
              )}
            </>
          ) : (
            <div className="text-center py-10">
              <div className="text-4xl mb-4">📝</div>
              <p className="text-[var(--text-muted)]">لا توجد أسئلة在这个 الدرس</p>
            </div>
          )}
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
