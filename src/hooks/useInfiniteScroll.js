import { useEffect, useState } from 'react'

const useInfiniteScroll = (callback) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      0.8 * document.documentElement.offsetHeight
    ) {
      callback()
      setIsLoading(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [isLoading, setIsLoading]
}

export default useInfiniteScroll
