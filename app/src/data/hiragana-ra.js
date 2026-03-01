// ひらがなクイズデータ（ら行 5文字）- テーマ: リズムとおと

const hiraganaRaData = [
  {
    id: 'ra',
    target: 'ら',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'らっぱ', label: 'らっぱ', emoji: '🎺' },
    wrong: [
      { word: 'たいこ', label: 'たいこ', emoji: '🥁' },
      { word: 'ぴあの', label: 'ぴあの', emoji: '🎹' },
    ],
    zukan: { title: 'ぷっぷー らっぱ', scene: 'モコがらっぱを吹いている', color: '#FFD54F' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'ぷっぷー！らっぱの おと、たのしいね！わくわく！',
      responseHappy: 'いい おとだね！おんがくたい みたい！',
      responseSad: 'おおきな おとで びっくりした？ やさしく ふこうね',
    },
  },
  {
    id: 'ri',
    target: 'り',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'りんご', label: 'りんご', emoji: '🍎' },
    wrong: [
      { word: 'もも', label: 'もも', emoji: '🍑' },
      { word: 'なし', label: 'なし', emoji: '🍐' },
    ],
    zukan: { title: 'まっかな りんご', scene: 'モコがりんごの木からりんごを取っている', color: '#E53935' },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'りんご とれたよ！まっかで おいしそう！うれしいな！',
      responseHappy: 'がぶっ！あまくて おいしいよね！',
      responseSad: 'りんご すっぱかった？ あまいの みつけよう',
    },
  },
  {
    id: 'ru',
    target: 'る',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'るすばん', label: 'るすばん', emoji: '🏠' },
    wrong: [
      { word: 'おさんぽ', label: 'おさんぽ', emoji: '🚶' },
      { word: 'おかいもの', label: 'おかいもの', emoji: '🛒' },
    ],
    zukan: { title: 'はじめての るすばん', scene: 'モコがお家でお留守番をしている', color: '#7E57C2' },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'ぐるぐる まわってる！めが まわりそう！びっくり！',
      responseHappy: 'おもしろい もようだよね！もっと かいてみよう！',
      responseSad: 'めが まわっちゃった？ ゆっくり やすもうね',
    },
  },
  {
    id: 're',
    target: 'れ',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'れいぞうこ', label: 'れいぞうこ', emoji: '🧊' },
    wrong: [
      { word: 'せんたくき', label: 'せんたくき', emoji: '🫧' },
      { word: 'そうじき', label: 'そうじき', emoji: '🧹' },
    ],
    zukan: { title: 'つめたい れいぞうこ', scene: 'モコが冷蔵庫を開けて中を覗いている', color: '#B3E5FC' },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'れいぞうこの なかに なにが あるかな？わくわく！',
      responseHappy: 'ぷりん みっけ！おやつの じかんだよ！',
      responseSad: 'からっぽだった？ おかいもの いこうね',
    },
  },
  {
    id: 'ro',
    target: 'ろ',
    courseType: 'hiragana',
    difficulty: 3,
    correct: { word: 'ろうそく', label: 'ろうそく', emoji: '🕯️' },
    wrong: [
      { word: 'でんき', label: 'でんき', emoji: '💡' },
      { word: 'ひかり', label: 'ひかり', emoji: '🔦' },
    ],
    zukan: { title: 'ゆらゆら ろうそく', scene: 'モコがろうそくの炎を見つめている', color: '#FFB74D' },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'ろうそくの ひが ゆらゆら… きれいだな。しあわせ',
      responseHappy: 'おたんじょうび みたいだね！ふー！って けそう！',
      responseSad: 'ひが こわい？ だいじょうぶ、とおくから みようね',
    },
  },
]

export default hiraganaRaData
