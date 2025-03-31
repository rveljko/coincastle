import { ThemeLabel } from '@utils/types'
import { createContext, useContext, useEffect, useState } from 'react'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: ThemeLabel
  newTheme: ThemeLabel
  isLightTheme: boolean
  setTheme: React.Dispatch<React.SetStateAction<ThemeLabel>>
  setNewTheme: React.Dispatch<React.SetStateAction<ThemeLabel>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

function getInitialTheme(): ThemeLabel {
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'system'
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [newTheme, setNewTheme] = useState<ThemeLabel>(theme)

  const isLightTheme =
    theme === 'light' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: light)').matches)

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ theme, newTheme, isLightTheme, setTheme, setNewTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be within a ThemeContextProvider')
  }

  return context
}
