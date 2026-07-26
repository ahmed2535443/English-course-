'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/context/AppContext'

const STEPS = [
  {
    id: 1,
    icon: "👋",
    title: "مرحباً بك!",
    titleEn: "Welcome!",
    description: "تطبيق ZAmericanEnglish لتعلم الإنجليزية بالطريقة الأمريكية",
    gradient: "from-primary to-secondary",
  },
  {
    id: 2,
    icon: "🎯",
    title: "ما هدفك من تعلم الإنجليزية؟",
    titleEn: "What's your goal?",
    description: "اختر هدفك لتقديم تجربة تعلم مخصصة",
    options: [
      { id: "travel", icon: "✈️", label: "سفر وسياحة", labelEn: "Travel & Tourism" },
      { id: "work", icon: "💼", label: "عمل وأعمال", labelEn: "Work & Business" },
      { id: "study", icon: "📚", label: "دراسة", labelEn: "Study" },
      { id: "hobby", icon: "🎮", label: "هواية", labelEn: "Hobby" },
    ],
    gradient: "from-secondary to-accent",
  },
  {
    id: 3,
    icon: "⏰",
    title: "كم ساعة تقدر تتعلم يومياً؟",
    titleEn: "How much time can you spend daily?",
    description: "حدد الوقت المتاح لك للتعلم",
    options: [
      { id: 5, icon: "⚡", label: "5 دقائق", labelEn: "5 minutes" },
      { id: 10, icon: "⏱️", label: "10 دقائق", labelEn: "10 minutes" },
      { id: 15, icon: "⏰", label: "15 دقيقة", labelEn: "15 minutes" },
      { id: 20, icon: "🕐", label: "20+ دقيقة", labelEn: "20+ minutes" },
    ],
    gradient: "from-accent to-primary",
  },
  {
    id: 4,
    icon: "🚀",
    title: "جاهز لبدء الرحلة؟",
    titleEn: "Ready to start?",
    description: "بدينا رحلتك في تعلم الإنجليزية!",
    gradient: "from-success to-emerald-400",
  },
]

export default function OnboardingPage() {
  const router = useRouter()
  const { setUserGoal, setDailyTime, completeOnboarding } = useApp()
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedGoal, setSelectedGoal] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const step = STEPS[currentStep]

  const handleNext = () => {
    if (currentStep === 1 && selectedGoal) {
      setUserGoal(selectedGoal)
    }
    if (currentStep === 2 && selectedTime) {
      setDailyTime(selectedTime)
    }
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(c => c + 1)
    } else {
      completeOnboarding()
      router.push('/')
    }
  }

  const handleSelect = (id) => {
    if (currentStep === 1) setSelectedGoal(id)
    if (currentStep === 2) setSelectedTime(id)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {STEPS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i <= currentStep ? 'w-8 bg-primary' : 'w-4 bg-[var(--bg-surface-hover)]'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="solid-card p-6"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-4xl text-white shadow-lg mb-4`}
              >
                {step.icon}
              </motion.div>

              <h1 className="text-xl font-extrabold text-[var(--text-primary)] mb-2">{step.title}</h1>
              {step.titleEn && (
                <p className="text-sm text-[var(--text-muted)] direction-ltr">{step.titleEn}</p>
              )}
              <p className="text-sm text-[var(--text-muted)] mt-2">{step.description}</p>
            </div>

            {step.options && (
              <div className="grid grid-cols-2 gap-3 mt-6">
                {step.options.map((opt) => (
                  <motion.button
                    key={opt.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(opt.id)}
                    className={`p-4 rounded-[var(--radius-md)] border text-center transition-all ${
                      (currentStep === 1 ? selectedGoal : selectedTime) === opt.id
                        ? 'bg-primary/10 border-primary/30 ring-2 ring-primary/20'
                        : 'bg-[var(--bg-surface-hover)] border-[var(--border-subtle)] hover:border-primary/30'
                    }`}
                  >
                    <div className="text-2xl mb-2">{opt.icon}</div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">{opt.label}</div>
                    <div className="text-xs text-[var(--text-muted)] direction-ltr">{opt.labelEn}</div>
                  </motion.button>
                ))}
              </div>
            )}

            <button
              onClick={handleNext}
              disabled={currentStep === 1 && !selectedGoal || currentStep === 2 && !selectedTime}
              className="w-full mt-6 btn btn-primary py-3.5 text-[15px]"
            >
              {currentStep === STEPS.length - 1 ? '🚀 ابدأ التعلم' : 'التالي ←'}
            </button>

            {currentStep > 0 && currentStep < STEPS.length - 1 && (
              <button
                onClick={() => setCurrentStep(c => c - 1)}
                className="w-full mt-3 btn btn-secondary py-3"
              >
                ← رجوع
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-6">
          <button
            onClick={() => {
              completeOnboarding()
              router.push('/')
            }}
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            تخطي
          </button>
        </div>
      </div>
    </div>
  )
}
