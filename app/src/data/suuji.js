// すうじクイズデータ（1〜10）

const suujiData = [
  {
    id: 'suuji-1',
    target: '1',
    courseType: 'suuji',
    difficulty: 1,
    correct: { word: 'いち', label: 'りんご 1こ', emoji: '🍎' },
    wrong: [
      { word: 'さん', label: 'りんご 3こ', emoji: '🍎🍎🍎' },
      { word: 'に', label: 'りんご 2こ', emoji: '🍎🍎' },
    ],
    zukan: {
      title: 'はじめての いち',
      scene: 'モコがりんごを1つ大切に持っている',
      color: '#FF6B6B',
    },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'いっこの りんご。たいせつに たべようね。うれしいな！',
      responseHappy: 'だいじに たべると おいしいよね！',
      responseSad: 'いっこだけ？ もっと ほしかったかな。つぎは たくさん みつけよう',
    },
  },
  {
    id: 'suuji-2',
    target: '2',
    courseType: 'suuji',
    difficulty: 1,
    correct: { word: 'に', label: 'くつ 2こ', emoji: '👟👟' },
    wrong: [
      { word: 'いち', label: 'くつ 1こ', emoji: '👟' },
      { word: 'よん', label: 'くつ 4こ', emoji: '👟👟👟👟' },
    ],
    zukan: {
      title: 'にこの くつ',
      scene: 'モコが靴をぴったりペアで並べている',
      color: '#42A5F5',
    },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'くつは にこで いっそく！ ぴったり そろったよ。しあわせ！',
      responseHappy: 'ぴったり！みぎと ひだりが なかよしだね！',
      responseSad: 'くつが みつからない？ いっしょに さがそう',
    },
  },
  {
    id: 'suuji-3',
    target: '3',
    courseType: 'suuji',
    difficulty: 1,
    correct: { word: 'さん', label: 'おだんご 3こ', emoji: '🍡🍡🍡' },
    wrong: [
      { word: 'に', label: 'おだんご 2こ', emoji: '🍡🍡' },
      { word: 'ご', label: 'おだんご 5こ', emoji: '🍡🍡🍡🍡🍡' },
    ],
    zukan: {
      title: 'さんしょく おだんご',
      scene: 'モコが三色だんごを食べている',
      color: '#F8BBD0',
    },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'おだんご みっつ！ぴんく しろ みどり！うれしいな！',
      responseHappy: 'おいしそう！どの いろが すきかな？',
      responseSad: 'おだんご きらい？ ほかの おやつも あるよ',
    },
  },
  {
    id: 'suuji-4',
    target: '4',
    courseType: 'suuji',
    difficulty: 1,
    correct: { word: 'よん', label: 'はっぱ 4まい', emoji: '🍀' },
    wrong: [
      { word: 'さん', label: 'はっぱ 3まい', emoji: '☘️' },
      { word: 'ご', label: 'はっぱ 5まい', emoji: '🍃🍃🍃🍃🍃' },
    ],
    zukan: {
      title: 'よつばの クローバー',
      scene: 'モコが四つ葉のクローバーを見つけた',
      color: '#66BB6A',
    },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'よつばの クローバー みつけた！いいこと あるかな？わくわく！',
      responseHappy: 'ラッキー！しあわせの クローバーだよ！',
      responseSad: 'みつからなかった？ モコが みつけたの あげるよ',
    },
  },
  {
    id: 'suuji-5',
    target: '5',
    courseType: 'suuji',
    difficulty: 1,
    correct: { word: 'ご', label: 'おほしさま 5こ', emoji: '⭐⭐⭐⭐⭐' },
    wrong: [
      { word: 'さん', label: 'おほしさま 3こ', emoji: '⭐⭐⭐' },
      { word: 'なな', label: 'おほしさま 7こ', emoji: '⭐⭐⭐⭐⭐⭐⭐' },
    ],
    zukan: {
      title: 'いつつの おほしさま',
      scene: 'モコが夜空に5つの星を見つけた',
      color: '#283593',
    },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'おほしさま いつつ！ おてての ゆびと おんなじかず！しあわせ',
      responseHappy: 'そうだね！かたての ゆびで かぞえられるよ！',
      responseSad: 'かぞえるの むずかしい？ ゆびで いっしょに かぞえよう',
    },
  },
  {
    id: 'suuji-6',
    target: '6',
    courseType: 'suuji',
    difficulty: 2,
    correct: { word: 'ろく', label: 'てんとうむし 6ぴき', emoji: '🐞🐞🐞🐞🐞🐞' },
    wrong: [
      { word: 'よん', label: 'てんとうむし 4ひき', emoji: '🐞🐞🐞🐞' },
      { word: 'はち', label: 'てんとうむし 8ぴき', emoji: '🐞🐞🐞🐞🐞🐞🐞🐞' },
    ],
    zukan: {
      title: 'ろっぴきの てんとうむし',
      scene: 'モコの手に6匹のてんとうむしが集まっている',
      color: '#EF5350',
    },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'てんとうむしが ろっぴきも いるよ！びっくり！',
      responseHappy: 'すごいね！てんとうむしは しあわせを はこぶんだよ！',
      responseSad: 'むし こわい？ てんとうむしは やさしい むしだよ',
    },
  },
  {
    id: 'suuji-7',
    target: '7',
    courseType: 'suuji',
    difficulty: 2,
    correct: { word: 'なな', label: 'にじの いろ 7つ', emoji: '🌈' },
    wrong: [
      { word: 'ご', label: '5つ', emoji: '🎨🎨🎨🎨🎨' },
      { word: 'く', label: '9つ', emoji: '🎨🎨🎨🎨🎨🎨🎨🎨🎨' },
    ],
    zukan: {
      title: 'なないろの にじ',
      scene: 'モコが虹の色を1つずつ数えている',
      color: '#AB47BC',
    },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'にじは なないろ！あか だいだい きいろ… わくわくするね！',
      responseHappy: 'にじの いろ、ぜんぶ いえるかな？すごい！',
      responseSad: 'いろが おおくて むずかしい？ すこしずつ おぼえよう',
    },
  },
  {
    id: 'suuji-8',
    target: '8',
    courseType: 'suuji',
    difficulty: 2,
    correct: { word: 'はち', label: 'たこの あし 8ぽん', emoji: '🐙' },
    wrong: [
      { word: 'ろく', label: '6ぽん', emoji: '🐙' },
      { word: 'じゅう', label: '10ぽん', emoji: '🐙' },
    ],
    zukan: {
      title: 'はっぽんあしの たこ',
      scene: 'モコがたこと一緒に踊っている',
      color: '#E91E63',
    },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'たこの あしは はっぽん！ いっぱいだなぁ！びっくり！',
      responseHappy: 'はっぽんで いろんなことが できるんだよ！すごいね！',
      responseSad: 'たこ こわかった？ ほんとは とっても あたまがいいんだよ',
    },
  },
  {
    id: 'suuji-9',
    target: '9',
    courseType: 'suuji',
    difficulty: 2,
    correct: { word: 'きゅう', label: 'ボール 9こ', emoji: '⚾⚾⚾⚾⚾⚾⚾⚾⚾' },
    wrong: [
      { word: 'なな', label: 'ボール 7こ', emoji: '⚾⚾⚾⚾⚾⚾⚾' },
      { word: 'じゅう', label: 'ボール 10こ', emoji: '⚾⚾⚾⚾⚾⚾⚾⚾⚾⚾' },
    ],
    zukan: {
      title: 'きゅうこの ボール',
      scene: 'モコがボールでジャグリングしようとしている',
      color: '#FF9800',
    },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'ボールが きゅうこ！いっぱい あそべるね！わくわく！',
      responseHappy: 'たくさんで たのしいね！みんなで あそぼう！',
      responseSad: 'おおすぎて たいへんかな？ すこしずつ やろうね',
    },
  },
  {
    id: 'suuji-10',
    target: '10',
    courseType: 'suuji',
    difficulty: 2,
    correct: { word: 'じゅう', label: 'ゆびが ぜんぶで 10ぽん', emoji: '🖐️🖐️' },
    wrong: [
      { word: 'はち', label: 'ゆび 8ぽん', emoji: '🖐️☝️☝️☝️' },
      { word: 'きゅう', label: 'ゆび 9ぽん', emoji: '🖐️✌️✌️' },
    ],
    zukan: {
      title: 'じゅっぽんの ゆび',
      scene: 'モコが両手を広げて10本の指を見せている',
      color: '#FFD54F',
    },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'りょうてを ぱーって したら じゅっぽん！うれしいな！',
      responseHappy: 'すごい！じゅうまで かぞえられたね！おめでとう！',
      responseSad: 'おおきいかず むずかしかった？ でも できたよ！すごい！',
    },
  },
]

export default suujiData
