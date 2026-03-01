import { useState, useMemo, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import MokoCharacter from './MokoCharacter'
import { useSpeech } from '../hooks/useSpeech'
import config from '../config'

const matchReactions = [
  'やったね！ぴったり！',
  'すごい！みつけたね！',
  'せいかい！よく おぼえてたね！',
]

const missReactions = [
  'おしい！もういっかい！',
  'ここじゃ なかったね。だいじょうぶ！',
  'つぎは みつかるよ！がんばれ！',
]

const completeReactions = [
  'ぜんぶ みつけたね！すごいすごい！',
  'かんぺき！きみの きおくりょく すごいよ！',
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function MatchingScreen({ questions, onComplete, onUnlock, courseId }) {
  const { speak } = useSpeech()
  const [mokoMessage, setMokoMessage] = useState(null)

  const pairCount = config.modes.matching.pairs[config.ageGroup] || 3
  const gridCols = pairCount <= 3 ? 3 : 4

  // カードの生成
  const cards = useMemo(() => {
    const selected = questions.slice(0, pairCount)
    const pairs = selected.flatMap(q => [
      { id: `${q.id}-text`, pairId: q.id, type: 'text', display: q.target, label: q.target },
      { id: `${q.id}-img`, pairId: q.id, type: 'image', display: q.correct.emoji, label: q.correct.label },
    ])
    return shuffle(pairs)
  }, [questions, pairCount])

  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [locked, setLocked] = useState(false)

  const isComplete = matched.length === pairCount

  useEffect(() => {
    if (isComplete) {
      const msg = pickRandom(completeReactions)
      setMokoMessage(msg)
      speak(msg)
    }
  }, [isComplete, speak])

  const handleCardTap = useCallback((index) => {
    if (locked) return
    if (flipped.includes(index)) return
    if (matched.includes(cards[index].pairId)) return

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setLocked(true)
      const card1 = cards[newFlipped[0]]
      const card2 = cards[newFlipped[1]]

      if (card1.pairId === card2.pairId && card1.type !== card2.type) {
        // マッチ成功
        const msg = pickRandom(matchReactions)
        setMokoMessage(msg)
        speak(msg)
        if (onUnlock) onUnlock(card1.pairId, courseId)
        setMatched(prev => [...prev, card1.pairId])
        setTimeout(() => {
          setFlipped([])
          setLocked(false)
          setMokoMessage(null)
        }, 800)
      } else {
        // マッチ失敗
        const msg = pickRandom(missReactions)
        setMokoMessage(msg)
        speak(msg)
        setTimeout(() => {
          setFlipped([])
          setLocked(false)
          setMokoMessage(null)
        }, 1200)
      }
    }
  }, [flipped, matched, cards, locked, speak, onUnlock, courseId])

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center h-full px-6 bg-gradient-to-b from-warm to-cream"
      >
        <MokoCharacter mood="excited" size={140} />
        <p className="text-2xl font-bold text-moko-brown mt-4 mb-2">
          ぜんぶ みつけたね！
        </p>
        {mokoMessage && (
          <p className="text-lg text-moko-brown mb-6">{mokoMessage}</p>
        )}
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
      <MokoCharacter mood="happy" size={70} speaking={!!mokoMessage} />

      {mokoMessage && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 rounded-2xl p-2 mx-4 mb-2 max-w-sm shadow"
        >
          <p className="text-sm text-moko-brown text-center">{mokoMessage}</p>
        </motion.div>
      )}

      <p className="text-moko-brown mb-3">
        {matched.length}/{pairCount} ペア みつけたよ！
      </p>

      <div
        className="grid gap-3 w-full max-w-md"
        style={{ gridTemplateColumns: `repeat(${gridCols}, 1fr)` }}
      >
        {cards.map((card, i) => {
          const isShown = flipped.includes(i) || matched.includes(card.pairId)
          const isMatched = matched.includes(card.pairId)

          return (
            <motion.div
              key={card.id}
              whileTap={!isShown ? { scale: 0.95 } : {}}
              onClick={() => handleCardTap(i)}
              className={`aspect-square rounded-2xl shadow-md flex items-center justify-center cursor-pointer ${
                isMatched ? 'ring-2 ring-leaf' : ''
              }`}
              style={{
                backgroundColor: isShown ? '#FFF8F0' : '#C8B6FF',
              }}
            >
              {isShown ? (
                <span className={card.type === 'text' ? 'text-4xl font-bold text-moko-brown' : 'text-5xl'}>
                  {card.display}
                </span>
              ) : (
                <span className="text-4xl">❓</span>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
