import { motion } from 'framer-motion'

const emotions = [
  { id: 'happy', emoji: '😊', label: 'うれしい', color: '#FFD93D' },
  { id: 'sad', emoji: '😢', label: 'かなしい', color: '#A8D8EA' },
  { id: 'excited', emoji: '🤩', label: 'わくわく', color: '#FF8A65' },
  { id: 'surprised', emoji: '😲', label: 'びっくり', color: '#CE93D8' },
]

export default function EmotionSelect({ onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4">
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
