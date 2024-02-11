import { Box } from '@mui/material'

// eslint-disable-next-line react/prop-types
const GameCardContainer = ({ children }) => {
  return (
    <Box
      sx={{
        '&:hover': {
          boxShadow: 8,
          transform: 'scale(1.03)',
          transition: 'transform .15s ease-in',
        },
        maxWidth: '100%',
        my: 2,
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  )
}

export default GameCardContainer
