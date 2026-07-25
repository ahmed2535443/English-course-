import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/context/AppProvider'
import DarkModeProvider from '@/context/DarkModeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
})

export const metadata = {
  title: 'zAmericanEnglish - كورس المحادثة',
  description: 'كورس المحادثة المستوى الأول - الطيران والمطار',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${cairo.variable}`} suppressHydrationWarning>
      <body className="font-[var(--font-cairo),var(--font-inter),sans-serif]">
        <AppProvider>
          <DarkModeProvider>{children}</DarkModeProvider>
        </AppProvider>
      </body>
    </html>
  )
}
