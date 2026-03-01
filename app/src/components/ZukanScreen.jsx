import { motion } from 'framer-motion'
import hiraganaData from '../data/hiragana'

export default function ZukanScreen({ unlockedPages, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center h-full px-4 py-6 bg-gradient-to-b from-leaf/20 to-cream overflow-y-auto"
    >
      <h2 className="text-2xl font-bold text-moko-brown mb-6">モコの ずかん</h2>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
        {hiraganaData.map((item) => {
          const unlocked = unlockedPages.includes(item.id)
          return (
            <motion.div
              key={item.id}
              whileTap={unlocked ? { scale: 0.95 } : {}}
              className={`rounded-2xl shadow-md p-4 flex flex-col items-center justify-center aspect-square ${
                unlocked ? '' : 'bg-gray-200'
              }`}
              style={unlocked ? { backgroundColor: item.zukan.color } : {}}
            >
              {unlocked ? (
                <>
                  <span className="text-5xl mb-2">{item.correct.emoji}</span>
                  <span className="text-lg font-bold text-white drop-shadow">
                    {item.zukan.title}
                  </span>
                  <span className="text-3xl font-bold text-white/80 mt-1">
                    {item.target}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-4xl mb-2">❓</span>
                  <span className="text-lg font-bold text-gray-400">???</span>
                  <span className="text-3xl font-bold text-gray-300 mt-1">
                    {item.target}
                  </span>
                </>
              )}
            </motion.div>
          )
        })}
      </div>

      <p className="text-moko-brown mb-4">
        {unlockedPages.length}/{hiraganaData.length} ページ あつめたよ！
      </p>

      <motion.button
        whileTap={{ scale: 0.93 }}
        onClick={onBack}
        className="bg-warm text-moko-brown text-xl font-bold py-4 px-10 rounded-3xl shadow-lg"
      >
        もどる
      </motion.button>
    </motion.div>
  )
}
