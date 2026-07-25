'use client'
import { useState, useEffect, useCallback, useRef } from 'react'

export function useSpeechRecognition() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(false)
  const [error, setError] = useState(null)
  const recognitionRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      setIsSupported(!!SpeechRecognition)
    }
  }, [])

  const startListening = useCallback((lang = 'en-US') => {
    if (typeof window === 'undefined') return

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setError('Speech Recognition is not supported in this browser')
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = lang
    recognition.interimResults = false
    recognition.maxAlternatives = 3

    recognition.onstart = () => {
      setIsListening(true)
      setTranscript('')
      setError(null)
    }

    recognition.onresult = (event) => {
      const results = event.results[0]
      const alternatives = []
      for (let i = 0; i < results.length; i++) {
        alternatives.push({
          transcript: results[i].transcript,
          confidence: results[i].confidence,
        })
      }
      setTranscript(alternatives[0]?.transcript || '')
    }

    recognition.onerror = (event) => {
      setError(event.error)
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
    }
  }, [])

  const resetTranscript = useCallback(() => {
    setTranscript('')
  }, [])

  return {
    isListening,
    transcript,
    isSupported,
    error,
    startListening,
    stopListening,
    resetTranscript,
  }
}
