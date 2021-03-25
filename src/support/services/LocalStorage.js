class LocalStorage {

  get (key, defaultItem = null) {
    try {
      const fetchedItem = window.localStorage.getItem(key)
      return JSON.parse(fetchedItem)
    } catch (err) {
      return defaultItem
    }
  }

  save (key, item) {
    window.localStorage.setItem(key, JSON.stringify(item))
  }

}

export default new LocalStorage()