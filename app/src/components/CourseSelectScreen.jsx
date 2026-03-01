import { motion } from 'framer-motion'
import MokoCharacter from './MokoCharacter'
import { COURSES, getCourseData, isCourseUnlocked } from '../data/index'

export default function CourseSelectScreen({ unlockedPages, onSelect, onBack }) {
  // カテゴリ別にコースをグループ化
  const categories = [
    { key: 'hiragana', label: 'ひらがな' },
    { key: 'suuji', label: 'すうじ' },
    { key: 'iro', label: 'いろ' },
    { key: 'doubutsu', label: 'どうぶつ' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center h-full px-4 py-6 bg-gradient-to-b from-warm to-cream overflow-y-auto"
    >
      <MokoCharacter mood="happy" size={80} />
      <h2 className="text-2xl font-bold text-moko-brown mb-1">コースを えらぼう！</h2>
      <p className="text-sm text-moko-brown/70 mb-4">どれを べんきょうする？</p>

      {categories.map((cat) => {
        const coursesInCategory = COURSES.filter(c => c.category === cat.key)
        if (coursesInCategory.length === 0) return null

        return (
          <div key={cat.key} className="w-full max-w-md mb-4">
            <h3 className="text-lg font-bold text-moko-brown mb-2 px-1">{cat.label}</h3>
            <div className="grid grid-cols-2 gap-3">
              {coursesInCategory.map((course) => {
                const unlocked = isCourseUnlocked(course.id, unlockedPages)
                const data = getCourseData(course.id)
                const completedCount = data.filter(q => unlockedPages.includes(q.id)).length

                return (
                  <motion.button
                    key={course.id}
                    whileTap={unlocked ? { scale: 0.95 } : {}}
                    onClick={() => unlocked && onSelect(course.id)}
                    disabled={!unlocked}
                    className={`rounded-2xl p-3 shadow-md flex flex-col items-center justify-center aspect-[4/3] ${
                      unlocked ? 'active:shadow-sm' : 'opacity-50'
                    }`}
                    style={{ backgroundColor: unlocked ? course.color : '#E0E0E0' }}
                  >
                    <span className="text-3xl mb-1">
                      {unlocked ? course.icon : '🔒'}
                    </span>
                    <span className="text-sm font-bold text-moko-brown">
                      {course.name}
                    </span>
                    {unlocked && (
                      <span className="text-xs text-moko-brown/70 mt-1">
                        {completedCount}/{data.length}
                      </span>
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>
        )
      })}

      <motion.button
        whileTap={{ scale: 0.93 }}
        onClick={onBack}
        className="bg-warm text-moko-brown text-lg font-bold py-3 px-8 rounded-3xl shadow-lg mt-2 mb-4"
      >
        もどる
      </motion.button>
    </motion.div>
  )
}
