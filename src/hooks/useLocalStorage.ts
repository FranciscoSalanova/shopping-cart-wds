import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const localValue = localStorage.getItem(key)

    if (localValue == null) {
      if (typeof initialValue === 'function') {
        return (initialValue as () => T)()
      } else {
        return initialValue
      }
    } else {
      return JSON.parse(localValue)
    }
  })

  useEffect(() => {
    if (value === undefined) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}
