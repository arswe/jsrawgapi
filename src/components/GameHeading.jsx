/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'

const GameHeading = ({ gameQuery }) => {
  const heading = `
  ${gameQuery.platform?.name || ''} 
  ${gameQuery.genre?.name || ''} Games`
  return (
    <Box sx={{ my: 2 }}>
      <Typography
        component={'h4'}
        variant='h4'
        sx={{ fontFamily: 'rajdhani', fontWeight: 600 }}
      >
        {heading}
      </Typography>
    </Box>
  )
}

export default GameHeading
