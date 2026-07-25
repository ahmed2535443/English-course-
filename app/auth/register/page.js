'use client'
import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-base)]">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-[var(--radius-md)] bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl shadow-lg shadow-primary/20">
              ✈️
            </div>
            <div className="text-left">
              <div className="text-lg font-extrabold gradient-text">zAmericanEnglish</div>
              <div className="text-xs text-[var(--text-muted)]">كورس المحادثة</div>
            </div>
          </Link>
          <h1 className="text-xl font-extrabold text-[var(--text-primary)]">إنشاء حساب</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">سجل وابدأ رحلة تعلم الإنجليزية</p>
        </div>

        <div className="solid-card p-6">
          <SignUp 
            routing="hash"
            appearance={{
              elements: {
                rootBox: 'w-full',
                card: 'bg-transparent shadow-none',
              }
            }}
          />
        </div>

        <p className="text-center text-xs text-[var(--text-muted)] mt-4">
          لديك حساب بالفعل؟{' '}
          <Link href="/auth/login" className="text-primary font-semibold hover:underline">
            سجل دخولك
          </Link>
        </p>
      </div>
    </div>
  )
}
