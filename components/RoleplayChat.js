'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWebSpeech } from '@/hooks/useWebSpeech'

const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'assistant',
    content: "Benvenuto! Welcome to Marco's Restaurant! I'm Marco, your waiter today. Table for two? Or are you dining alone?",
  },
]

export default function RoleplayChat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const { speak, isSpeaking } = useWebSpeech()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: input.trim(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/roleplay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      const data = await response.json()

      if (data.reply) {
        const assistantMessage = {
          id: Date.now() + 1,
          role: 'assistant',
          content: data.reply,
        }
        setMessages(prev => [...prev, assistantMessage])
        speak(data.reply)
      }
    } catch (error) {
      console.error('Failed to send message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const resetChat = () => {
    setMessages(INITIAL_MESSAGES)
    setInput('')
  }

  return (
    <div className="solid-card overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
              🍝
            </div>
            <div>
              <div className="text-white font-bold">Marco's Restaurant</div>
              <div className="text-white/80 text-xs">AI Waiter Roleplay</div>
            </div>
          </div>
          <button
            onClick={resetChat}
            className="text-white/80 hover:text-white text-sm px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            🔄 New Chat
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-orange-50/30 to-white dark:from-orange-950/10 dark:to-transparent">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.role === 'user' ? 'order-1' : 'order-1'}`}>
                {message.role === 'assistant' && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">👨‍🍳</span>
                    <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                      Marco
                    </span>
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-sm'
                      : 'bg-white dark:bg-gray-800 border border-orange-100 dark:border-orange-900/30 text-[var(--text-primary)] rounded-tl-sm shadow-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed direction-ltr">{message.content}</p>
                </div>
                {message.role === 'assistant' && (
                  <button
                    onClick={() => speak(message.content)}
                    disabled={isSpeaking}
                    className="mt-1 text-xs text-orange-500 hover:text-orange-600 px-2 py-0.5 rounded-full hover:bg-orange-50 dark:hover:bg-orange-950/30 transition-colors"
                  >
                    🔊 Listen
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="max-w-[80%]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">👨‍🍳</span>
                <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                  Marco
                </span>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-orange-100 dark:border-orange-900/30 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                    className="w-2 h-2 rounded-full bg-orange-400"
                  />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                    className="w-2 h-2 rounded-full bg-orange-400"
                  />
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                    className="w-2 h-2 rounded-full bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your response in English..."
            className="input flex-1"
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || isLoading}
            className="btn btn-primary px-6"
          >
            {isLoading ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              >
                ⏳
              </motion.span>
            ) : (
              '📤'
            )}
          </button>
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-2 text-center">
          💡 Tip: Try ordering food in English! Say things like &quot;I would like to order...&quot;
        </p>
      </div>
    </div>
  )
}
