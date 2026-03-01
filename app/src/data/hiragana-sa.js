// ひらがなクイズデータ（さ行 5文字）- テーマ: しぜんとあそぼう

const hiraganaSaData = [
  {
    id: 'sa',
    target: 'さ',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'さかな', label: 'さかな', emoji: '🐟' },
    wrong: [
      { word: 'たこ', label: 'たこ', emoji: '🐙' },
      { word: 'かに', label: 'かに', emoji: '🦀' },
    ],
    zukan: { title: 'うみの さかな', scene: 'モコが水族館で魚を見ている', color: '#4FC3F7' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'さかながすいすい およいでるよ！きれいだなぁ！',
      responseHappy: 'きれいだよね！いろんな さかながいるよ！',
      responseSad: 'おさかな こわい？ ガラスの むこうだから だいじょうぶ',
    },
  },
  {
    id: 'si',
    target: 'し',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'しまうま', label: 'しまうま', emoji: '🦓' },
    wrong: [
      { word: 'うし', label: 'うし', emoji: '🐄' },
      { word: 'ろば', label: 'ろば', emoji: '🫏' },
    ],
    zukan: { title: 'しましまの しまうま', scene: 'モコがしまうまの模様を見てびっくりしている', color: '#E0E0E0' },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'しましまが すごい！ ぱじゃまみたい！びっくり！',
      responseHappy: 'おもしろいよね！しましまは みをまもる ためなんだって！',
      responseSad: 'しましま、めがまわっちゃう？ よくみると かっこいいよ',
    },
  },
  {
    id: 'su',
    target: 'す',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'すいか', label: 'すいか', emoji: '🍉' },
    wrong: [
      { word: 'めろん', label: 'めろん', emoji: '🍈' },
      { word: 'りんご', label: 'りんご', emoji: '🍎' },
    ],
    zukan: { title: 'なつの すいか', scene: 'モコが大きなすいかを持っている', color: '#FF6B6B' },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'すいか！あまくて つめたくて さいこう！うれしいな！',
      responseHappy: 'おいしいよね！たねを ぺっぺっ するの たのしいよね！',
      responseSad: 'すいか すきじゃない？ ほかの くだものも あるよ',
    },
  },
  {
    id: 'se',
    target: 'せ',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'せみ', label: 'せみ', emoji: '🪰' },
    wrong: [
      { word: 'ちょう', label: 'ちょう', emoji: '🦋' },
      { word: 'とんぼ', label: 'とんぼ', emoji: '🪲' },
    ],
    zukan: { title: 'なつの せみ', scene: 'モコが木の上のせみの声を聞いている', color: '#81C784' },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'みんみんみーん！せみさん おおきなこえ！びっくり！',
      responseHappy: 'げんきだよね！せみさんは なつが だいすきなんだよ！',
      responseSad: 'おおきなこえ こわかった？ せみさんは うたってるんだよ',
    },
  },
  {
    id: 'so',
    target: 'そ',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'そら', label: 'そら', emoji: '🌤️' },
    wrong: [
      { word: 'つき', label: 'つき', emoji: '🌙' },
      { word: 'にじ', label: 'にじ', emoji: '🌈' },
    ],
    zukan: { title: 'あおい そら', scene: 'モコが原っぱに寝転がって空を見上げている', color: '#87CEEB' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'そらって ひろいなぁ… くもが もくもく。しあわせだな',
      responseHappy: 'きもちいいよね！くもの かたち、なにに みえる？',
      responseSad: 'そらが まぶしかった？ めをつぶっても きもちいいよ',
    },
  },
]

export default hiraganaSaData
