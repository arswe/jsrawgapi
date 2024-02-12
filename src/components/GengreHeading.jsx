/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import useGenre from '../hooks/useGenre'

const GengreHeading = ({ gameQuery }) => {
  const genre = useGenre(gameQuery.genreId)
  const genreHeading = `${genre?.name || 'Genres'}`
  return (
    <Box sx={{ my: 2 }}>
      <Typography
        component={'h5'}
        variant='h5'
        sx={{ fontFamily: 'rajdhani', fontWeight: 600, ml: 2 }}
      >
        {genreHeading}
      </Typography>
    </Box>
  )
}

export default GengreHeading
