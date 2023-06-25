import { useEffect, useState } from 'react'

const usePersistentValue = (defaultValue, key) => {
  const persistedValue = window?.localStorage.getItem(key)
  const [value, setValue] = useState(JSON.parse(persistedValue) || defaultValue)

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default usePersistentValue
