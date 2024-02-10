import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const GameGrid = () => {
  const [games, getGames] = useState([])
  const [error, getError] = useState('')

  useEffect(() => {
    apiClient
      .get('/games')
      .then((response) => getGames(response.data.results))
      .catch((err) => getError(err.message))
  })

  return (
    <ul>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <li key={game.id}> {game.title} </li>
      ))}
    </ul>
  )
}

export default GameGrid
