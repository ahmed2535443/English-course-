'use client'
import { useCallback, useRef } from 'react'

const audioContext = typeof window !== 'undefined' ? new (window.AudioContext || window.webkitAudioContext)() : null

function playTone(frequency, duration, type = 'sine', volume = 0.3) {
  if (!audioContext) return
  
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()
  
  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)
  
  oscillator.frequency.value = frequency
  oscillator.type = type
  
  gainNode.gain.setValueAtTime(volume, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)
  
  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + duration)
}

function playSequence(notes, interval = 0.1) {
  if (!audioContext) return
  
  notes.forEach((note, i) => {
    setTimeout(() => {
      playTone(note.freq, note.dur || 0.15, note.type || 'sine', note.vol || 0.3)
    }, i * interval * 1000)
  })
}

export function useSounds() {
  const enabledRef = useRef(true)

  const play = useCallback((soundName) => {
    if (!enabledRef.current || !audioContext) return
    
    if (audioContext.state === 'suspended') {
      audioContext.resume()
    }

    switch (soundName) {
      case 'correct':
        playSequence([
          { freq: 523, dur: 0.1 },
          { freq: 659, dur: 0.1 },
          { freq: 784, dur: 0.15 },
        ], 0.08)
        break

      case 'incorrect':
        playSequence([
          { freq: 330, dur: 0.15, type: 'square', vol: 0.2 },
          { freq: 262, dur: 0.2, type: 'square', vol: 0.2 },
        ], 0.12)
        break

      case 'levelUp':
        playSequence([
          { freq: 523, dur: 0.1 },
          { freq: 659, dur: 0.1 },
          { freq: 784, dur: 0.1 },
          { freq: 1047, dur: 0.25 },
        ], 0.1)
        break

      case 'xpGain':
        playTone(880, 0.08, 'sine', 0.2)
        setTimeout(() => playTone(1175, 0.12, 'sine', 0.25), 60)
        break

      case 'streak':
        playSequence([
          { freq: 784, dur: 0.08 },
          { freq: 988, dur: 0.08 },
          { freq: 1175, dur: 0.15 },
        ], 0.07)
        break

      case 'click':
        playTone(800, 0.04, 'sine', 0.15)
        break

      case 'complete':
        playSequence([
          { freq: 523, dur: 0.12 },
          { freq: 659, dur: 0.12 },
          { freq: 784, dur: 0.12 },
          { freq: 1047, dur: 0.12 },
          { freq: 1319, dur: 0.3 },
        ], 0.1)
        break

      case 'achievement':
        playSequence([
          { freq: 1047, dur: 0.08, type: 'triangle' },
          { freq: 1319, dur: 0.08, type: 'triangle' },
          { freq: 1568, dur: 0.08, type: 'triangle' },
          { freq: 2093, dur: 0.25, type: 'triangle' },
        ], 0.09)
        break

      case 'start':
        playTone(660, 0.08, 'sine', 0.2)
        setTimeout(() => playTone(880, 0.12, 'sine', 0.25), 80)
        break

      case 'end':
        playSequence([
          { freq: 880, dur: 0.08 },
          { freq: 660, dur: 0.12 },
        ], 0.1)
        break

      case 'heart':
        playTone(1047, 0.06, 'sine', 0.2)
        setTimeout(() => playTone(1319, 0.08, 'sine', 0.2), 50)
        break

      case 'match':
        playSequence([
          { freq: 784, dur: 0.06 },
          { freq: 988, dur: 0.1 },
        ], 0.06)
        break

      case 'select':
        playTone(600, 0.03, 'sine', 0.12)
        break

      case 'swoosh':
        playTone(400, 0.08, 'sawtooth', 0.1)
        setTimeout(() => playTone(600, 0.06, 'sawtooth', 0.08), 40)
        break

      default:
        break
    }
  }, [])

  const toggleSounds = useCallback(() => {
    enabledRef.current = !enabledRef.current
    return enabledRef.current
  }, [])

  const enableSounds = useCallback(() => {
    enabledRef.current = true
  }, [])

  const disableSounds = useCallback(() => {
    enabledRef.current = false
  }, [])

  return { play, toggleSounds, enableSounds, disableSounds, isEnabled: enabledRef.current }
}
