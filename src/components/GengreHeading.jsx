/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'

const GengreHeading = ({ gameQuery }) => {
  const genreHeading = `${gameQuery.genre?.name || ''}`
  return (
    <Box sx={{ my: 2 }}>
      <Typography
        component={'h4'}
        variant='h4'
        sx={{ fontFamily: 'rajdhani', fontWeight: 600 }}
      >
        {genreHeading}
      </Typography>
    </Box>
  )
}

export default GengreHeading
