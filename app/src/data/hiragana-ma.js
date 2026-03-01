// ひらがなクイズデータ（ま行 5文字）- テーマ: まいにちのくらし

const hiraganaMaData = [
  {
    id: 'ma',
    target: 'ま',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'まくら', label: 'まくら', emoji: '🛏️' },
    wrong: [
      { word: 'ふとん', label: 'ふとん', emoji: '🛌' },
      { word: 'たおる', label: 'たおる', emoji: '🧣' },
    ],
    zukan: { title: 'ふかふか まくら', scene: 'モコがふかふかの枕に顔をうずめている', color: '#E8EAF6' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'まくら ふかふか… ねむくなっちゃった。しあわせだな',
      responseHappy: 'きもちいいよね！いい ゆめ みようね！',
      responseSad: 'ねむれないの？ モコが こもりうた うたってあげる',
    },
  },
  {
    id: 'mi',
    target: 'み',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'みかん', label: 'みかん', emoji: '🍊' },
    wrong: [
      { word: 'れもん', label: 'れもん', emoji: '🍋' },
      { word: 'ばなな', label: 'ばなな', emoji: '🍌' },
    ],
    zukan: { title: 'あまーい みかん', scene: 'モコがこたつでみかんを食べている', color: '#FF9800' },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'みかん あまくて おいしいよ！うれしいな！',
      responseHappy: 'おいしいよね！かわを むくのも たのしいね！',
      responseSad: 'すっぱかった？ あまいの もう いっこ たべよう',
    },
  },
  {
    id: 'mu',
    target: 'む',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'むしめがね', label: 'むしめがね', emoji: '🔍' },
    wrong: [
      { word: 'めがね', label: 'めがね', emoji: '👓' },
      { word: 'ぼうえんきょう', label: 'ぼうえんきょう', emoji: '🔭' },
    ],
    zukan: { title: 'たんけん むしめがね', scene: 'モコが虫めがねで花を観察している', color: '#A5D6A7' },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'むしめがねで みたら おおきく なった！びっくり！',
      responseHappy: 'すごいよね！ちいさいものも よくみえるよ！',
      responseSad: 'まぶしかった？ おひさまは みちゃだめだよ',
    },
  },
  {
    id: 'me',
    target: 'め',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'めだまやき', label: 'めだまやき', emoji: '🍳' },
    wrong: [
      { word: 'おむれつ', label: 'おむれつ', emoji: '🥘' },
      { word: 'ぱんけーき', label: 'ぱんけーき', emoji: '🥞' },
    ],
    zukan: { title: 'あさの めだまやき', scene: 'モコがフライパンで目玉焼きを作っている', color: '#FFF9C4' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'めだまやき じゅーじゅー！いい においだね！わくわく！',
      responseHappy: 'おいしそう！あさごはん だいじだよね！',
      responseSad: 'あつくて こわい？ おとなと いっしょに つくろうね',
    },
  },
  {
    id: 'mo',
    target: 'も',
    courseType: 'hiragana',
    difficulty: 2,
    correct: { word: 'もり', label: 'もり', emoji: '🌲' },
    wrong: [
      { word: 'のはら', label: 'のはら', emoji: '🌾' },
      { word: 'うみ', label: 'うみ', emoji: '🌊' },
    ],
    zukan: { title: 'ふしぎな もり', scene: 'モコが大きな木々に囲まれて冒険している', color: '#2E7D32' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'もりの なかは ふしぎが いっぱい！わくわくするね！',
      responseHappy: 'たんけんだ！どんな いきものが いるかな？',
      responseSad: 'もり くらくて こわい？ モコが てを つないであげる',
    },
  },
]

export default hiraganaMaData
