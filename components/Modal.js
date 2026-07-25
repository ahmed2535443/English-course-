'use client'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ show, emoji, title, description, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-5"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-slate-900 rounded-3xl p-8 w-full max-w-sm text-center shadow-2xl border border-slate-100 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-7xl mb-4"
            >
              {emoji}
            </motion.div>
            <h2 className="text-2xl font-extrabold mb-2 text-slate-800 dark:text-slate-100">{title}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{description}</p>
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl btn-primary text-[15px]"
            >
              متابعة
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
