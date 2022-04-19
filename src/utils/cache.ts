class LocalCache {
  setCache(key: string, value: any, isLocalStroage = true) {
    if (isLocalStroage) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    }
  }
  getCache(key: string, isLocalStroage = true) {
    let value = null
    if (isLocalStroage) {
      value = window.localStorage.getItem(key)
    } else {
      value = window.sessionStorage.getItem(key)
    }
    if (value) {
      return JSON.parse(value)
    }
  }
  delCache(key: string, isLocalStroage = true) {
    if (isLocalStroage) {
      window.localStorage.removeItem(key)
    } else {
      window.sessionStorage.removeItem(key)
    }
  }
  clearCache() {
    window.localStorage.clear()
    window.sessionStorage.clear()
  }
}
export default new LocalCache()
