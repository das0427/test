// ひらがなクイズデータ（わ行 2文字）- テーマ: ふしぎはっけん

const hiraganaWaData = [
  {
    id: 'wa',
    target: 'わ',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'わに', label: 'わに', emoji: '🐊' },
    wrong: [
      { word: 'とかげ', label: 'とかげ', emoji: '🦎' },
      { word: 'かめ', label: 'かめ', emoji: '🐢' },
    ],
    zukan: { title: 'おおきな わに', scene: 'モコが水族館でわにを見ている', color: '#66BB6A' },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'わに おおきい！おくちが ぱかーっ！びっくり！',
      responseHappy: 'すごいよね！わには いちおくねんも まえから いるんだって！',
      responseSad: 'こわかった？ ガラスの むこうだから だいじょうぶだよ',
    },
  },
  {
    id: 'n',
    target: 'ん',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'ぱんだ', label: 'ぱんだ', emoji: '🐼' },
    questionOverride: '「ん」が はいっている ことばは どれかな？',
    wrong: [
      { word: 'うさぎ', label: 'うさぎ', emoji: '🐇' },
      { word: 'かめ', label: 'かめ', emoji: '🐢' },
    ],
    zukan: { title: '「ん」で おわる どうぶつ', scene: 'モコがぱんだと一緒にささを食べている', color: '#E0E0E0' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'ぱんだ もぐもぐ。いっしょに たべよう！しあわせだな',
      responseHappy: 'おいしそうだよね！ぱんだは ささが だいすきなんだよ！',
      responseSad: 'ささは にんげんは たべないよ。おにぎり たべよう！',
    },
  },
]

export default hiraganaWaData
