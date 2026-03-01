// いろクイズデータ（基本8色）

const iroData = [
  {
    id: 'iro-aka',
    target: 'あか',
    courseType: 'iro',
    difficulty: 1,
    correct: { word: 'あかいりんご', label: 'りんご', emoji: '🍎' },
    wrong: [
      { word: 'あおいそら', label: 'そら', emoji: '🌤️' },
      { word: 'きいろいばなな', label: 'ばなな', emoji: '🍌' },
    ],
    zukan: {
      title: 'あかい ものあつめ',
      scene: 'モコが赤いものをたくさん集めている',
      color: '#F44336',
    },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'あかって げんきな いろだね！ぽかぽかするよ！わくわく！',
      responseHappy: 'そうだね！あかは あったかくて げんきな いろ！',
      responseSad: 'あかは ちょっと つよい いろかな？ やさしい あかも あるよ',
    },
  },
  {
    id: 'iro-ao',
    target: 'あお',
    courseType: 'iro',
    difficulty: 1,
    correct: { word: 'あおいうみ', label: 'うみ', emoji: '🌊' },
    wrong: [
      { word: 'あかいはな', label: 'はな', emoji: '🌹' },
      { word: 'みどりのはっぱ', label: 'はっぱ', emoji: '🍃' },
    ],
    zukan: {
      title: 'あおい ものあつめ',
      scene: 'モコが海・空・青い鳥を見ている',
      color: '#2196F3',
    },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'あおい うみ、あおい そら… ひろいなぁ。しあわせだな',
      responseHappy: 'きもちいいよね！あおは やすらぐ いろだよ',
      responseSad: 'あおが さみしく みえた？ でも うみも そらも とっても きれいだよ',
    },
  },
  {
    id: 'iro-kiiro',
    target: 'きいろ',
    courseType: 'iro',
    difficulty: 1,
    correct: { word: 'きいろいひまわり', label: 'ひまわり', emoji: '🌻' },
    wrong: [
      { word: 'あかいちゅーりっぷ', label: 'ちゅーりっぷ', emoji: '🌷' },
      { word: 'むらさきのぶどう', label: 'ぶどう', emoji: '🍇' },
    ],
    zukan: {
      title: 'きいろい ものあつめ',
      scene: 'モコがひまわり・バナナ・星を集めている',
      color: '#FFEB3B',
    },
    emotion: {
      mokoFeeling: 'うれしい',
      mokoSays: 'きいろって おひさまの いろだね！ぴかぴか！うれしいな！',
      responseHappy: 'おひさまみたいに あかるいね！えがおの いろだよ！',
      responseSad: 'まぶしかった？ やわらかい きいろも あるよ',
    },
  },
  {
    id: 'iro-midori',
    target: 'みどり',
    courseType: 'iro',
    difficulty: 1,
    correct: { word: 'みどりのはっぱ', label: 'はっぱ', emoji: '🍃' },
    wrong: [
      { word: 'きいろいれもん', label: 'れもん', emoji: '🍋' },
      { word: 'あおいうみ', label: 'うみ', emoji: '🌊' },
    ],
    zukan: {
      title: 'みどりの ものあつめ',
      scene: 'モコが森の中で緑のものを探している',
      color: '#4CAF50',
    },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'みどりが いっぱい！もりの なかは きもちいいな。しあわせ',
      responseHappy: 'しぜんの いろだよね！みどりを みると おちつくよ',
      responseSad: 'むしが いるかも？ だいじょうぶ、モコが いっしょだよ',
    },
  },
  {
    id: 'iro-shiro',
    target: 'しろ',
    courseType: 'iro',
    difficulty: 2,
    correct: { word: 'しろいゆき', label: 'ゆき', emoji: '❄️' },
    wrong: [
      { word: 'くろいよる', label: 'よる', emoji: '🌙' },
      { word: 'ぴんくのはな', label: 'はな', emoji: '🌸' },
    ],
    zukan: {
      title: 'しろい ものあつめ',
      scene: 'モコが雪景色の中で白い息を吐いている',
      color: '#F5F5F5',
    },
    emotion: {
      mokoFeeling: 'わくわく',
      mokoSays: 'しろい ゆきが ふわふわ！ゆきだるま つくりたいな！わくわく！',
      responseHappy: 'ゆきだるま つくろう！おおきいの！',
      responseSad: 'さむいの？ あったかい ここあ のもうね',
    },
  },
  {
    id: 'iro-kuro',
    target: 'くろ',
    courseType: 'iro',
    difficulty: 2,
    correct: { word: 'くろいねこ', label: 'ねこ', emoji: '🐈‍⬛' },
    wrong: [
      { word: 'しろいうさぎ', label: 'うさぎ', emoji: '🐇' },
      { word: 'ちゃいろいくま', label: 'くま', emoji: '🐻' },
    ],
    zukan: {
      title: 'くろい ものあつめ',
      scene: 'モコがくろねこと夜のお散歩をしている',
      color: '#424242',
    },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'くろねこさん、よるは めだたないね！びっくり！',
      responseHappy: 'にんじゃみたいだよね！かっこいいね！',
      responseSad: 'くらくて こわい？ くろねこさんは とっても やさしいよ',
    },
  },
  {
    id: 'iro-pink',
    target: 'ぴんく',
    courseType: 'iro',
    difficulty: 3,
    correct: { word: 'ぴんくのさくら', label: 'さくら', emoji: '🌸' },
    wrong: [
      { word: 'あかいばら', label: 'ばら', emoji: '🌹' },
      { word: 'しろいゆり', label: 'ゆり', emoji: '🤍' },
    ],
    zukan: {
      title: 'ぴんくの ものあつめ',
      scene: 'モコが桜の下でぴんくの花びらを集めている',
      color: '#F48FB1',
    },
    emotion: {
      mokoFeeling: 'しあわせ',
      mokoSays: 'ぴんくって やわらかい いろだね。おはなみたい。しあわせ',
      responseHappy: 'ぴんくは やさしさの いろだよね！だいすき！',
      responseSad: 'ぴんくは あかと しろを まぜた いろだよ。ふしぎだね',
    },
  },
  {
    id: 'iro-murasaki',
    target: 'むらさき',
    courseType: 'iro',
    difficulty: 3,
    correct: { word: 'むらさきのぶどう', label: 'ぶどう', emoji: '🍇' },
    wrong: [
      { word: 'あおいぶるーべりー', label: 'ぶるーべりー', emoji: '🫐' },
      { word: 'あかいいちご', label: 'いちご', emoji: '🍓' },
    ],
    zukan: {
      title: 'むらさきの ものあつめ',
      scene: 'モコが夕焼けの紫色の空を見ている',
      color: '#9C27B0',
    },
    emotion: {
      mokoFeeling: 'びっくり',
      mokoSays: 'ゆうやけが むらさきいろ！きれいだなぁ。びっくり！',
      responseHappy: 'ふしぎな いろだよね！あかと あおを まぜると できるよ！',
      responseSad: 'むらさきって むずかしい いろ？ でも とっても きれいだよ',
    },
  },
]

export default iroData
