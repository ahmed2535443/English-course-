'use client'
import { createContext, useContext, useReducer, useEffect, useCallback } from 'react'
import { LESSONS } from '@/data/lessons'

const AppContext = createContext()

const STORAGE_KEY = 'zAE_v4'

function getDefaultState() {
  return {
    xp: 0,
    str: 1,
    bst: 1,
    dly: 0,
    ld: new Date().toDateString(),
    tot: 0,
    cor: 0,
    wrd: 0,
    don: [],
    srs: [],
    ach: [],
    dk: false,
  }
}

function loadState() {
  if (typeof window === 'undefined') return getDefaultState()
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...getDefaultState(), ...JSON.parse(saved) } : getDefaultState()
  } catch {
    return getDefaultState()
  }
}

function saveState(state) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

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
      const newBst = Math.max(state.bst, state.str)
      return {
        ...state,
        tot: state.tot + total,
        cor: state.cor + correct,
        dly: newDly,
        wrd: state.wrd + wordsLearned,
        don: newDon,
        str: state.str,
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
      const intervals = [900000, 300000, 60000]
      newSrs[index] = {
        ...newSrs[index],
        lv: level,
        nx: Date.now() + intervals[level],
      }
      return { ...state, srs: newSrs }
    }
    case 'CHECK_DAY': {
      const today = new Date().toDateString()
      if (state.ld !== today) {
        return { ...state, dly: 0, ld: today }
      }
      return state
    }
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
    if (state.xp > 0 || state.don.length > 0) {
      saveState(state)
    }
  }, [state])

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

  const buildSRS = useCallback(() => {
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
  }, [setSRS])

  const value = {
    ...state,
    addXP,
    completeExercise,
    unlockAchievement,
    toggleDark,
    setSRS,
    rateSRS,
    resetAll,
    buildSRS,
    lessons: LESSONS,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
