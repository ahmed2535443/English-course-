'use client'
import { motion, AnimatePresence } from 'framer-motion'

export default function XPPopup({ show, amount }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] pointer-events-none"
        >
          <div className="glass-card-strong px-6 py-3 text-xl font-extrabold gradient-text">
            +{amount} XP
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
