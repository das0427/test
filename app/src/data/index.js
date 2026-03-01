// データ統合ファイル: 全コースのデータとメタ情報を管理

import hiraganaAData from './hiragana'
import hiraganaKaData from './hiragana-ka'
import hiraganaSaData from './hiragana-sa'
import hiraganaTaData from './hiragana-ta'
import hiraganaNaData from './hiragana-na'
import hiraganaHaData from './hiragana-ha'
import hiraganaMaData from './hiragana-ma'
import hiraganaYaData from './hiragana-ya'
import hiraganaRaData from './hiragana-ra'
import hiraganaWaData from './hiragana-wa'
import suujiData from './suuji'
import iroData from './iro'
import doubutsuData from './doubutsu'

// コース定義（表示順序・メタ情報）
export const COURSES = [
  { id: 'hiragana-a',  name: 'ひらがな あ行', icon: 'あ', color: '#FFD93D', category: 'hiragana' },
  { id: 'hiragana-ka', name: 'ひらがな か行', icon: 'か', color: '#FFB5A7', category: 'hiragana' },
  { id: 'hiragana-sa', name: 'ひらがな さ行', icon: 'さ', color: '#A8D8EA', category: 'hiragana' },
  { id: 'hiragana-ta', name: 'ひらがな た行', icon: 'た', color: '#FFDAC1', category: 'hiragana' },
  { id: 'hiragana-na', name: 'ひらがな な行', icon: 'な', color: '#E1BEE7', category: 'hiragana' },
  { id: 'hiragana-ha', name: 'ひらがな は行', icon: 'は', color: '#F8BBD0', category: 'hiragana' },
  { id: 'hiragana-ma', name: 'ひらがな ま行', icon: 'ま', color: '#FF9800', category: 'hiragana' },
  { id: 'hiragana-ya', name: 'ひらがな や行', icon: 'や', color: '#8D6E63', category: 'hiragana' },
  { id: 'hiragana-ra', name: 'ひらがな ら行', icon: 'ら', color: '#E53935', category: 'hiragana' },
  { id: 'hiragana-wa', name: 'ひらがな わ行', icon: 'わ', color: '#66BB6A', category: 'hiragana' },
  { id: 'suuji',       name: 'すうじ',        icon: '🔢', color: '#98D8A0', category: 'suuji' },
  { id: 'iro',         name: 'いろ',          icon: '🎨', color: '#C8B6FF', category: 'iro' },
  { id: 'doubutsu',    name: 'どうぶつ',      icon: '🐾', color: '#FFDAC1', category: 'doubutsu' },
]

// コースID → データのマッピング
const courseDataMap = {
  'hiragana-a': hiraganaAData,
  'hiragana-ka': hiraganaKaData,
  'hiragana-sa': hiraganaSaData,
  'hiragana-ta': hiraganaTaData,
  'hiragana-na': hiraganaNaData,
  'hiragana-ha': hiraganaHaData,
  'hiragana-ma': hiraganaMaData,
  'hiragana-ya': hiraganaYaData,
  'hiragana-ra': hiraganaRaData,
  'hiragana-wa': hiraganaWaData,
  'suuji': suujiData,
  'iro': iroData,
  'doubutsu': doubutsuData,
}

// コースアンロック条件
export const COURSE_UNLOCK_RULES = {
  'hiragana-a':  { prerequisite: null,          requiredScore: 0 },
  'hiragana-ka': { prerequisite: 'hiragana-a',  requiredScore: 4 },
  'hiragana-sa': { prerequisite: 'hiragana-ka', requiredScore: 4 },
  'hiragana-ta': { prerequisite: 'hiragana-sa', requiredScore: 4 },
  'hiragana-na': { prerequisite: 'hiragana-ta', requiredScore: 4 },
  'hiragana-ha': { prerequisite: 'hiragana-na', requiredScore: 4 },
  'hiragana-ma': { prerequisite: 'hiragana-ha', requiredScore: 4 },
  'hiragana-ya': { prerequisite: 'hiragana-ma', requiredScore: 3 },
  'hiragana-ra': { prerequisite: 'hiragana-ya', requiredScore: 3 },
  'hiragana-wa': { prerequisite: 'hiragana-ra', requiredScore: 4 },
  'suuji':       { prerequisite: null,          requiredScore: 0 },
  'iro':         { prerequisite: null,          requiredScore: 0 },
  'doubutsu':    { prerequisite: null,          requiredScore: 0 },
}

export function getCourseData(courseId) {
  return courseDataMap[courseId] || []
}

export function getAllCourseIds() {
  return Object.keys(courseDataMap)
}

export function getTotalPages() {
  return Object.values(courseDataMap).reduce((sum, data) => sum + data.length, 0)
}

// 全コースの全データをフラットな配列で返す
export function getAllQuestions() {
  return Object.values(courseDataMap).flat()
}

// コースがアンロック済みかどうかを判定
export function isCourseUnlocked(courseId, unlockedPages) {
  const rule = COURSE_UNLOCK_RULES[courseId]
  if (!rule || !rule.prerequisite) return true

  // 前提コースの解放済みページ数をカウント
  const prereqData = courseDataMap[rule.prerequisite] || []
  const prereqUnlocked = prereqData.filter(q => unlockedPages.includes(q.id)).length
  return prereqUnlocked >= rule.requiredScore
}
