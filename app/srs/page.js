'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/context/AppContext'
import { useSpeech } from '@/hooks/useSpeech'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import BottomNav from '@/components/BottomNav'
import Modal from '@/components/Modal'

export default function SRSPage() {
  const router = useRouter()
  const { srs, rateSRS, addXP, buildSRS } = useApp()
  const { speak } = useSpeech()

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [words, setWords] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({ emoji: '', title: '', desc: '' })
  const [started, setStarted] = useState(false)

  useEffect(() => {
    buildSRS()
  }, [buildSRS])

  const startReview = () => {
    const due = srs.filter((w) => w.nx <= Date.now()).slice(0, 10)
    if (due.length === 0) {
      setModalData({
        emoji: '🧠',
        title: 'لا توجد كلمات',
        desc: 'كل الكلمات محفوظة! حاول مرة تانية بعد شوية.',
      })
      setShowModal(true)
      return
    }
    setWords(due)
    setCurrentIndex(0)
    setRevealed(false)
    setStarted(true)
  }

  const handleRate = (level) => {
    const word = words[currentIndex]
    const globalIndex = srs.findIndex((w) => w.e === word.e)
    if (globalIndex !== -1) {
      rateSRS(globalIndex, level)
    }
    if (level > 0) {
      const amount = level === 2 ? 5 : 3
      addXP(amount)
    }

    if (currentIndex + 1 >= words.length) {
      setModalData({
        emoji: '🧠',
        title: 'أكملت المراجعة!',
        desc: `راجعت ${words.length} كلمة`,
      })
      setShowModal(true)
      setStarted(false)
    } else {
      setCurrentIndex(currentIndex + 1)
      setRevealed(false)
    }
  }

  const currentWord = words[currentIndex]

  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0

  if (!started) {
    return (
      <div className="flex min-h-screen">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
          <TopNav title="مراجعة ذكية" onMenuClick={() => setSidebarOpen(true)} />

          <main className="flex-1 page-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card p-8 text-center max-w-lg mx-auto"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                🧠
              </motion.div>
              <h1 className="text-2xl font-extrabold mb-2">مراجعة ذكية</h1>
              <p className="text-sm text-neutral-500 mb-6">
                راجع الكلمات اللي تحتاج تكرار باستخدام نظام المراجعة المتباعدة
              </p>
              <div className="text-sm text-neutral-500 mb-4">{dueCount} كلمة تحتاج مراجعة</div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={startReview}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-[15px] hover:shadow-lg transition-all"
              >
                ابدأ المراجعة
              </motion.button>
            </motion.div>
          </main>
        </div>

        <BottomNav />

        <Modal
          show={showModal}
          emoji={modalData.emoji}
          title={modalData.title}
          description={modalData.desc}
          onClose={() => {
            setShowModal(false)
            router.push('/')
          }}
        />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="مراجعة ذكية" onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 page-container max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setStarted(false)} className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:underline">
              ← خروج
            </button>
            <div className="text-sm text-slate-500 dark:text-slate-400 font-semibold">
              {currentIndex + 1}/{words.length}
            </div>
          </div>

          {/* Progress */}
          <div className="w-full h-2 bg-slate-200/80 dark:bg-slate-700/50 rounded-full mb-6 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex) / words.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
          </div>

          {/* Word card */}
          <AnimatePresence mode="wait">
            {currentWord && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="card p-8 text-center"
              >
                <div className="text-2xl font-extrabold direction-ltr mb-2 text-slate-800 dark:text-slate-100">{currentWord.e}</div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => speak(currentWord.e)}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo-500/25"
                >
                  🔊
                </motion.button>

                {!revealed ? (
                  <>
                    <div className="text-lg text-slate-400 dark:text-slate-500 mb-5">اضغط للإظهار</div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setRevealed(true)
                        speak(currentWord.e)
                      }}
                      className="w-full py-3.5 rounded-2xl btn-primary text-[15px]"
                    >
                      إظهار الترجمة
                    </motion.button>
                  </>
                ) : (
                  <>
                    <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">{currentWord.a}</div>
                    <div className="flex gap-2.5">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRate(2)}
                        className="flex-1 py-3 border-2 border-emerald-400 text-emerald-600 dark:text-emerald-400 rounded-xl font-bold text-sm hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all"
                      >
                        ✅ سهل +5XP
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRate(1)}
                        className="flex-1 py-3 border-2 border-amber-400 text-amber-600 dark:text-amber-400 rounded-xl font-bold text-sm hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-all"
                      >
                        🤔 متوسط +3XP
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRate(0)}
                        className="flex-1 py-3 border-2 border-red-400 text-red-600 dark:text-red-400 rounded-xl font-bold text-sm hover:bg-red-50 dark:hover:bg-red-500/10 transition-all"
                      >
                        ❌ صعب
                      </motion.button>
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      <BottomNav />

      <Modal
        show={showModal}
        emoji={modalData.emoji}
        title={modalData.title}
        description={modalData.desc}
        onClose={() => {
          setShowModal(false)
          router.push('/')
        }}
      />
    </div>
  )
}
