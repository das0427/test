// ひらがなクイズデータ（あ行 5文字）
// 各問は target(ひらがな) + 正解の単語 + 2つの不正解選択肢 + 図鑑テーマ + 感情シナリオ

const hiraganaData = [
  {
    id: 'a',
    target: 'あ',
    correct: { word: 'あめ', label: 'あめ', emoji: '🌧️' },
    wrong: [
      { word: 'くも', label: 'くも', emoji: '☁️' },
      { word: 'ほし', label: 'ほし', emoji: '⭐' },
    ],
    zukan: {
      title: 'あめのひ',
      scene: '雨がしとしと降っている',
      color: '#A8D8EA',
    },
    emotion: {
      mokoFeeling: 'かなしい',
      mokoSays: 'あめが降って、おそとで遊べないよ… ちょっとかなしいな',
      responseHappy: 'そっか、雨でも楽しいことがあるんだね！モコもげんきになったよ！',
      responseSad: 'うん、モコもかなしい… でも、いっしょにいてくれてありがとう',
    },
  },
  {
    id: 'i',
    target: 'い',
    correct: { word: 'いぬ', label: 'いぬ', emoji: '🐕' },
    wrong: [
      { word: 'ねこ', label: 'ねこ', emoji: '🐈' },
      { word: 'とり', label: 'とり', emoji: '🐦' },
    ],
    zukan: {
      title: 'いぬとおさんぽ',
      scene: 'モコが犬とお散歩している',
      color: '#B5EAD7',
    },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'いぬさんとおさんぽ！しっぽをふってくれたよ。うれしいな！',
      responseHappy: 'いっしょにうれしいね！おさんぽたのしいもんね！',
      responseSad: 'そっか… でも、いぬさんはきみのことが大好きだよ',
    },
  },
  {
    id: 'u',
    target: 'う',
    correct: { word: 'うみ', label: 'うみ', emoji: '🌊' },
    wrong: [
      { word: 'やま', label: 'やま', emoji: '⛰️' },
      { word: 'かわ', label: 'かわ', emoji: '🏞️' },
    ],
    zukan: {
      title: 'ひろいうみ',
      scene: 'モコが海辺で波を見ている',
      color: '#87CEEB',
    },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'うみってひろいなぁ！なみがざぶーん！ わくわくするね！',
      responseHappy: 'わくわくするよね！うみにはたからものがいっぱいだよ！',
      responseSad: 'うみがこわい？だいじょうぶ、モコがいっしょだよ',
    },
  },
  {
    id: 'e',
    target: 'え',
    correct: { word: 'えほん', label: 'えほん', emoji: '📖' },
    wrong: [
      { word: 'つみき', label: 'つみき', emoji: '🧱' },
      { word: 'くれよん', label: 'くれよん', emoji: '🖍️' },
    ],
    zukan: {
      title: 'だいすきなえほん',
      scene: 'モコが絵本を読んでいる',
      color: '#FFDAC1',
    },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'えほんを読んでたら、こころがぽかぽかしてきたよ。しあわせだな',
      responseHappy: 'ぽかぽかだね！えほんっておもしろいよね！',
      responseSad: 'かなしいおはなしだった？モコがぎゅってしてあげるね',
    },
  },
  {
    id: 'o',
    target: 'お',
    correct: { word: 'おほしさま', label: 'おほしさま', emoji: '🌟' },
    wrong: [
      { word: 'おつきさま', label: 'おつきさま', emoji: '🌙' },
      { word: 'たいよう', label: 'たいよう', emoji: '☀️' },
    ],
    zukan: {
      title: 'よぞらのおほしさま',
      scene: 'モコが夜空の星を見上げている',
      color: '#2C3E7B',
    },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'おそらにおほしさまがいっぱい！ きれいだなぁ… びっくり！',
      responseHappy: 'きれいだよね！おほしさまに おねがいごと しよう！',
      responseSad: 'よるがこわい？おほしさまが みんなを みまもってるよ',
    },
  },
]

export default hiraganaData
