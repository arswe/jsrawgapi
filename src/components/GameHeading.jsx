/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'
import useGenre from '../hooks/useGenre'
import usePlatform from '../hooks/usePlatform'
import useQueryStore from '../store'

const GameHeading = () => {
  const genreId = useQueryStore((s) => s.gameQuery.genreId)
  const platformId = useQueryStore((s) => s.gameQuery.platformId)

  const genre = useGenre(genreId)
  const platform = usePlatform(platformId)

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
