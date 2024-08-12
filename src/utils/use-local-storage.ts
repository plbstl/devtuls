import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'

/**
 * Creates a stateful value that is persisted to localStorage, and a function to update it.
 * Data is synced between components in the same and different browser tabs.
 *
 * Updating the localStorage directly from browser developer tools also rerenders the relevant components.
 * @param key
 * @param defaultValue A default value is highly recommended.
 * @returns The stored value (if any, else, the default value) and a function to update it.
 */
function useLocalStorage<T>(key: string, defaultValue?: T): [T, Dispatch<SetStateAction<T>>]
function useLocalStorage<T>(key: string, defaultValue?: T) {
  const [value, setValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key)
      if (value) {
        return JSON.parse(value) as T
      } else if (defaultValue) {
        // Check if defaultValue is available so that undefined/null are not store as raw strings.
        window.localStorage.setItem(key, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (error) {
      console.warn(error)
      return defaultValue
    }
  })

  /**
   * Updates the value and persist changes to localStorage.
   *
   * Leave empty to remove item from localStorage.
   */
  function setNewValue(newValue?: T) {
    try {
      if (newValue) window.localStorage.setItem(key, JSON.stringify(newValue))
      else window.localStorage.removeItem(key)
      setValue(newValue)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.storageArea !== window.localStorage || e.key !== key || e.newValue === value) return
      // Only rerender if the new value is different, and its the correct localStorage key.
      try {
        setValue(e.newValue ? (JSON.parse(e.newValue) as T) : defaultValue)
      } catch (error) {
        console.warn(error)
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [defaultValue, key, value])

  return [value, setNewValue]
}

export default useLocalStorage
