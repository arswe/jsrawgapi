import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const useGames = () => {
  const [games, getGames] = useState([])
  const [error, getError] = useState('')

  useEffect(() => {
    apiClient
      .get('/games')
      .then((response) => getGames(response.data.results))
      .catch((err) => getError(err.message))
  }, [])

  return { games, error }
}

export default useGames
