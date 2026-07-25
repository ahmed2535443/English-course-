import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { getUserProgress, saveUserProgress } from '@/lib/supabase'

export async function GET() {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const progress = await getUserProgress(userId)
  return NextResponse.json(progress || {})
}

export async function POST(request) {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const success = await saveUserProgress(userId, body)

  if (!success) {
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
