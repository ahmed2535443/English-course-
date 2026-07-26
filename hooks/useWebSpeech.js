'use client'
import { useCallback, useRef, useState, useEffect } from 'react'

const SPEEDS = {
  slow: 0.6,
  normal: 0.9,
  fast: 1.3,
}

export function useWebSpeech() {
  const utteranceRef = useRef(null)
  const recognitionRef = useRef(null)
  const [speed, setSpeed] = useState('normal')
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [error, setError] = useState(null)
  const [isSupported, setIsSupported] = useState({ speech: false, recognition: false })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsSupported({
        speech: 'speechSynthesis' in window,
        recognition: 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window,
      })
    }
  }, [])

  const speak = useCallback((text, speedKey) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = SPEEDS[speedKey || speed] || SPEEDS.normal
    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [speed])

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }, [])

  const startListening = useCallback(() => {
    if (typeof window === 'undefined') return
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setError('Speech recognition is not supported in this browser')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = 'en-US'
    recognition.continuous = false
    recognition.interimResults = true

    recognition.onstart = () => {
      setIsListening(true)
      setError(null)
      setTranscript('')
    }

    recognition.onresult = (event) => {
      const current = event.resultIndex
      const result = event.results[current]
      const text = result[0].transcript
      setTranscript(text)
    }

    recognition.onerror = (event) => {
      setError(`Recognition error: ${event.error}`)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
    }

    recognitionRef.current = recognition
    recognition.start()
  }, [])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }, [])

  return {
    speak,
    stop,
    speed,
    setSpeed,
    SPEEDS,
    isSpeaking,
    startListening,
    stopListening,
    isListening,
    transcript,
    error,
    isSupported,
  }
}
