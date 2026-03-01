import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import HomeScreen from './components/HomeScreen'
import CourseSelectScreen from './components/CourseSelectScreen'
import ModeSelectScreen from './components/ModeSelectScreen'
import QuizScreen from './components/QuizScreen'
import FlashCardScreen from './components/FlashCardScreen'
import MatchingScreen from './components/MatchingScreen'
import ZukanScreen from './components/ZukanScreen'
import EndScreen from './components/EndScreen'
import ParentPanel from './components/ParentPanel'
import { useStorage } from './hooks/useStorage'
import { useSpeech } from './hooks/useSpeech'
import { getCourseData, COURSES } from './data/index'
import config from './config'

const SCREEN_HOME = 'home'
const SCREEN_COURSE_SELECT = 'course_select'
const SCREEN_MODE_SELECT = 'mode_select'
const SCREEN_QUIZ = 'quiz'
const SCREEN_FLASHCARD = 'flashcard'
const SCREEN_MATCHING = 'matching'
const SCREEN_ZUKAN = 'zukan'
const SCREEN_END = 'end'
const SCREEN_PARENT = 'parent'

// アクティブな学習画面かどうか（タイマー対象）
const ACTIVE_SCREENS = [SCREEN_QUIZ, SCREEN_FLASHCARD, SCREEN_MATCHING]

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function App() {
  const [screen, setScreen] = useState(SCREEN_HOME)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedMode, setSelectedMode] = useState(null)
  const [questions, setQuestions] = useState([])
  const { data, unlockPage, logEmotion, incrementSession, addSeconds, exportJSON } = useStorage()
  const { speak } = useSpeech()
  const timerRef = useRef(null)
  const sessionStartRef = useRef(null)

  // セッション開始時にタイマー開始
  useEffect(() => {
    if (ACTIVE_SCREENS.includes(screen)) {
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
    setScreen(SCREEN_COURSE_SELECT)
  }, [data.todaysSeconds, speak])

  const handleCourseSelect = useCallback((courseId) => {
    setSelectedCourse(courseId)
    setScreen(SCREEN_MODE_SELECT)
  }, [])

  const handleModeSelect = useCallback((modeId) => {
    setSelectedMode(modeId)

    // シャッフルは選択確定時に1回だけ実行
    const courseData = getCourseData(selectedCourse)
    const shuffled = shuffleArray(courseData)

    const limit = modeId === 'quiz'
      ? config.questionsPerSession
      : modeId === 'flashcard'
      ? config.modes.flashcard.cardsPerSession
      : shuffled.length
    setQuestions(shuffled.slice(0, limit))

    const screenMap = {
      quiz: SCREEN_QUIZ,
      flashcard: SCREEN_FLASHCARD,
      matching: SCREEN_MATCHING,
    }
    setScreen(screenMap[modeId] ?? SCREEN_QUIZ)
  }, [selectedCourse])

  const handleSessionComplete = useCallback(() => {
    incrementSession()
    setScreen(SCREEN_END)
  }, [incrementSession])

  const handleGoHome = useCallback(() => {
    setSelectedCourse(null)
    setSelectedMode(null)
    setScreen(SCREEN_HOME)
  }, [])

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

  // 選択中のコース名
  const selectedCourseName = selectedCourse
    ? COURSES.find(c => c.id === selectedCourse)?.name || ''
    : ''

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

        {screen === SCREEN_COURSE_SELECT && (
          <CourseSelectScreen
            key="course_select"
            unlockedPages={data.unlockedPages}
            onSelect={handleCourseSelect}
            onBack={handleGoHome}
          />
        )}

        {screen === SCREEN_MODE_SELECT && (
          <ModeSelectScreen
            key="mode_select"
            courseName={selectedCourseName}
            onSelect={handleModeSelect}
            onBack={() => setScreen(SCREEN_COURSE_SELECT)}
          />
        )}

        {screen === SCREEN_QUIZ && (
          <QuizScreen
            key="quiz"
            questions={questions}
            onComplete={handleSessionComplete}
            onUnlock={unlockPage}
            onLogEmotion={logEmotion}
            courseId={selectedCourse}
          />
        )}

        {screen === SCREEN_FLASHCARD && (
          <FlashCardScreen
            key="flashcard"
            questions={questions}
            onComplete={handleSessionComplete}
            onUnlock={unlockPage}
            courseId={selectedCourse}
          />
        )}

        {screen === SCREEN_MATCHING && (
          <MatchingScreen
            key="matching"
            questions={questions}
            onComplete={handleSessionComplete}
            onUnlock={unlockPage}
            courseId={selectedCourse}
          />
        )}

        {screen === SCREEN_ZUKAN && (
          <ZukanScreen
            key="zukan"
            unlockedPages={data.unlockedPages}
            onBack={handleGoHome}
          />
        )}

        {screen === SCREEN_END && (
          <EndScreen
            key="end"
            onHome={handleGoHome}
          />
        )}

        {screen === SCREEN_PARENT && (
          <ParentPanel
            key="parent"
            data={data}
            onExport={exportJSON}
            onBack={handleGoHome}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
