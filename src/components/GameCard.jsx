/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import PlatformIconList from './PlatformIconList'

const GameCard = ({ game }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={game.name}
          height='140'
          image={game.background_image}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {game.name}
          </Typography>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GameCard
