import { motion } from 'framer-motion'
import MokoCharacter from './MokoCharacter'
import config from '../config'

const MODES = [
  {
    id: 'quiz',
    name: 'クイズ',
    icon: '❓',
    description: 'もんだいに こたえよう！',
    color: '#FFD93D',
    configKey: 'quiz',
  },
  {
    id: 'flashcard',
    name: 'カード',
    icon: '🃏',
    description: 'カードを めくって おぼえよう！',
    color: '#A8D8EA',
    configKey: 'flashcard',
  },
  {
    id: 'matching',
    name: 'マッチング',
    icon: '🎯',
    description: 'おなじ ペアを みつけよう！',
    color: '#B5EAD7',
    configKey: 'matching',
  },
]

export default function ModeSelectScreen({ courseName, onSelect, onBack }) {
  const enabledModes = MODES.filter(m => config.modes[m.configKey]?.enabled !== false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full px-4 bg-gradient-to-b from-warm to-cream"
    >
      <MokoCharacter mood="happy" size={100} />
      <h2 className="text-xl font-bold text-moko-brown mb-1 mt-2">
        {courseName}
      </h2>
      <p className="text-lg text-moko-brown mb-6">どの モードで あそぶ？</p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        {enabledModes.map((mode) => (
          <motion.button
            key={mode.id}
            whileTap={{ scale: 0.93 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => onSelect(mode.id)}
            className="flex items-center gap-4 bg-white text-moko-brown text-xl font-bold py-4 px-5 rounded-2xl shadow-md"
          >
            <span
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: mode.color }}
            >
              {mode.icon}
            </span>
            <div className="flex flex-col items-start">
              <span className="text-lg font-bold">{mode.name}</span>
              <span className="text-xs text-moko-brown/70 font-normal">
                {mode.description}
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.93 }}
        onClick={onBack}
        className="bg-warm text-moko-brown text-lg font-bold py-3 px-8 rounded-3xl shadow-lg mt-8"
      >
        もどる
      </motion.button>
    </motion.div>
  )
}
