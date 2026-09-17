'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export const ScrollToTopComponent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white shadow-lg transition-all hover:scale-110 active:scale-95"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  )
}
