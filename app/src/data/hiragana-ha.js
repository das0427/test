// ひらがなクイズデータ（は行 5文字）- テーマ: はなとむし

const hiraganaHaData = [
  {
    id: 'ha',
    target: 'は',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'はな', label: 'はな', emoji: '🌸' },
    wrong: [
      { word: 'きのこ', label: 'きのこ', emoji: '🍄' },
      { word: 'どんぐり', label: 'どんぐり', emoji: '🌰' },
    ],
    zukan: { title: 'さくらの はな', scene: 'モコが桜の下でお花見をしている', color: '#F8BBD0' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'はなが ひらひら おちてきたよ。しあわせだなぁ',
      responseHappy: 'きれいだね！はなびらの じゅうたんだよ！',
      responseSad: 'はなが ちっちゃった？ また はるに さくよ',
    },
  },
  {
    id: 'hi',
    target: 'ひ',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'ひまわり', label: 'ひまわり', emoji: '🌻' },
    wrong: [
      { word: 'ちゅーりっぷ', label: 'ちゅーりっぷ', emoji: '🌷' },
      { word: 'たんぽぽ', label: 'たんぽぽ', emoji: '🌼' },
    ],
    zukan: { title: 'おおきな ひまわり', scene: 'モコが大きなひまわりを見上げている', color: '#FFD54F' },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'ひまわり、モコより おおきいよ！びっくり！',
      responseHappy: 'すごいよね！おひさまの ほうを むいてるんだよ！',
      responseSad: 'おおきすぎて こわかった？ でも やさしい おはなだよ',
    },
  },
  {
    id: 'hu',
    target: 'ふ',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'ふうせん', label: 'ふうせん', emoji: '🎈' },
    wrong: [
      { word: 'ぼーる', label: 'ぼーる', emoji: '🏐' },
      { word: 'しゃぼんだま', label: 'しゃぼんだま', emoji: '🫧' },
    ],
    zukan: { title: 'そらとぶ ふうせん', scene: 'モコが風船を持って浮かびそうになっている', color: '#EF5350' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'ふうせんが そらに とんでいくよ！わくわくするね！',
      responseHappy: 'そらまで とどくかな？おほしさまに あえるかな？',
      responseSad: 'ふうせん にげちゃった？ あたらしいの ふくらませよう！',
    },
  },
  {
    id: 'he',
    target: 'へ',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'へび', label: 'へび', emoji: '🐍' },
    wrong: [
      { word: 'とかげ', label: 'とかげ', emoji: '🦎' },
      { word: 'かえる', label: 'かえる', emoji: '🐸' },
    ],
    zukan: { title: 'にょろにょろ へび', scene: 'モコが草の中でへびを見つけた', color: '#A5D6A7' },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'へびだ！にょろにょろ してる！びっくり！',
      responseHappy: 'おもしろい かたちだよね！あしが ないのに はやいんだよ！',
      responseSad: 'こわかった？ へびさんも びっくりしてるよ きっと',
    },
  },
  {
    id: 'ho',
    target: 'ほ',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'ほし', label: 'ほし', emoji: '⭐' },
    wrong: [
      { word: 'つき', label: 'つき', emoji: '🌙' },
      { word: 'くも', label: 'くも', emoji: '☁️' },
    ],
    zukan: { title: 'きらきら ほし', scene: 'モコが夜空の星を指さしている', color: '#1A237E' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'ほしが きらきら。きれいだなぁ… しあわせ',
      responseHappy: 'きれいだね！「きらきらぼし」 うたおうよ！',
      responseSad: 'よるは くらくて こわい？ ほしが てらしてくれるよ',
    },
  },
]

export default hiraganaHaData
