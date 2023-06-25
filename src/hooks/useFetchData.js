import { useCallback } from 'react'

const useFetchData = () => {
  const fetchData = useCallback(
    async ({ baseUrl, search, onError, onSuccess }) => {
      try {
        const res = await fetch(`${baseUrl}?${search}`)
        const data = await res.json()
        onSuccess(data)
      } catch (error) {
        onError(error)
      }
    },
    [],
  )
  return fetchData
}

export default useFetchData
