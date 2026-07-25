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
  }, [dk])

  return <>{children}</>
}
