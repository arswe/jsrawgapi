/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import useGenres from '../hooks/useGenres'
import usePlatform from '../hooks/usePlatform'

const GameHeading = ({ gameQuery }) => {
  const { data: genres } = useGenres()
  const genre = genres.results.find((g) => g.id === gameQuery.genreId)

  const platform = usePlatform(gameQuery.platformId)

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`

  return (
    <Box sx={{ my: 2 }}>
      <Typography
        component={'h5'}
        variant='h5'
        sx={{ fontFamily: 'rajdhani', fontWeight: 600 }}
      >
        {heading}
      </Typography>
    </Box>
  )
}

export default GameHeading
