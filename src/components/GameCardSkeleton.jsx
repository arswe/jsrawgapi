import { Card, CardContent, Skeleton, Typography } from '@mui/material'
import { Box } from '@mui/system'

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton variant='rectangular' height={240} />

      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton variant='rectangular' width={100} height={24} />

          <Skeleton variant='rectangular' width={60} height={24} />
        </Box>

        <Typography gutterBottom variant='h6' component='h6'>
          <Skeleton width='80%' />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default GameCardSkeleton
