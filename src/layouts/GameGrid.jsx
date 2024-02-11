/* eslint-disable react/prop-types */
import SaveIcon from '@mui/icons-material/Save'
import LoadingButton from '@mui/lab/LoadingButton'
import { Grid } from '@mui/material'
import React from 'react'
import GameCard from '../components/GameCard'
import GameCardSkeleton from '../components/GameCardSkeleton'
import GameCardContainer from '../components/containers/GameCardContainer'
import useGames from '../hooks/useGames'

const GameGrid = ({ gameQuery }) => {
  const {
    data,
    error,
    isLaoding,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery)

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

      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.results.map((game) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={game.id}>
              <GameCardContainer>
                <GameCard game={game} />
              </GameCardContainer>
            </Grid>
          ))}
        </React.Fragment>
      ))}

      {hasNextPage && (
        <LoadingButton
          loading
          loadingPosition='start'
          startIcon={<SaveIcon />}
          variant='outlined'
          onClick={() => fetchNextPage()}
          sx={{ fontFamily: 'rajdhani', m: 1, fontWeight: 700 }}
        >
          {isFetchingNextPage ? 'Laoding ' : 'Laod More'}
        </LoadingButton>
      )}
    </Grid>
  )
}

export default GameGrid
