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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-5"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl p-8 w-full max-w-sm text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-6xl mb-3"
            >
              {emoji}
            </motion.div>
            <h2 className="text-2xl font-extrabold mb-2">{title}</h2>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">{description}</p>
            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-light text-white font-bold text-[15px] hover:shadow-lg transition-all"
            >
              متابعة
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
