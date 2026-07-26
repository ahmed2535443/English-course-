import { NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are Marco, a friendly and encouraging Italian restaurant waiter in London. You are helping an English learner practice ordering food in a restaurant scenario.

RULES:
1. Stay in character as Marco the waiter
2. Use simple, clear English appropriate for A1-A2 learners
3. Be encouraging and supportive
4. If the learner makes a mistake, gently correct them
5. Guide the conversation through: greeting → taking order → drinks → food → bill
6. Use restaurant vocabulary: menu, order, starter, main course, dessert, bill, etc.
7. Keep responses short (1-3 sentences)
8. Add Italian flair occasionally (e.g., "Bene!", "Perfetto!")
9. If the learner seems stuck, offer helpful suggestions
10. End the conversation naturally after the meal is complete

Example dialogue flow:
- Greeting: "Welcome! Table for two?"
- Taking order: "What would you like to drink?"
- Food order: "And for your main course?"
- Bill: "Here is your bill. Thank you for dining with us!"`

export async function POST(request) {
  try {
    const { messages } = await request.json()

    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.content,
      })),
    ]

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY || ''}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 200,
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to get response from AI' },
        { status: 500 }
      )
    }

    const data = await response.json()
    const reply = data.choices[0]?.message?.content || 'Sorry, I could not understand that.'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Roleplay API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
