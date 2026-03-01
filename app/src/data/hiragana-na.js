// ひらがなクイズデータ（な行 5文字）- テーマ: なかよしのともだち

const hiraganaNaData = [
  {
    id: 'na',
    target: 'な',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'なす', label: 'なす', emoji: '🍆' },
    wrong: [
      { word: 'にんじん', label: 'にんじん', emoji: '🥕' },
      { word: 'きゅうり', label: 'きゅうり', emoji: '🥒' },
    ],
    zukan: { title: 'むらさきの なす', scene: 'モコが畑でなすを収穫している', color: '#7E57C2' },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'なすが とれたよ！おおきいなぁ！うれしいな！',
      responseHappy: 'すごい！じぶんで とれたなすは とくべつ おいしいよ！',
      responseSad: 'なす にがてかな？ やいたら あまくて おいしいよ',
    },
  },
  {
    id: 'ni',
    target: 'に',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'にじ', label: 'にじ', emoji: '🌈' },
    wrong: [
      { word: 'くも', label: 'くも', emoji: '☁️' },
      { word: 'かぜ', label: 'かぜ', emoji: '💨' },
    ],
    zukan: { title: 'おおきな にじ', scene: 'モコが雨上がりの虹を見ている', color: '#E1BEE7' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'にじだ！なないろで きれい！しあわせだなぁ',
      responseHappy: 'きれいだよね！にじの いろ、ぜんぶ いえるかな？',
      responseSad: 'もう きえちゃった？ あめのあとに また でてくるよ',
    },
  },
  {
    id: 'nu',
    target: 'ぬ',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'ぬいぐるみ', label: 'ぬいぐるみ', emoji: '🧸' },
    wrong: [
      { word: 'にんぎょう', label: 'にんぎょう', emoji: '🪆' },
      { word: 'ろぼっと', label: 'ろぼっと', emoji: '🤖' },
    ],
    zukan: { title: 'だいすきな ぬいぐるみ', scene: 'モコがぬいぐるみをぎゅっと抱きしめている', color: '#FFCCBC' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'ぬいぐるみを ぎゅーってしたら あったかいなぁ',
      responseHappy: 'ぎゅーって きもちいいよね！モコも ぎゅーってしたい！',
      responseSad: 'さみしいの？ ぬいぐるみが いっしょだよ',
    },
  },
  {
    id: 'ne',
    target: 'ね',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'ねこ', label: 'ねこ', emoji: '🐈' },
    wrong: [
      { word: 'いぬ', label: 'いぬ', emoji: '🐕' },
      { word: 'うさぎ', label: 'うさぎ', emoji: '🐇' },
    ],
    zukan: { title: 'おひるねの ねこ', scene: 'モコの隣でねこが丸くなっている', color: '#FFE0B2' },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'ねこが ごろごろ いってるよ。うれしいのかな？',
      responseHappy: 'ねこは きもちいいと ごろごろ いうんだって！',
      responseSad: 'ねこが ひっかいちゃった？ びっくりしたんだよ きっと',
    },
  },
  {
    id: 'no',
    target: 'の',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'のはら', label: 'のはら', emoji: '🌾' },
    wrong: [
      { word: 'もり', label: 'もり', emoji: '🌲' },
      { word: 'はたけ', label: 'はたけ', emoji: '🌻' },
    ],
    zukan: { title: 'ひろい のはら', scene: 'モコが野原を走り回っている', color: '#C5E1A5' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'のはらって ひろーい！かけっこ しよう！わくわく！',
      responseHappy: 'よーい どん！モコより はやいかな？',
      responseSad: 'つかれちゃった？ のはらに ごろんと ねころぼう',
    },
  },
]

export default hiraganaNaData
