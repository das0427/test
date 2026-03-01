import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MokoCharacter from './MokoCharacter'
import { useSpeech } from '../hooks/useSpeech'

const reactions = {
  remembered: [
    'すごい！おぼえたね！モコも うれしい！',
    'ばっちり！きみは てんさいだね！',
    'さすが！もう かんぺき！',
  ],
  retry: [
    'だいじょうぶ！もういっかい みてみよう！',
    'なんども みると おぼえるよ！',
    'モコも いっしょに おぼえよう！',
  ],
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function FlashCardScreen({ questions, onComplete, onUnlock, courseId }) {
  const [cardIndex, setCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [retryQueue, setRetryQueue] = useState([])
  const [mokoMessage, setMokoMessage] = useState(null)
  const { speak } = useSpeech()

  // 現在のカードリスト = 元の問題 + リトライキュー
  const allCards = [...questions, ...retryQueue]
  const q = allCards[cardIndex]
  const isComplete = !q

  const handleFlip = useCallback(() => {
    if (isFlipped) return
    setIsFlipped(true)
    speak(`${q.correct.word}！`)
  }, [isFlipped, q, speak])

  const handleRemembered = useCallback(() => {
    const msg = pickRandom(reactions.remembered)
    setMokoMessage(msg)
    speak(msg)
    if (onUnlock) onUnlock(q.id, courseId)
    setTimeout(() => {
      setMokoMessage(null)
      setIsFlipped(false)
      setCardIndex(prev => prev + 1)
    }, 1200)
  }, [q, speak, onUnlock, courseId])

  const handleRetry = useCallback(() => {
    const msg = pickRandom(reactions.retry)
    setMokoMessage(msg)
    speak(msg)
    setRetryQueue(prev => [...prev, q])
    setTimeout(() => {
      setMokoMessage(null)
      setIsFlipped(false)
      setCardIndex(prev => prev + 1)
    }, 1200)
  }, [q, speak])

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-full px-6 bg-gradient-to-b from-warm to-cream"
      >
        <MokoCharacter mood="excited" size={140} />
        <p className="text-2xl font-bold text-moko-brown mt-4 mb-6">
          カード おしまい！がんばったね！
        </p>
        <motion.button
          whileTap={{ scale: 0.93 }}
          onClick={onComplete}
          className="bg-sun text-moko-brown text-xl font-bold py-4 px-10 rounded-3xl shadow-lg"
        >
          おしまい！
        </motion.button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 bg-gradient-to-b from-warm to-cream">
      {/* 進捗 */}
      <p className="text-moko-brown mb-2">
        {cardIndex + 1} / {allCards.length} まい
      </p>

      <MokoCharacter mood="happy" size={80} speaking={!!mokoMessage} />

      {mokoMessage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 rounded-2xl p-3 mx-4 mb-2 max-w-sm shadow"
        >
          <p className="text-sm text-moko-brown text-center">{mokoMessage}</p>
        </motion.div>
      )}

      {/* カード */}
      <motion.div
        key={`card-${cardIndex}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-64 h-80 rounded-3xl shadow-xl cursor-pointer flex items-center justify-center mb-6"
        style={{ backgroundColor: isFlipped ? '#FFF8F0' : (q.zukan?.color || '#C8B6FF') }}
        onClick={handleFlip}
      >
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <span className="text-7xl font-bold text-white drop-shadow-lg">
                {q.target}
              </span>
              <span className="text-white/70 mt-4 text-sm">タップして めくろう！</span>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <span className="text-8xl">{q.correct.emoji}</span>
              <span className="text-3xl font-bold mt-4 text-moko-brown">
                {q.correct.label}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ボタン（カードがめくられたら表示） */}
      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4"
        >
          <motion.button
            whileTap={{ scale: 0.93 }}
            onClick={handleRemembered}
            className="bg-leaf text-white text-lg font-bold py-3 px-6 rounded-2xl shadow-md"
          >
            おぼえた！
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.93 }}
            onClick={handleRetry}
            className="bg-lavender text-white text-lg font-bold py-3 px-6 rounded-2xl shadow-md"
          >
            もういっかい
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}
