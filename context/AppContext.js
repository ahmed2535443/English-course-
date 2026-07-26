'use client'
import { createContext, useContext, useReducer, useEffect, useCallback, useMemo } from 'react'
import { LESSONS } from '@/data/lessons'

const AppContext = createContext()

const STORAGE_KEY = 'zAE_v6'

function getDefaultState() {
  return {
    xp: 0,
    str: 0,
    bst: 0,
    dly: 0,
    ld: '',
    tot: 0,
    cor: 0,
    wrd: 0,
    don: [],
    prg: {},
    srs: [],
    ach: [],
    dk: false,
    cst: {},
    lastUnit: 0,
    lastStep: '',
    lastLesson: null,
    lastCourse: null,
    lastLevel: null,
    lessonProgress: {},
    courseProgress: {},
    levelProgress: {},
    quizAttempts: [],
    onboardingComplete: false,
    userGoal: null,
    dailyTime: 10,
    activity: {},
    speechSpeed: 1,
  }
}

function loadState() {
  if (typeof window === 'undefined') return getDefaultState()
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return getDefaultState()
    const parsed = JSON.parse(saved)
    return { ...getDefaultState(), ...parsed }
  } catch {
    return getDefaultState()
  }
}

function saveState(state) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function getToday() {
  return new Date().toDateString()
}

function getYesterday() {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  return d.toDateString()
}

function checkStreak(state) {
  const today = getToday()
  const yesterday = getYesterday()

  if (state.ld === today) return state

  if (state.ld === yesterday) {
    return { ...state, str: state.str + 1, dly: 0, ld: today }
  }

  if (state.ld === '') {
    return { ...state, str: 1, dly: 0, ld: today }
  }

  return { ...state, str: 1, dly: 0, ld: today }
}

const SRS_INTERVALS = [
  1000 * 60 * 60,
  1000 * 60 * 60 * 12,
  1000 * 60 * 60 * 24,
  1000 * 60 * 60 * 24 * 3,
  1000 * 60 * 60 * 24 * 7,
  1000 * 60 * 60 * 24 * 30,
]

