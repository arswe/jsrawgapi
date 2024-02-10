/* eslint-disable react/prop-types */
import { Box, Typography } from '@mui/material'

const PlatformIconList = ({ platforms }) => {
  return (
    <Box>
      {platforms.map((platform) => (
        <Typography key={platform.id}>{platform.name}</Typography>
      ))}
    </Box>
  )
}

export default PlatformIconList
