import { motion } from 'framer-motion'

// モコ（くまのキャラクター）- SVGイラスト
export default function MokoCharacter({ mood = 'happy', size = 160, speaking = false }) {
  // 表情パーツ
  const faces = {
    happy: { leftEye: '◕', rightEye: '◕', mouth: '◡' },
    sad: { leftEye: '◕', rightEye: '◕', mouth: '︵' },
    excited: { leftEye: '✧', rightEye: '✧', mouth: '▽' },
    surprised: { leftEye: '⊙', rightEye: '⊙', mouth: 'ω' },
    neutral: { leftEye: '◕', rightEye: '◕', mouth: 'ー' },
  }

  const face = faces[mood] || faces.happy

  return (
    <motion.div
      animate={speaking ? { y: [0, -6, 0] } : { y: 0 }}
      transition={speaking ? { repeat: Infinity, duration: 0.6 } : {}}
      className="inline-block"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 耳 */}
        <circle cx="55" cy="45" r="30" fill="#D4A547" />
        <circle cx="55" cy="45" r="18" fill="#8B6914" />
        <circle cx="145" cy="45" r="30" fill="#D4A547" />
        <circle cx="145" cy="45" r="18" fill="#8B6914" />

        {/* 顔 */}
        <ellipse cx="100" cy="110" rx="70" ry="72" fill="#D4A547" />

        {/* お腹（顔の下部の明るい部分） */}
        <ellipse cx="100" cy="130" rx="45" ry="40" fill="#F0D078" />

        {/* 目 */}
        <text x="72" y="105" fontSize="22" textAnchor="middle" fill="#3D2800">
          {face.leftEye}
        </text>
        <text x="128" y="105" fontSize="22" textAnchor="middle" fill="#3D2800">
          {face.rightEye}
        </text>

        {/* 鼻 */}
        <ellipse cx="100" cy="118" rx="8" ry="6" fill="#8B6914" />

        {/* ほっぺ */}
        <circle cx="62" cy="122" r="10" fill="#FFB5A7" opacity="0.6" />
        <circle cx="138" cy="122" r="10" fill="#FFB5A7" opacity="0.6" />

        {/* 口 */}
        <text x="100" y="145" fontSize="24" textAnchor="middle" fill="#3D2800">
          {face.mouth}
        </text>
      </svg>
    </motion.div>
  )
}
