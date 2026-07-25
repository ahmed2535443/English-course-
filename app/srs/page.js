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

  useEffect(() => { buildSRS() }, [buildSRS])

  const dueCount = srs ? srs.filter((w) => w.nx <= Date.now()).length : 0
  const currentWord = words[currentIndex]

  const startReview = () => {
    const due = srs.filter((w) => w.nx <= Date.now()).slice(0, 10)
    if (due.length === 0) {
      setModalData({ emoji: '🧠', title: 'لا توجد كلمات', desc: 'كل الكلمات محفوظة! حاول مرة تانية بعد شوية.' })
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
    if (globalIndex !== -1) rateSRS(globalIndex, level)
    if (level > 0) addXP(level === 2 ? 5 : 3)

    if (currentIndex + 1 >= words.length) {
      setModalData({ emoji: '🧠', title: 'أكملت المراجعة!', desc: `راجعت ${words.length} كلمة` })
      setShowModal(true)
      setStarted(false)
    } else {
      setCurrentIndex(currentIndex + 1)
      setRevealed(false)
    }
  }

  const StartScreen = () => (
    <div className="flex-1 page-container flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card-strong p-8 text-center max-w-sm w-full"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-5xl mb-4"
        >
          🧠
        </motion.div>
        <h1 className="text-xl font-extrabold text-[var(--text-primary)] mb-2">مراجعة ذكية</h1>
        <p className="text-sm text-[var(--text-muted)] mb-4">
          راجع الكلمات اللي تحتاج تكرار باستخدام نظام المراجعة المتباعدة
        </p>
        <div className="text-sm text-[var(--text-muted)] mb-5">{dueCount} كلمة تحتاج مراجعة</div>
        <button onClick={startReview} className="btn btn-primary w-full py-3.5 text-[15px]">
          ابدأ المراجعة
        </button>
      </motion.div>
    </div>
  )

  const ReviewScreen = () => (
    <main className="flex-1 page-container max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-3">
        <button onClick={() => setStarted(false)} className="text-sm text-primary font-semibold hover:underline">← خروج</button>
        <div className="text-sm text-[var(--text-muted)] font-semibold">{currentIndex + 1}/{words.length}</div>
      </div>

      <div className="progress-track mb-5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex) / words.length) * 100}%` }}
          className="progress-fill"
        />
      </div>

      <AnimatePresence mode="wait">
        {currentWord && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            className="glass-card-strong p-8 text-center"
          >
            <div className="text-2xl font-extrabold direction-ltr mb-3 text-[var(--text-primary)]">{currentWord.e}</div>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => speak(currentWord.e)}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/25"
            >
              🔊
            </motion.button>

            {!revealed ? (
              <>
                <div className="text-sm text-[var(--text-muted)] mb-4">اضغط للإظهار</div>
                <button
                  onClick={() => { setRevealed(true); speak(currentWord.e) }}
                  className="btn btn-primary w-full py-3.5 text-[15px]"
                >
                  إظهار الترجمة
                </button>
              </>
            ) : (
              <>
                <div className="text-xl font-bold text-primary mb-5">{currentWord.a}</div>
                <div className="flex gap-2">
                  <button onClick={() => handleRate(2)} className="flex-1 py-3 border-2 border-success text-success rounded-[var(--radius-md)] font-bold text-sm hover:bg-success/10 transition-all">
                    ✅ سهل +5
                  </button>
                  <button onClick={() => handleRate(1)} className="flex-1 py-3 border-2 border-warning text-warning rounded-[var(--radius-md)] font-bold text-sm hover:bg-warning/10 transition-all">
                    🤔 متوسط +3
                  </button>
                  <button onClick={() => handleRate(0)} className="flex-1 py-3 border-2 border-error text-error rounded-[var(--radius-md)] font-bold text-sm hover:bg-error/10 transition-all">
                    ❌ صعب
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 lg:mr-[260px] flex flex-col min-h-screen">
        <TopNav title="مراجعة ذكية" onMenuClick={() => setSidebarOpen(true)} />
        {started ? <ReviewScreen /> : <StartScreen />}
      </div>
      <BottomNav />
      <Modal
        show={showModal}
        emoji={modalData.emoji}
        title={modalData.title}
        description={modalData.desc}
        onClose={() => { setShowModal(false); router.push('/') }}
      />
    </div>
  )
}
