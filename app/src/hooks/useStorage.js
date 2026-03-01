import { useState, useCallback } from 'react'

const STORAGE_KEY = 'sodateru-zukan'
const SCHEMA_VERSION = 2
const MAX_EMOTION_LOG = 200

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function getDefaultData() {
  return {
    _version: SCHEMA_VERSION,
    unlockedPages: [],
    todaysSessions: 0,
    todaysDate: new Date().toISOString().slice(0, 10),
    todaysSeconds: 0,
    emotionLog: [],
  }
}

function migrateData(saved) {
  const migrated = { ...saved }
  if (!migrated._version || migrated._version < 2) {
    delete migrated.courseScores
    migrated._version = 2
  }
  return migrated
}

export function useStorage() {
  const [data, setData] = useState(() => {
    const saved = loadData()
    if (!saved) return getDefaultData()
    const today = new Date().toISOString().slice(0, 10)
    const migrated = migrateData(saved)
    if (migrated.todaysDate !== today) {
      return { ...migrated, todaysSessions: 0, todaysDate: today, todaysSeconds: 0 }
    }
    return migrated
  })

  const save = useCallback((updater) => {
    setData((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const unlockPage = useCallback((pageId) => {
    save((prev) => {
      if (prev.unlockedPages.includes(pageId)) return prev
      return { ...prev, unlockedPages: [...prev.unlockedPages, pageId] }
    })
  }, [save])

  const logEmotion = useCallback((questionId, emotion, courseId) => {
    save((prev) => ({
      ...prev,
      emotionLog: [...prev.emotionLog, {
        questionId,
        emotion,
        courseId,
        timestamp: new Date().toISOString(),
      }].slice(-MAX_EMOTION_LOG),
    }))
  }, [save])

  const incrementSession = useCallback(() => {
    save((prev) => ({ ...prev, todaysSessions: prev.todaysSessions + 1 }))
  }, [save])

  const addSeconds = useCallback((seconds) => {
    save((prev) => ({ ...prev, todaysSeconds: prev.todaysSeconds + seconds }))
  }, [save])

  const exportJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `sodateru-zukan-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }, [data])

  return { data, unlockPage, logEmotion, incrementSession, addSeconds, exportJSON }
}
