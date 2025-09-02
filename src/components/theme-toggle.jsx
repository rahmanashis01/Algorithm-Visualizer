'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true) // Default to dark theme

  useEffect(() => {
    // Check if there's a saved theme preference, default to dark
    const savedTheme = localStorage.getItem('theme')
    
    // Always default to dark unless explicitly set to light
    if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className="theme-toggle-slider">
        {isDark ? (
          <Moon className="w-2 h-2 text-blue-200" />
        ) : (
          <Sun className="w-2 h-2 text-yellow-600" />
        )}
      </div>
    </div>
  )
}
