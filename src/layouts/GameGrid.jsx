import { Grid } from '@mui/material'
import GameCard from '../components/GameCard'
import useGames from '../hooks/useGames'

const GameGrid = () => {
  const { games, error } = useGames()

  return (
    <Grid container spacing={2}>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={game.id}>
          <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
  )
}

export default GameGrid
