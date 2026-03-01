// ひらがなクイズデータ（た行 5文字）- テーマ: たべものだいすき

const hiraganaTaData = [
  {
    id: 'ta',
    target: 'た',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'たまご', label: 'たまご', emoji: '🥚' },
    wrong: [
      { word: 'にく', label: 'にく', emoji: '🍖' },
      { word: 'さかな', label: 'さかな', emoji: '🐟' },
    ],
    zukan: { title: 'まるい たまご', scene: 'モコが卵を大切に持っている', color: '#FFF9C4' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'たまごから なにが うまれるかな？ わくわくするね！',
      responseHappy: 'ひよこかな？ きょうりゅうかな？ たのしみだね！',
      responseSad: 'たまご わっちゃいそうで こわい？ そーっと もとうね',
    },
  },
  {
    id: 'ti',
    target: 'ち',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'ちょうちょ', label: 'ちょうちょ', emoji: '🦋' },
    wrong: [
      { word: 'はち', label: 'はち', emoji: '🐝' },
      { word: 'てんとうむし', label: 'てんとうむし', emoji: '🐞' },
    ],
    zukan: { title: 'ひらひら ちょうちょ', scene: 'モコが花畑でちょうちょを見ている', color: '#F8BBD0' },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'ちょうちょが おはなに とまったよ！きれいだなぁ！',
      responseHappy: 'きれいだよね！ちょうちょの はねは にじいろだよ！',
      responseSad: 'ちょうちょ にげちゃった？ また きてくれるよ',
    },
  },
  {
    id: 'tu',
    target: 'つ',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'つみき', label: 'つみき', emoji: '🧱' },
    wrong: [
      { word: 'ぬいぐるみ', label: 'ぬいぐるみ', emoji: '🧸' },
      { word: 'ぼーる', label: 'ぼーる', emoji: '⚽' },
    ],
    zukan: { title: 'たかーい つみき', scene: 'モコが積み木を高く積んでいる', color: '#FFCC80' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'つみきを たかーく つんだよ！もっと たかく したいな！',
      responseHappy: 'すごい！おしろみたい！もっともっと たかくしよう！',
      responseSad: 'くずれちゃった？ だいじょうぶ、もういっかい つくろう！',
    },
  },
  {
    id: 'te',
    target: 'て',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'てがみ', label: 'てがみ', emoji: '✉️' },
    wrong: [
      { word: 'はがき', label: 'はがき', emoji: '📮' },
      { word: 'しんぶん', label: 'しんぶん', emoji: '📰' },
    ],
    zukan: { title: 'だいすきな ひとへの てがみ', scene: 'モコがクレヨンで手紙を書いている', color: '#FFECB3' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'だいすきな ひとに てがみを かいたよ。しあわせだな',
      responseHappy: 'すてきだね！もらった ひとも きっと うれしいよ！',
      responseSad: 'てがみ、むずかしい？ えを かいても いいんだよ',
    },
  },
  {
    id: 'to',
    target: 'と',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'とけい', label: 'とけい', emoji: '⏰' },
    wrong: [
      { word: 'かれんだー', label: 'かれんだー', emoji: '📅' },
      { word: 'すなどけい', label: 'すなどけい', emoji: '⏳' },
    ],
    zukan: { title: 'ちくたく とけい', scene: 'モコが大きな時計の前に立っている', color: '#B3E5FC' },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'とけいの はりが ぐるぐる まわってる！びっくり！',
      responseHappy: 'おもしろいよね！はりが うごくと じかんが すすむんだよ！',
      responseSad: 'じかんが よくわからない？ すこしずつ おぼえようね',
    },
  },
]

export default hiraganaTaData
