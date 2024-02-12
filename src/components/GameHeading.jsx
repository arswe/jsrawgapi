/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import useGenre from '../hooks/useGenre'
import usePlatform from '../hooks/usePlatform'

const GameHeading = ({ gameQuery }) => {
  
  const platform = usePlatform(gameQuery.platformId)
  const genre = useGenre(gameQuery.genreId)

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
