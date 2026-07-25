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

          <main className="flex-1 p-4 md:p-6 max-w-[800px] w-full mx-auto pb-24 lg:pb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-neutral-900 border-2 border-secondary rounded-2xl p-8 text-center"
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

        <main className="flex-1 p-4 md:p-6 max-w-[800px] w-full mx-auto pb-24 lg:pb-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setStarted(false)} className="text-primary text-sm font-semibold">
              ← خروج
            </button>
            <div className="text-sm text-neutral-500 font-semibold">
              {currentIndex + 1}/{words.length}
            </div>
          </div>

          {/* Progress */}
          <div className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full mb-6 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex) / words.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
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
                className="bg-white dark:bg-neutral-900 border-2 border-secondary rounded-2xl p-8 text-center"
              >
                <div className="text-2xl font-extrabold direction-ltr mb-2">{currentWord.e}</div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => speak(currentWord.e)}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light text-white text-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/25"
                >
                  🔊
                </motion.button>

                {!revealed ? (
                  <>
                    <div className="text-lg text-neutral-400 mb-5">اضغط للإظهار</div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setRevealed(true)
                        speak(currentWord.e)
                      }}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-[15px] hover:shadow-lg transition-all"
                    >
                      إظهار الترجمة
                    </motion.button>
                  </>
                ) : (
                  <>
                    <div className="text-xl font-bold text-primary mb-6">{currentWord.a}</div>
                    <div className="flex gap-2.5">
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRate(2)}
                        className="flex-1 py-3 border-2 border-success text-success rounded-xl font-bold text-sm hover:bg-success hover:text-white transition-all"
                      >
                        ✅ سهل +5XP
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRate(1)}
                        className="flex-1 py-3 border-2 border-warning text-warning rounded-xl font-bold text-sm hover:bg-warning hover:text-white transition-all"
                      >
                        🤔 متوسط +3XP
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRate(0)}
                        className="flex-1 py-3 border-2 border-error text-error rounded-xl font-bold text-sm hover:bg-error hover:text-white transition-all"
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
