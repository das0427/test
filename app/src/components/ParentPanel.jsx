import { motion } from 'framer-motion'
import { COURSES, getCourseData, getTotalPages } from '../data/index'

export default function ParentPanel({ data, onExport, onBack }) {
  const totalPages = getTotalPages()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-full px-4 py-6 bg-cream overflow-y-auto"
    >
      <h2 className="text-xl font-bold text-moko-brown mb-4">保護者パネル</h2>

      <div className="bg-white rounded-xl p-4 shadow mb-4">
        <h3 className="font-bold text-moko-brown mb-2">全体の進捗</h3>
        <p className="text-sm text-gray-600">
          図鑑ページ: {data.unlockedPages.length} / {totalPages} 解放済み
        </p>
        <p className="text-sm text-gray-600">
          今日のセッション: {data.todaysSessions} 回
        </p>
        <p className="text-sm text-gray-600">
          今日の利用時間: {Math.floor(data.todaysSeconds / 60)} 分 {data.todaysSeconds % 60} 秒
        </p>
      </div>

      <div className="bg-white rounded-xl p-4 shadow mb-4">
        <h3 className="font-bold text-moko-brown mb-2">コース別進捗</h3>
        <div className="space-y-2">
          {COURSES.map((course) => {
            const courseData = getCourseData(course.id)
            const unlockedCount = courseData.filter(q => data.unlockedPages.includes(q.id)).length
            const percent = courseData.length > 0 ? Math.round((unlockedCount / courseData.length) * 100) : 0
            return (
              <div key={course.id}>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{course.name}</span>
                  <span>{unlockedCount}/{courseData.length} ({percent}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-400 rounded-full h-2 transition-all"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow mb-4">
        <h3 className="font-bold text-moko-brown mb-2">感情の選択履歴</h3>
        {data.emotionLog.length === 0 ? (
          <p className="text-sm text-gray-400">まだ記録がありません</p>
        ) : (
          <div className="max-h-40 overflow-y-auto">
            {data.emotionLog.slice(-10).reverse().map((log, i) => (
              <p key={i} className="text-sm text-gray-600">
                [{log.questionId}] {{ happy: '😊', sad: '😢', excited: '🤩', surprised: '😲' }[log.emotion] || '❓'} {log.emotion}
                <span className="text-gray-400 ml-2">
                  {new Date(log.timestamp).toLocaleString('ja-JP')}
                </span>
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        <button
          onClick={onExport}
          className="bg-sky text-white font-bold py-3 rounded-xl shadow"
        >
          データをJSONでエクスポート
        </button>
        <button
          onClick={onBack}
          className="bg-warm text-moko-brown font-bold py-3 rounded-xl shadow"
        >
          もどる
        </button>
      </div>
    </motion.div>
  )
}
