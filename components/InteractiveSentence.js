'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWebSpeech } from '@/hooks/useWebSpeech'

const WORD_TRANSLATIONS = {
  'the': 'ال (أداة تعريف)',
  'a': 'أداة تعريف غير محددة',
  'an': 'أداة تعريف غير محددة (قبل حرف صوتي)',
  'is': 'هو/هي/هو',
  'are': 'هم/هن/أنتم',
  'was': 'كان',
  'were': 'كانوا',
  'have': 'لدي/لديهم',
  'has': 'لديه/لديها',
  'had': 'كان لديه',
  'do': 'يفعل',
  'does': 'يفعل (مفرد)',
  'will': 'سوف',
  'would': 'سوف (مجاملة)',
  'can': 'يستطيع',
  'could': 'يستطيع (مجاملة)',
  'should': 'يجب',
  'may': 'يمكن',
  'might': 'ربما',
  'I': 'أنا',
  'you': 'أنت/أنتِ',
  'he': 'هو',
  'she': 'هي',
  'it': 'هو/هي (شيء)',
  'we': 'نحن',
  'they': 'هم',
  'this': 'هذا',
  'that': 'ذلك',
  'these': 'هؤلاء',
  'those': 'تلك',
  'my': 'لي',
  'your': 'لك/لكِ',
  'his': 'له',
  'her': 'لها',
  'our': 'لنا',
  'their': 'لهم',
  'and': 'و',
  'but': 'لكن',
  'or': 'أو',
  'because': 'لأن',
  'if': 'إذا',
  'when': 'عندما',
  'where': 'أين',
  'what': 'ماذا',
  'who': 'من',
  'how': 'كيف',
  'why': 'لماذا',
  'good': 'جيد',
  'bad': 'سيئ',
  'big': 'كبير',
  'small': 'صغير',
  'new': 'جديد',
  'old': 'قديم',
  'young': 'شاب',
  'hot': 'حار',
  'cold': 'بارد',
  'like': 'يحب',
  'love': 'يحب بشدة',
  'want': 'يريد',
  'need': 'يحتاج',
  'go': 'يذهب',
  'come': 'يأتي',
  'see': 'يرى',
  'look': 'ينظر',
  'eat': 'يأكل',
  'drink': 'يشرب',
  'buy': 'يشتري',
  'sell': 'يبيع',
  'give': 'يعطي',
  'take': 'ياخذ',
  'make': 'يصنع',
  'think': 'يفكر',
  'know': 'يعرف',
  'speak': 'يتكلم',
  'tell': 'يقول',
  'ask': 'يسأل',
  'answer': 'يجيب',
  'help': 'يساعد',
  'work': 'يعمل',
  'play': 'يلعب',
  'read': 'يقرأ',
  'write': 'يكتب',
  'listen': 'يسمع',
  'house': 'منزل',
  'home': 'بيت',
  'school': 'مدرسة',
  'office': 'مكتب',
  'car': 'سيارة',
  'bus': 'حافلة',
  'train': 'قطار',
  'plane': 'طائرة',
  'airport': 'مطار',
  'hotel': 'فندق',
  'restaurant': 'مطعم',
  'shop': 'محل',
  'market': 'سوق',
  'hospital': 'مستشفى',
  'bank': 'بنك',
  'food': 'طعام',
  'water': 'ماء',
  'coffee': 'قهوة',
  'tea': 'شاي',
  'bread': 'خبز',
  'meat': 'لحم',
  'fish': 'سمك',
  'chicken': 'دجاج',
  'rice': 'أرز',
  'apple': 'تفاحة',
  'banana': 'موزة',
  'orange': 'برتقالة',
  'friend': 'صديق',
  'family': 'عائلة',
  'mother': 'أم',
  'father': 'أب',
  'brother': 'أخ',
  'sister': 'أخت',
  'child': 'طفل',
  'today': 'اليوم',
  'tomorrow': 'غداً',
  'yesterday': 'أمس',
  'now': 'الآن',
  'here': 'هنا',
  'there': 'هناك',
  'very': 'جداً',
  'really': 'حقاً',
  'also': 'أيضاً',
  'too': 'أيضاً',
  'always': 'دائماً',
  'never': 'أبداً',
  'sometimes': 'أحياناً',
  'often': 'غالباً',
  'time': 'وقت',
  'day': 'يوم',
  'night': 'ليل',
  'morning': 'صباح',
  'evening': 'مساء',
  'one': 'واحد',
  'two': 'اثنان',
  'three': 'ثلاثة',
  'four': 'أربعة',
  'five': 'خمسة',
  'six': 'ستة',
  'seven': 'سبعة',
  'eight': 'ثمانية',
  'nine': 'تسعة',
  'ten': 'عشرة',
}

function getTranslation(word) {
  const lower = word.toLowerCase().replace(/[^a-zA-Z]/g, '')
  return WORD_TRANSLATIONS[lower] || getSimulatedTranslation(lower)
}

function getSimulatedTranslation(word) {
  // Simple suffix-based simulation
  if (word.endsWith('ing')) return 'فعل مستمر'
  if (word.endsWith('ed')) return 'فعل ماضي'
  if (word.endsWith('ly')) return 'ظرف (بشكل)'
  if (word.endsWith('tion')) return 'اسم (حالة)'
  if (word.endsWith('ness')) return 'اسم (صفة)'
  if (word.endsWith('ful')) return 'صفة (مليء بـ)'
  if (word.endsWith('less')) return 'صفة (بدون)'
  if (word.endsWith('er')) return 'اسم (من يفعل)'
  if (word.endsWith('est')) return 'صفة (الأكثر)'
  return 'كلمة إنجليزية'
}

export default function InteractiveSentence({ sentence, showTranslation = true }) {
  const [activeWord, setActiveWord] = useState(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const { speak } = useWebSpeech()

  const handleWordClick = (word, index, event) => {
    if (activeWord === index) {
      setActiveWord(null)
      return
    }

    const rect = event.target.getBoundingClientRect()
    const containerRect = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 }

    setTooltipPosition({
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top - 10,
    })
    setActiveWord(index)
    speak(word)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveWord(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const words = sentence.split(' ')

  return (
    <div ref={containerRef} className="relative">
      <div className="flex flex-wrap gap-x-2 gap-y-1 text-lg leading-relaxed direction-ltr justify-start">
        {words.map((word, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleWordClick(word, index, e)}
            className={`relative px-2 py-1 rounded-lg transition-all duration-200 cursor-pointer font-medium ${
              activeWord === index
                ? 'bg-primary text-white shadow-md'
                : 'bg-[var(--bg-surface-hover)] hover:bg-primary/10 text-[var(--text-primary)]'
            }`}
          >
            {word}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeWord !== null && showTranslation && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              transform: 'translate(-50%, -100%)',
            }}
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-xl shadow-xl text-sm font-semibold whitespace-nowrap">
              <div className="flex items-center gap-2">
                <span className="text-primary-light font-bold direction-ltr">
                  {words[activeWord]}
                </span>
                <span className="text-gray-400">→</span>
                <span className="text-green-400">
                  {getTranslation(words[activeWord])}
                </span>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
