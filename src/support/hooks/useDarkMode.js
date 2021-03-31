import { useState, useEffect, useCallback } from 'react'
import LocalStorage from 'support/services/LocalStorage'

export default function useDarkMode () {

  const localStorageKey = 'dark_mode'
  const initialValue = !!LocalStorage.get(localStorageKey)
  const [darkMode, setDarkMode] = useState(initialValue)
  const element = document.querySelector('html')

  const applyDarkMode = useCallback((value) => {
    if (value === true) {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }, [element])

  useEffect(() => {

    applyDarkMode(darkMode)
    LocalStorage.save(localStorageKey, darkMode)

  }, [darkMode, applyDarkMode])

  return [darkMode, setDarkMode]
}