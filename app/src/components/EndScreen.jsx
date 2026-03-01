import { useMemo } from 'react'
import { motion } from 'framer-motion'
import MokoCharacter from './MokoCharacter'
import config from '../config'

export default function EndScreen({ onHome }) {
  const starPositions = useMemo(() =>
    Array.from({ length: 8 }, () => Math.random() * 300), []
  )
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center h-full px-6 bg-gradient-to-b from-lavender/30 to-cream"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring' }}
      >
        <MokoCharacter mood="happy" size={160} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-2xl font-bold text-moko-brown mt-4 mb-2 text-center"
      >
        きょうも がんばったね！
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-lg text-moko-brown mb-8 text-center"
      >
        {config.childName}ちゃん、
        <br />
        また あした あそぼうね！
      </motion.p>

      {/* 星が降るアニメーション */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ y: -20, x: starPositions[i], opacity: 0 }}
            animate={{ y: 500, opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
            }}
            className="absolute text-3xl"
          >
            ⭐
          </motion.span>
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.93 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={onHome}
        className="bg-warm text-moko-brown text-xl font-bold py-4 px-10 rounded-3xl shadow-lg z-10"
      >
        ホームにもどる
      </motion.button>
    </motion.div>
  )
}
