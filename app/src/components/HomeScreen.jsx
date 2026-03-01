import { motion } from 'framer-motion'
import MokoCharacter from './MokoCharacter'
import config from '../config'
import { getTotalPages } from '../data/index'

export default function HomeScreen({ onStart, onZukan, unlockedCount }) {
  const totalPages = getTotalPages()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-full px-6 bg-gradient-to-b from-sky/30 to-cream"
    >
      {/* タイトル */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-moko-brown mb-2"
      >
        そだてる ずかん
      </motion.h1>

      {/* モコ登場 */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.4 }}
      >
        <MokoCharacter mood="happy" size={180} />
      </motion.div>

      {/* 挨拶 */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-xl text-moko-brown mt-2 mb-8 text-center"
      >
        {config.childName}ちゃん、
        <br />
        きょうもモコとあそぼう！
      </motion.p>

      {/* ボタン */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <motion.button
          whileTap={{ scale: 0.93 }}
          whileHover={{ scale: 1.03 }}
          onClick={onStart}
          className="bg-sun text-moko-brown text-2xl font-bold py-5 rounded-3xl shadow-lg active:shadow-md"
        >
          あそぶ！
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.93 }}
          whileHover={{ scale: 1.03 }}
          onClick={onZukan}
          className="bg-leaf text-white text-xl font-bold py-4 rounded-3xl shadow-lg active:shadow-md"
        >
          ずかん ({unlockedCount}/{totalPages})
        </motion.button>
      </div>
    </motion.div>
  )
}
