'use client'
import { useEffect } from 'react'
import { useApp } from '@/context/AppContext'

export default function DarkModeProvider({ children }) {
  const { dk } = useApp()

  useEffect(() => {
    const html = document.documentElement
    if (dk) {
      html.classList.add('dk')
    } else {
      html.classList.remove('dk')
    }
    html.style.colorScheme = dk ? 'dark' : 'light'
  }, [dk])

  useEffect(() => {
    const saved = localStorage.getItem('zAE_v5')
    if (!saved) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        const html = document.documentElement
        html.classList.add('dk')
        html.style.colorScheme = 'dark'
      }
    }
  }, [])

  return <>{children}</>
}
