import { Card, CardContent, Skeleton } from '@mui/material'
import { Box } from '@mui/system'

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton variant='rectangular' height={240} />

      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Skeleton variant='rectangular' width={'80%'} />
          <Skeleton variant='rectangular' width={'10%'} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton variant='rectangular' width={'60%'} />
          <Skeleton variant='rectangular' width={'20%'} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default GameCardSkeleton
