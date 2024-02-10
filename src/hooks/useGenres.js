import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const useGenres = () => {
  const [genres, setGenres] = useState([])
  const [error, getError] = useState('')
  const [isLaoding, setIsLaoding] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setIsLaoding(true)
    apiClient
      .get('/genres', { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results)
        setIsLaoding(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        getError(err.message)
        setIsLaoding(false)
      })
    return () => controller.abort()
  }, [])

  return { genres, error, isLaoding }
}

export default useGenres
