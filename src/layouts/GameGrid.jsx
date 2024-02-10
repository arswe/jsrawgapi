/* eslint-disable react/prop-types */
import { Grid } from '@mui/material'
import GameCard from '../components/GameCard'
import GameCardSkeleton from '../components/GameCardSkeleton'
import GameCardContainer from '../containers/GameCardContainer'
import useGames from '../hooks/useGames'

const GameGrid = ({ selectedGenre }) => {
  const { data, error, isLaoding } = useGames(selectedGenre)

  if (error) return <div>Something went wrong!</div>

  const skeletons = Array.from({ length: 8 }, (_, index) => index)

  return (
    <Grid container spacing={2}>
      {isLaoding &&
        skeletons.map((skeleton) => (
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={skeleton}>
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          </Grid>
        ))}

      {data?.map((game) => (
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={game.id}>
          <GameCardContainer>
            <GameCard game={game} />
          </GameCardContainer>
        </Grid>
      ))}
    </Grid>
  )
}

export default GameGrid
