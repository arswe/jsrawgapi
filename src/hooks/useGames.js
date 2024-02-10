import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const useGames = () => {
  const [games, getGames] = useState([])
  const [error, getError] = useState('')
  const [isLaoding, setIsLaoding] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setIsLaoding(true)
    apiClient
      .get('/games', { signal: controller.signal })
      .then((response) => {
        getGames(response.data.results)
        setIsLaoding(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        getError(err.message)
        setIsLaoding(false)
      })
    return () => controller.abort()
  }, [])

  return { games, error, isLaoding }
}

export default useGames
