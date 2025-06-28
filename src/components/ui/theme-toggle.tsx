'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark')

  // Check current theme on component mount
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  // Toggle theme
  const toggleTheme = React.useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }, [theme])

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 z-50 flex h-8 w-8 items-center justify-center rounded-full transition-opacity overflow-hidden ${
        theme === 'light' 
          ? 'text-custom-blue hover:opacity-80' 
          : 'bg-black/80 backdrop-blur-sm text-white hover:opacity-80'
      } ${className}`}
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'light' 
            ? 'scale-100 translate-y-0 opacity-100' 
            : 'scale-50 translate-y-5 opacity-0'
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === 'dark' 
            ? 'scale-100 translate-y-0 opacity-100' 
            : 'scale-50 translate-y-5 opacity-0'
        }`}
      />
    </button>
  )
} 