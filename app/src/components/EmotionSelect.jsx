import { motion } from 'framer-motion'

const emotions = [
  { id: 'happy', emoji: '😊', label: 'うれしい', color: '#FFD93D' },
  { id: 'sad', emoji: '😢', label: 'かなしい', color: '#A8D8EA' },
]

export default function EmotionSelect({ onSelect }) {
  return (
    <div className="flex gap-6">
      {emotions.map((e) => (
        <motion.button
          key={e.id}
          whileTap={{ scale: 0.85 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => onSelect(e.id)}
          className="flex flex-col items-center gap-2 p-4 rounded-2xl shadow-md"
          style={{ backgroundColor: e.color + '40' }}
        >
          <span className="text-5xl">{e.emoji}</span>
          <span className="text-lg font-bold text-moko-brown">{e.label}</span>
        </motion.button>
      ))}
    </div>
  )
}
