import { useState } from 'react'

export default function useLocalStorage (key, defaultItem = null) {

  const [item, setItem] = useState(getFromLocalStorage())

  function getFromLocalStorage () {
    try {
      const fetchedItem = window.localStorage.getItem(key)
      return JSON.parse(fetchedItem)
    } catch (err) {
      return defaultItem
    }
  }

  function saveToLocalStorage (item) {
    setItem(item)
    window.localStorage.setItem(key, JSON.stringify(item))
  }

  return [item, saveToLocalStorage]

}