function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return action.payload
    case 'ADD_XP':
      return { ...state, xp: state.xp + action.payload }
    case 'COMPLETE_EXERCISE': {
      const { correct, total, lessonId, wordsLearned } = action.payload
      const newDon = state.don.includes(lessonId) ? state.don : [...state.don, lessonId]
      const newDly = state.dly + total
      const newPrg = { ...state.prg }
      const prev = newPrg[lessonId] || { correct: 0, total: 0 }
      newPrg[lessonId] = {
        correct: prev.correct + correct,
        total: prev.total + total,
      }
      const newBst = Math.max(state.bst, state.str)
      return {
        ...state,
        tot: state.tot + total,
        cor: state.cor + correct,
        dly: newDly,
        wrd: state.wrd + wordsLearned,
        don: newDon,
        prg: newPrg,
        bst: newBst,
      }
    }
    case 'UNLOCK_ACH': {
      const id = action.payload
      if (state.ach.includes(id)) return state
      return { ...state, ach: [...state.ach, id] }
    }
    case 'TOGGLE_DARK':
      return { ...state, dk: !state.dk }
    case 'SET_SRS':
      return { ...state, srs: action.payload }
    case 'RATE_SRS': {
      const { index, level } = action.payload
      const newSrs = [...state.srs]
      const interval = SRS_INTERVALS[Math.min(level, SRS_INTERVALS.length - 1)]
      newSrs[index] = {
        ...newSrs[index],
        lv: level,
        nx: Date.now() + interval,
      }
      return { ...state, srs: newSrs }
    }
    case 'CHECK_DAY':
      return checkStreak(state)
    case 'COMPLETE_STEP': {
      const { unitId, step } = action.payload
      const unitSteps = state.cst[unitId] || []
      if (unitSteps.includes(step)) return state
      return { ...state, cst: { ...state.cst, [unitId]: [...unitSteps, step] } }
    }
    case 'SET_LAST_LOCATION': {
      const { unitId, step } = action.payload
      return { ...state, lastUnit: unitId, lastStep: step }
    }
    case 'SET_LAST_LESSON': {
      const { lessonId, courseId, levelId } = action.payload
      return {
        ...state,
        lastLesson: lessonId,
        lastCourse: courseId,
        lastLevel: levelId,
      }
    }
    case 'COMPLETE_LESSON': {
      const { lessonId, courseId, levelId, score } = action.payload
      const newLessonProgress = {
        ...state.lessonProgress,
        [lessonId]: { completed: true, score, completedAt: Date.now() },
      }
      const newDon = state.don.includes(lessonId) ? state.don : [...state.don, lessonId]
      return {
        ...state,
        lessonProgress: newLessonProgress,
        don: newDon,
      }
    }
    case 'SAVE_QUIZ_ATTEMPT': {
      const { lessonId, score, passed } = action.payload
      const newQuizAttempts = [
        ...state.quizAttempts,
        { lessonId, score, passed, date: Date.now() },
      ]
      return { ...state, quizAttempts: newQuizAttempts }
    }
    case 'SET_USER_GOAL':
      return { ...state, userGoal: action.payload }
    case 'SET_DAILY_TIME':
      return { ...state, dailyTime: action.payload }
    case 'COMPLETE_ONBOARDING':
      return { ...state, onboardingComplete: true }
    case 'SET_SPEECH_SPEED':
      return { ...state, speechSpeed: action.payload }
    case 'RESET':
      return getDefaultState()
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, () => getDefaultState())

  useEffect(() => {
    const loaded = loadState()
    dispatch({ type: 'INIT', payload: loaded })
    dispatch({ type: 'CHECK_DAY' })
  }, [])

  useEffect(() => {
    saveState(state)
  }, [state])

  useEffect(() => {
    if (state.dly >= 5 && !state.ach.includes('d5')) {
      dispatch({ type: 'UNLOCK_ACH', payload: 'd5' })
    }
    if (state.xp >= 100 && !state.ach.includes('x1')) {
      dispatch({ type: 'UNLOCK_ACH', payload: 'x1' })
    }
    if (state.xp >= 500 && !state.ach.includes('x5')) {
      dispatch({ type: 'UNLOCK_ACH', payload: 'x5' })
    }
    if (state.don.length >= 8 && !state.ach.includes('all')) {
      dispatch({ type: 'UNLOCK_ACH', payload: 'all' })
    }
    for (let i = 1; i <= 8; i++) {
      const lessonId = String(i)
      const prg = state.prg[lessonId]
      if (prg && prg.total >= 8 && prg.correct === prg.total && !state.ach.includes(`p${i}`)) {
        dispatch({ type: 'UNLOCK_ACH', payload: `p${i}` })
      }
    }
  }, [state.dly, state.xp, state.don.length, state.prg, state.ach])

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: 'CHECK_DAY' })
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  const addXP = useCallback((n) => dispatch({ type: 'ADD_XP', payload: n }), [])

  const completeExercise = useCallback((correct, total, lessonId, wordsLearned) => {
    dispatch({ type: 'COMPLETE_EXERCISE', payload: { correct, total, lessonId, wordsLearned } })
  }, [])

  const unlockAchievement = useCallback((id) => dispatch({ type: 'UNLOCK_ACH', payload: id }), [])

  const toggleDark = useCallback(() => dispatch({ type: 'TOGGLE_DARK' }), [])

  const setSRS = useCallback((srs) => dispatch({ type: 'SET_SRS', payload: srs }), [])

  const rateSRS = useCallback((index, level) => dispatch({ type: 'RATE_SRS', payload: { index, level } }), [])

  const resetAll = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY)
    }
    dispatch({ type: 'RESET' })
  }, [])

  const completeStep = useCallback((unitId, step) => {
    dispatch({ type: 'COMPLETE_STEP', payload: { unitId, step } })
  }, [])

  const setLastLocation = useCallback((unitId, step) => {
    dispatch({ type: 'SET_LAST_LOCATION', payload: { unitId, step } })
  }, [])

  const setLastLesson = useCallback((lessonId, courseId, levelId) => {
    dispatch({ type: 'SET_LAST_LESSON', payload: { lessonId, courseId, levelId } })
  }, [])

  const completeLesson = useCallback((lessonId, courseId, levelId, score) => {
    dispatch({ type: 'COMPLETE_LESSON', payload: { lessonId, courseId, levelId, score } })
  }, [])

  const saveQuizAttempt = useCallback((lessonId, score, passed) => {
    dispatch({ type: 'SAVE_QUIZ_ATTEMPT', payload: { lessonId, score, passed } })
  }, [])

  const buildSRS = useCallback(() => {
    if (state.srs.length > 0) return
    const srs = []
    LESSONS.forEach((lesson) => {
      lesson.voc.forEach((v) => {
        srs.push({
          e: v.e,
          a: v.a,
          d: v.d,
          cl: v.cl,
          ms: v.ms,
          lv: 0,
          nx: Date.now(),
        })
      })
    })
    setSRS(srs)
  }, [setSRS, state.srs.length])

  const setUserGoal = useCallback((goal) => dispatch({ type: 'SET_USER_GOAL', payload: goal }), [])
  const setDailyTime = useCallback((time) => dispatch({ type: 'SET_DAILY_TIME', payload: time }), [])
  const completeOnboarding = useCallback(() => dispatch({ type: 'COMPLETE_ONBOARDING' }), [])
  const setSpeechSpeed = useCallback((speed) => dispatch({ type: 'SET_SPEECH_SPEED', payload: speed }), [])

  const value = useMemo(() => ({
    ...state,
    addXP,
    completeExercise,
    unlockAchievement,
    toggleDark,
    setSRS,
    rateSRS,
    resetAll,
    buildSRS,
    completeStep,
    setLastLocation,
    setLastLesson,
    completeLesson,
    saveQuizAttempt,
    setUserGoal,
    setDailyTime,
    completeOnboarding,
    setSpeechSpeed,
    lessons: LESSONS,
  }), [state, addXP, completeExercise, unlockAchievement, toggleDark, setSRS, rateSRS, resetAll, buildSRS, completeStep, setLastLocation, setLastLesson, completeLesson, saveQuizAttempt, setUserGoal, setDailyTime, completeOnboarding, setSpeechSpeed])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
