// ===================================
// うちの子専用カスタマイズ設定
// ここを書き換えるだけでパーソナライズ完了！
// ===================================

const config = {
  // 子供の名前（呼びかけに使う）
  childName: 'おともだち',

  // 年齢設定 ('young' = 3-4歳, 'older' = 5-6歳)
  ageGroup: 'young',

  // 1セッションの問題数
  questionsPerSession: 5,

  // セッション制限時間（秒）
  sessionTimeLimitSeconds: 5 * 60,

  // 1日の利用上限（分）
  dailyLimitMinutes: 30,

  // --- モード別設定 ---
  modes: {
    quiz: { enabled: true },
    flashcard: {
      enabled: true,
      cardsPerSession: 10,
    },
    matching: {
      enabled: true,
      pairs: { young: 3, older: 6 },
    },
  },

  // --- コースアンロック設定 ---
  courseUnlock: {
    requirePreviousCourse: true,
    requiredScorePercent: 80,
  },
}

export default config
