'use client'
import { motion, AnimatePresence } from 'framer-motion'

export default function XPPopup({ show, amount }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1.1, x: '-50%', y: '-50%' }}
          exit={{ opacity: 0, y: '-100%', scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="fixed top-1/2 left-1/2 bg-gradient-to-r from-primary to-secondary text-white px-7 py-3.5 rounded-full text-2xl font-extrabold z-50 pointer-events-none"
        >
          +{amount} XP
        </motion.div>
      )}
    </AnimatePresence>
  )
}
