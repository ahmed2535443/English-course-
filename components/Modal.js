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
            initial={{ scale: 0.92, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 12 }}
            transition={{ type: 'spring', damping: 24, stiffness: 280 }}
            className="glass-card-strong p-8 w-full max-w-sm text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ y: [0, -8, 0], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-6xl mb-4"
            >
              {emoji}
            </motion.div>
            <h2 className="text-xl font-extrabold mb-2 text-[var(--text-primary)]">{title}</h2>
            <p className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">{description}</p>
            <button onClick={onClose} className="btn btn-primary w-full py-3 text-[15px]">
              متابعة
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
