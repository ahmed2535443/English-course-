'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWebSpeech } from '@/hooks/useWebSpeech'

export default function SpeechTester() {
  const {
    speak,
    isSpeaking,
    startListening,
    stopListening,
    isListening,
    transcript,
    error,
    isSupported,
  } = useWebSpeech()

  const [text, setText] = useState('Hello! Welcome to ZAmericanEnglish.')

  return (
    <div className="solid-card p-5">
      <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
        🎤 Speech Engine
      </h3>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-semibold text-[var(--text-secondary)] mb-2 block">
            English Text
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input min-h-[80px] resize-none"
            placeholder="Type or paste English text here..."
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => speak(text)}
            disabled={isSpeaking || !isSupported.speech}
            className="btn btn-primary flex-1"
          >
            {isSpeaking ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  🔊
                </motion.span>
                Speaking...
              </span>
            ) : (
              <span>🔊 Speak</span>
            )}
          </button>

          <button
            onClick={isListening ? stopListening : startListening}
            disabled={!isSupported.recognition}
            className={`btn flex-1 ${isListening ? 'btn-danger' : 'btn-secondary'}`}
          >
            {isListening ? (
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block"
                >
                  🔴
                </motion.span>
                Listening...
              </span>
            ) : (
              <span>🎤 Listen</span>
            )}
          </button>
        </div>

        <AnimatePresence>
          {isListening && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-[var(--radius-md)] p-4">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-3 h-3 rounded-full bg-red-500"
                  />
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                    Microphone Active
                  </span>
                </div>
                <div className="w-full bg-red-100 dark:bg-red-900/30 rounded-full h-2 overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="w-1/3 h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {transcript && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-[var(--radius-md)] p-4"
          >
            <div className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">
              ✅ Recognized Speech:
            </div>
            <div className="text-sm font-bold text-[var(--text-primary)] direction-ltr">
              {transcript}
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-[var(--radius-md)] p-4"
          >
            <div className="text-sm text-red-600 dark:text-red-400">
              ❌ {error}
            </div>
          </motion.div>
        )}

        <div className="flex gap-2 text-xs text-[var(--text-muted)]">
          <span className={`px-2 py-1 rounded-full ${isSupported.speech ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`}>
            TTS: {isSupported.speech ? '✓' : '✗'}
          </span>
          <span className={`px-2 py-1 rounded-full ${isSupported.recognition ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`}>
            STT: {isSupported.recognition ? '✓' : '✗'}
          </span>
        </div>
      </div>
    </div>
  )
}
