import { useEffect, useState } from 'react'

export const useStoredState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const value = localStorage.getItem(key)
    return value !== null ? JSON.parse(value) : defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}
