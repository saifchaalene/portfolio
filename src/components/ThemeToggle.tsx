import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return document.documentElement.classList.contains('dark')
    }
    return true
  })

  useEffect(() => {
    const el = document.documentElement
    if (dark) {
      el.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      el.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <motion.button
      aria-label="Toggle theme"
      onClick={() => setDark((d) => !d)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="ml-3 p-2 rounded-lg bg-slate-800/80 dark:bg-slate-800 text-cyan-400 dark:text-slate-200 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/20 transition-colors border border-transparent dark:border-transparent hover:border-cyan-400/30"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: dark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {dark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  )
}
