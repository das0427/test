import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MokoCharacter from './MokoCharacter'
import EmotionSelect from './EmotionSelect'
import { useSpeech } from '../hooks/useSpeech'

// クイズの状態
const PHASE_QUESTION = 'question'
const PHASE_WRONG = 'wrong'
const PHASE_CORRECT = 'correct'
const PHASE_EMOTION = 'emotion'
const PHASE_RESPONSE = 'response'

// コースタイプに応じた出題文を生成
function getQuestionText(q) {
  if (q.questionOverride) return q.questionOverride
  switch (q.courseType) {
    case 'suuji':
      return `「${q.target}」は どれかな？`
    case 'iro':
      return `「${q.target}」いろの ものは どれかな？`
    case 'doubutsu':
      return `「${q.target}」は どんな どうぶつかな？`
    case 'hiragana':
    default:
      return `「${q.target}」のつく ことばは どれかな？`
  }
}

function getQuestionSuffix(q) {
  if (q.questionOverride) return null
  switch (q.courseType) {
    case 'suuji':
      return 'は？'
    case 'iro':
      return 'いろの ものは？'
    case 'doubutsu':
      return 'は？'
    case 'hiragana':
    default:
      return 'のつく ことばは？'
  }
}

function getMokoMood(feeling) {
  const moodMap = {
    'うれしい': 'happy',
    'かなしい': 'sad',
    'わくわく': 'excited',
    'びっくり': 'surprised',
    'しあわせ': 'happy',
  }
  return moodMap[feeling] || 'happy'
}

function getEmotionResponse(emotion, emotionData) {
  if (emotion === 'sad') return emotionData.responseSad
  return emotionData.responseHappy
}

