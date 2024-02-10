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
          height='140'
          image={game.background_image}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
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
