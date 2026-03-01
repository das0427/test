import { useCallback, useRef } from 'react'

export function useSpeech() {
  const utteranceRef = useRef(null)

  const speak = useCallback((text, rate = 0.85) => {
    if (!('speechSynthesis' in window)) return

    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'ja-JP'
    u.rate = rate
    u.pitch = 1.3
    u.volume = 0.8

    // 日本語ボイスを探す
    const voices = window.speechSynthesis.getVoices()
    const jaVoice = voices.find((v) => v.lang.startsWith('ja'))
    if (jaVoice) u.voice = jaVoice

    utteranceRef.current = u
    window.speechSynthesis.speak(u)
  }, [])

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
  }, [])

  return { speak, stop }
}
