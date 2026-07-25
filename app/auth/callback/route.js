import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export async function GET(request) {
  const { userId } = await auth()

  if (!userId) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.redirect(new URL('/', request.url))
}
