import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import HomeScreen from './components/HomeScreen'
import QuizScreen from './components/QuizScreen'
import ZukanScreen from './components/ZukanScreen'
import EndScreen from './components/EndScreen'
import ParentPanel from './components/ParentPanel'
import { useStorage } from './hooks/useStorage'
import { useSpeech } from './hooks/useSpeech'
import hiraganaData from './data/hiragana'
import config from './config'

const SCREEN_HOME = 'home'
const SCREEN_QUIZ = 'quiz'
const SCREEN_ZUKAN = 'zukan'
const SCREEN_END = 'end'
const SCREEN_PARENT = 'parent'

export default function App() {
  const [screen, setScreen] = useState(SCREEN_HOME)
  const { data, unlockPage, logEmotion, incrementSession, addSeconds, exportJSON } = useStorage()
  const { speak } = useSpeech()
  const timerRef = useRef(null)
  const sessionStartRef = useRef(null)

  // クイズの問題をシャッフル
  const questions = useMemo(() => {
    const shuffled = [...hiraganaData]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled.slice(0, config.questionsPerSession)
  }, [screen]) // screen変更でリシャッフル

  // セッション開始時にタイマー開始
  useEffect(() => {
    if (screen === SCREEN_QUIZ) {
      sessionStartRef.current = Date.now()
      timerRef.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - sessionStartRef.current) / 1000)
        if (elapsed >= config.sessionTimeLimitSeconds) {
          clearInterval(timerRef.current)
          speak('じかんだよ！ きょうは ここまで！')
          setScreen(SCREEN_END)
        }
      }, 1000)
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        // セッション時間を記録
        if (sessionStartRef.current) {
          const elapsed = Math.floor((Date.now() - sessionStartRef.current) / 1000)
          addSeconds(elapsed)
        }
      }
    }
  }, [screen, speak, addSeconds])

  const handleStart = useCallback(() => {
    // 日次利用制限チェック
    if (data.todaysSeconds >= config.dailyLimitMinutes * 60) {
      speak('きょうは たくさん あそんだね！ また あした あそぼう！')
      return
    }
    setScreen(SCREEN_QUIZ)
  }, [data.todaysSeconds, speak])

  const handleQuizComplete = useCallback(() => {
    incrementSession()
    setScreen(SCREEN_END)
  }, [incrementSession])

  // 保護者パネルへの隠し操作（右上を3回タップ）
  const parentTapRef = useRef(0)
  const parentTapTimerRef = useRef(null)
  const handleParentAccess = useCallback(() => {
    parentTapRef.current += 1
    if (parentTapRef.current >= 3) {
      parentTapRef.current = 0
      setScreen(SCREEN_PARENT)
    }
    clearTimeout(parentTapTimerRef.current)
    parentTapTimerRef.current = setTimeout(() => {
      parentTapRef.current = 0
    }, 2000)
  }, [])

  return (
    <div className="h-full w-full max-w-lg mx-auto relative overflow-hidden">
      {/* 保護者アクセス用の隠しタップエリア */}
      {screen === SCREEN_HOME && (
        <button
          onClick={handleParentAccess}
          className="absolute top-2 right-2 w-10 h-10 z-50 opacity-0"
          aria-label="保護者パネル"
        />
      )}

      <AnimatePresence mode="wait">
        {screen === SCREEN_HOME && (
          <HomeScreen
            key="home"
            onStart={handleStart}
            onZukan={() => setScreen(SCREEN_ZUKAN)}
            unlockedCount={data.unlockedPages.length}
          />
        )}

        {screen === SCREEN_QUIZ && (
          <QuizScreen
            key="quiz"
            questions={questions}
            onComplete={handleQuizComplete}
            onUnlock={unlockPage}
            onLogEmotion={logEmotion}
          />
        )}

        {screen === SCREEN_ZUKAN && (
          <ZukanScreen
            key="zukan"
            unlockedPages={data.unlockedPages}
            onBack={() => setScreen(SCREEN_HOME)}
          />
        )}

        {screen === SCREEN_END && (
          <EndScreen
            key="end"
            onHome={() => setScreen(SCREEN_HOME)}
          />
        )}

        {screen === SCREEN_PARENT && (
          <ParentPanel
            key="parent"
            data={data}
            onExport={exportJSON}
            onBack={() => setScreen(SCREEN_HOME)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