export default function QuizScreen({ questions, onComplete, onUnlock, onLogEmotion, courseId }) {
  const [qIndex, setQIndex] = useState(0)
  const [phase, setPhase] = useState(PHASE_QUESTION)
  const [selectedEmotion, setSelectedEmotion] = useState(null)
  const [wrongCount, setWrongCount] = useState(0)
  const { speak } = useSpeech()
  const prevQIndexRef = useRef(-1)

  const q = questions && questions.length > 0 ? questions[qIndex] : null

  // 選択肢をシャッフル
  const choices = useMemo(() => {
    if (!q) return []
    const arr = [q.correct, ...q.wrong]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [q])

  // フェーズが変わったら読み上げ
  useEffect(() => {
    if (!q) return
    if (phase === PHASE_QUESTION && prevQIndexRef.current !== qIndex) {
      prevQIndexRef.current = qIndex
      speak(getQuestionText(q))
    } else if (phase === PHASE_CORRECT) {
      speak(`せいかい！ ${q.correct.word}！`)
    } else if (phase === PHASE_EMOTION) {
      speak(q.emotion.mokoSays)
    } else if (phase === PHASE_WRONG) {
      const msg = wrongCount >= 2
        ? `ヒント！ 「${q.correct.word}」を さがしてね！`
        : 'おしい！ もういっかい やってみよう！'
      speak(msg)
    }
  }, [phase, q, speak, qIndex, wrongCount])

  const handleChoice = (choice) => {
    if (choice.word === q.correct.word) {
      setWrongCount(0)
      setPhase(PHASE_CORRECT)
      onUnlock(q.id, courseId)
    } else {
      setWrongCount((prev) => prev + 1)
      setPhase(PHASE_WRONG)
    }
  }

  const handleRetry = () => {
    setPhase(PHASE_QUESTION)
  }

  const handleCorrectContinue = () => {
    setPhase(PHASE_EMOTION)
  }

  const handleEmotionSelect = (emotion) => {
    setSelectedEmotion(emotion)
    onLogEmotion(q.id, emotion, courseId)
    const responseText = getEmotionResponse(emotion, q.emotion)
    speak(responseText)
    setPhase(PHASE_RESPONSE)
  }

  const handleNext = () => {
    if (qIndex + 1 >= questions.length) {
      onComplete()
    } else {
      setQIndex(qIndex + 1)
      setPhase(PHASE_QUESTION)
      setSelectedEmotion(null)
      setWrongCount(0)
    }
  }

  // 空の問題リスト対応
  if (!q) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-4 bg-gradient-to-b from-warm to-cream">
        <MokoCharacter mood="sad" size={120} />
        <p className="text-xl text-moko-brown mt-4">もんだいが ないよ…</p>
        <button
          onClick={onComplete}
          className="bg-warm text-moko-brown font-bold py-3 px-8 rounded-xl shadow mt-4"
        >
          もどる
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 bg-gradient-to-b from-warm to-cream">
      {/* 進捗 */}
      <div className="flex gap-2 mb-4">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`w-4 h-4 rounded-full ${
              i < qIndex ? 'bg-leaf' : i === qIndex ? 'bg-sun' : 'bg-white/60'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* ===== 問題フェーズ ===== */}
        {phase === PHASE_QUESTION && (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex flex-col items-center w-full"
          >
            <MokoCharacter mood="happy" size={120} speaking />

            <p className="text-2xl font-bold text-moko-brown mt-3 mb-6">
              {q.questionOverride ? (
                q.questionOverride
              ) : (
                <>「<span className="text-4xl text-peach">{q.target}</span>」{getQuestionSuffix(q)}</>
              )}
            </p>

            <div className="flex flex-col gap-3 w-full max-w-sm">
              {choices.map((c) => (
                <motion.button
                  key={c.word}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => handleChoice(c)}
                  className="bg-white text-moko-brown text-2xl font-bold py-5 rounded-2xl shadow-md flex items-center justify-center gap-3"
                >
                  <span className="text-3xl">{c.emoji}</span>
                  <span>{c.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ===== 不正解フェーズ ===== */}
        {phase === PHASE_WRONG && (
          <motion.div
            key="wrong"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ x: [0, -10, 10, -10, 10, 0] }}
              transition={{ duration: 0.4 }}
            >
              <MokoCharacter mood="happy" size={120} speaking />
            </motion.div>

            <p className="text-xl font-bold text-moko-brown mt-4 mb-2">
              {wrongCount >= 2
                ? `ヒント！「${q.correct.word}」を さがしてね！`
                : 'おしい！'}
            </p>
            <p className="text-lg text-moko-brown mb-6">
              もういっかい やってみよう！
            </p>

            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={handleRetry}
              className="bg-peach text-white text-xl font-bold py-4 px-10 rounded-3xl shadow-lg"
            >
              もういっかい！
            </motion.button>
          </motion.div>
        )}

        {/* ===== 正解フェーズ ===== */}
        {phase === PHASE_CORRECT && (
          <motion.div
            key="correct"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <MokoCharacter mood="excited" size={140} />
            </motion.div>

            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-3xl font-bold text-sun mt-4 mb-2"
            >
              せいかい！
            </motion.p>

            <p className="text-xl text-moko-brown mb-2">
              ずかんに <span className="font-bold">「{q.zukan.title}」</span> が ふえたよ！
            </p>

            {/* 図鑑プレビュー */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-48 h-32 rounded-xl shadow-lg flex items-center justify-center text-5xl mb-6"
              style={{ backgroundColor: q.zukan.color }}
            >
              {q.correct.emoji}
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={handleCorrectContinue}
              className="bg-lavender text-white text-xl font-bold py-4 px-10 rounded-3xl shadow-lg"
            >
              モコの きもちを きこう
            </motion.button>
          </motion.div>
        )}

        {/* ===== 感情フェーズ ===== */}
        {phase === PHASE_EMOTION && (
          <motion.div
            key="emotion"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <MokoCharacter
              mood={getMokoMood(q.emotion.mokoFeeling)}
              size={130}
              speaking
            />

            <div className="bg-white/80 rounded-2xl p-4 mx-4 mt-3 mb-6 max-w-sm shadow">
              <p className="text-lg text-moko-brown text-center leading-relaxed">
                {q.emotion.mokoSays}
              </p>
            </div>

            <p className="text-xl font-bold text-moko-brown mb-4">
              モコに きもちを おしえてあげよう！
            </p>

            <EmotionSelect onSelect={handleEmotionSelect} />
          </motion.div>
        )}

        {/* ===== 応答フェーズ ===== */}
        {phase === PHASE_RESPONSE && (
          <motion.div
            key="response"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center"
          >
            <MokoCharacter mood="happy" size={130} />

            <div className="bg-white/80 rounded-2xl p-4 mx-4 mt-3 mb-6 max-w-sm shadow">
              <p className="text-lg text-moko-brown text-center leading-relaxed">
                {getEmotionResponse(selectedEmotion, q.emotion)}
              </p>
            </div>

            <p className="text-moko-brown mb-4">
              おしえてくれて ありがとう！
            </p>

            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={handleNext}
              className="bg-sun text-moko-brown text-xl font-bold py-4 px-10 rounded-3xl shadow-lg"
            >
              {qIndex + 1 >= questions.length ? 'おしまい！' : 'つぎへ'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
