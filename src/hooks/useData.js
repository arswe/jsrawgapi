import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const useData = (endpoint, requestConfig, deps) => {
  const [data, setData] = useState([])
  const [error, getError] = useState('')
  const [isLaoding, setIsLaoding] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    setIsLaoding(true)
    apiClient
      .get(endpoint, { signal: controller.signal, ...requestConfig })
      .then((response) => {
        setData(response.data.results)
        setIsLaoding(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        getError(err.message)
        setIsLaoding(false)
      })
    return () => controller.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps || [])

  return { data, error, isLaoding }
}

export default useData
