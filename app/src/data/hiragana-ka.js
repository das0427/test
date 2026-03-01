// ひらがなクイズデータ（か行 5文字）- テーマ: おそとのせかい

const hiraganaKaData = [
  {
    id: 'ka',
    target: 'か',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'かさ', label: 'かさ', emoji: '☂️' },
    wrong: [
      { word: 'くつ', label: 'くつ', emoji: '👟' },
      { word: 'ぼうし', label: 'ぼうし', emoji: '🧢' },
    ],
    zukan: {
      title: 'あめのひの かさ',
      scene: 'モコがカラフルな傘をさしてお散歩している',
      color: '#7EC8E3',
    },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'かさをさしたら、あめでもおさんぽできるよ！うれしいな！',
      responseHappy: 'そうだね！かさがあれば あめも たのしいよね！',
      responseSad: 'あめ、きらいかな？でも かさがあるから だいじょうぶだよ',
    },
  },
  {
    id: 'ki',
    target: 'き',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'きりん', label: 'きりん', emoji: '🦒' },
    wrong: [
      { word: 'ぞう', label: 'ぞう', emoji: '🐘' },
      { word: 'うま', label: 'うま', emoji: '🐴' },
    ],
    zukan: {
      title: 'せのたかい きりん',
      scene: 'モコがきりんを見上げてびっくりしている',
      color: '#F0E68C',
    },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'きりんさん、おおきいなぁ！くびがながくて びっくり！',
      responseHappy: 'すごいよね！たかいところの はっぱも たべられるんだよ！',
      responseSad: 'おおきくて ちょっとこわい？ でもやさしい どうぶつだよ',
    },
  },
  {
    id: 'ku',
    target: 'く',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'くるま', label: 'くるま', emoji: '🚗' },
    wrong: [
      { word: 'でんしゃ', label: 'でんしゃ', emoji: '🚃' },
      { word: 'ひこうき', label: 'ひこうき', emoji: '✈️' },
    ],
    zukan: {
      title: 'はしる くるま',
      scene: 'モコが赤い車に乗っておでかけしている',
      color: '#FF6B6B',
    },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'くるまでおでかけ！どこにいこうかな？わくわくするね！',
      responseHappy: 'おでかけたのしいよね！モコも いっしょに いきたいな！',
      responseSad: 'くるまよい しちゃう？まどをあけたら きもちいいよ',
    },
  },
  {
    id: 'ke',
    target: 'け',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'けーき', label: 'けーき', emoji: '🎂' },
    wrong: [
      { word: 'ぷりん', label: 'ぷりん', emoji: '🍮' },
      { word: 'あいす', label: 'あいす', emoji: '🍦' },
    ],
    zukan: {
      title: 'おたんじょうびの けーき',
      scene: 'モコの前にロウソク付きのケーキがある',
      color: '#FFB6C1',
    },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'けーき！おたんじょうびみたい！しあわせだなぁ',
      responseHappy: 'いっしょに おいわい しようね！おめでとう！',
      responseSad: 'けーき、すきじゃないの？ほかのおやつもあるよ',
    },
  },
  {
    id: 'ko',
    target: 'こ',
    courseType: 'hiragana',
    difficulty: 1,
    correct: { word: 'こいぬ', label: 'こいぬ', emoji: '🐶' },
    wrong: [
      { word: 'こねこ', label: 'こねこ', emoji: '🐱' },
      { word: 'ことり', label: 'ことり', emoji: '🐤' },
    ],
    zukan: {
      title: 'ちいさな こいぬ',
      scene: 'モコが子犬とじゃれ合って遊んでいる',
      color: '#DEB887',
    },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'こいぬが ぺろぺろ なめてくれたよ！うれしいな！',
      responseHappy: 'かわいいよね！こいぬも モコのこと すきなんだよ！',
      responseSad: 'こいぬ、ちょっとうるさいかな？でも なかよくなれるよ',
    },
  },
]

export default hiraganaKaData
