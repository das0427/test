import { useState } from 'react'
import { motion } from 'framer-motion'
import { COURSES, getCourseData, getTotalPages } from '../data/index'

export default function ZukanScreen({ unlockedPages, onBack }) {
  const [selectedCourse, setSelectedCourse] = useState(null)

  const totalPages = getTotalPages()
  const totalUnlocked = unlockedPages.length

  // 個別コース図鑑
  if (selectedCourse) {
    const courseData = getCourseData(selectedCourse)
    const courseInfo = COURSES.find(c => c.id === selectedCourse)

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center h-full px-4 py-6 bg-gradient-to-b from-leaf/20 to-cream overflow-y-auto"
      >
        <h2 className="text-2xl font-bold text-moko-brown mb-1">
          {courseInfo?.name || ''} の ずかん
        </h2>
        <p className="text-sm text-moko-brown/70 mb-4">
          {courseData.filter(q => unlockedPages.includes(q.id)).length}/{courseData.length} ページ
        </p>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
          {courseData.map((item) => {
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
                    <span className="text-sm font-bold text-white drop-shadow text-center leading-tight">
                      {item.zukan.title}
                    </span>
                    <span className="text-3xl font-bold text-white/80 mt-1">
                      {item.target}
                    </span>
                    {item.bonus && (
                      <span className="text-xs text-white/70 mt-1 text-center">
                        {item.bonus.fact}
                      </span>
                    )}
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

        <motion.button
          whileTap={{ scale: 0.93 }}
          onClick={() => setSelectedCourse(null)}
          className="bg-warm text-moko-brown text-xl font-bold py-4 px-10 rounded-3xl shadow-lg mb-4"
        >
          もどる
        </motion.button>
      </motion.div>
    )
  }

  // コース一覧表示
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center h-full px-4 py-6 bg-gradient-to-b from-leaf/20 to-cream overflow-y-auto"
    >
      <h2 className="text-2xl font-bold text-moko-brown mb-1">モコの ずかん</h2>
      <p className="text-sm text-moko-brown/70 mb-4">
        ぜんぶで {totalUnlocked}/{totalPages} ページ あつめたよ！
      </p>

      <div className="flex flex-col gap-3 w-full max-w-md mb-8">
        {COURSES.map((course) => {
          const courseData = getCourseData(course.id)
          const unlockedCount = courseData.filter(q => unlockedPages.includes(q.id)).length

          return (
            <motion.button
              key={course.id}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCourse(course.id)}
              className="flex items-center gap-3 bg-white rounded-2xl p-3 shadow-md"
            >
              <span
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ backgroundColor: course.color }}
              >
                {course.icon}
              </span>
              <div className="flex-1 text-left">
                <span className="text-lg font-bold text-moko-brown">{course.name}</span>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-leaf rounded-full h-2 transition-all"
                    style={{ width: `${courseData.length > 0 ? (unlockedCount / courseData.length) * 100 : 0}%` }}
                  />
                </div>
              </div>
              <span className="text-sm text-moko-brown/70">
                {unlockedCount}/{courseData.length}
              </span>
            </motion.button>
          )
        })}
      </div>

      <motion.button
        whileTap={{ scale: 0.93 }}
        onClick={onBack}
        className="bg-warm text-moko-brown text-xl font-bold py-4 px-10 rounded-3xl shadow-lg mb-4"
      >
        もどる
      </motion.button>
    </motion.div>
  )
}
