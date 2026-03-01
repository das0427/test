// ひらがなクイズデータ（や行 3文字）- テーマ: あそびとぼうけん

const hiraganaYaData = [
  {
    id: 'ya',
    target: 'や',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'やま', label: 'やま', emoji: '⛰️' },
    wrong: [
      { word: 'うみ', label: 'うみ', emoji: '🌊' },
      { word: 'かわ', label: 'かわ', emoji: '🏞️' },
    ],
    zukan: { title: 'たかい やま', scene: 'モコが山の頂上で万歳している', color: '#8D6E63' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'やまの てっぺん！せかいが ぜんぶ みえるよ！わくわく！',
      responseHappy: 'すごい けしきだよね！がんばって のぼった かいが あったね！',
      responseSad: 'のぼるの つかれちゃった？ おにぎり たべよう',
    },
  },
  {
    id: 'yu',
    target: 'ゆ',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'ゆき', label: 'ゆき', emoji: '❄️' },
    wrong: [
      { word: 'あめ', label: 'あめ', emoji: '🌧️' },
      { word: 'かぜ', label: 'かぜ', emoji: '💨' },
    ],
    zukan: { title: 'しろい ゆき', scene: 'モコが雪だるまを作っている', color: '#E3F2FD' },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'ゆきだ！ゆきだるま つくろう！うれしいな！',
      responseHappy: 'おおきな ゆきだるま つくろうよ！ぼうし かぶせてあげて！',
      responseSad: 'さむいの？ あったかい ここあ のもうね',
    },
  },
  {
    id: 'yo',
    target: 'よ',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'よる', label: 'よる', emoji: '🌙' },
    wrong: [
      { word: 'あさ', label: 'あさ', emoji: '🌅' },
      { word: 'ひる', label: 'ひる', emoji: '☀️' },
    ],
    zukan: { title: 'しずかな よる', scene: 'モコが窓から夜空を見ている', color: '#1A237E' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'よるは しずかで おちつくなぁ… しあわせ',
      responseHappy: 'きれいな よぞらだね！おほしさま いくつ みえるかな？',
      responseSad: 'よるは くらくて こわい？ モコが そばに いるよ',
    },
  },
]

export default hiraganaYaData
