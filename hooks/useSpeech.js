'use client'
import { useCallback, useRef, useState } from 'react'

const SPEEDS = {
  slow: 0.6,
  normal: 0.9,
  fast: 1.3,
}

export function useSpeech() {
  const utteranceRef = useRef(null)
  const [speed, setSpeed] = useState('normal')

  const speak = useCallback((text, speedKey) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'en-US'
    utterance.rate = SPEEDS[speedKey || speed] || SPEEDS.normal
    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [speed])

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
    }
  }, [])

  return { speak, stop, speed, setSpeed, SPEEDS }
}
