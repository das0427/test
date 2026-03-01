import { useState, useCallback } from 'react'

const STORAGE_KEY = 'sodateru-zukan'

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
    // 解放済み図鑑ページID
    unlockedPages: [],
    // 今日のセッション数
    todaysSessions: 0,
    // 今日の日付 (YYYY-MM-DD)
    todaysDate: new Date().toISOString().slice(0, 10),
    // 今日の利用秒数
    todaysSeconds: 0,
    // 感情の選択履歴
    emotionLog: [],
  }
}

export function useStorage() {
  const [data, setData] = useState(() => {
    const saved = loadData()
    if (!saved) return getDefaultData()
    // 日付が変わっていたら今日分をリセット
    const today = new Date().toISOString().slice(0, 10)
    if (saved.todaysDate !== today) {
      return { ...saved, todaysSessions: 0, todaysDate: today, todaysSeconds: 0 }
    }
    return saved
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

  const logEmotion = useCallback((questionId, emotion) => {
    save((prev) => ({
      ...prev,
      emotionLog: [...prev.emotionLog, {
        questionId,
        emotion,
        timestamp: new Date().toISOString(),
      }],
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
    URL.revokeObjectURL(url)
  }, [data])

  return { data, unlockPage, logEmotion, incrementSession, addSeconds, exportJSON }
}
