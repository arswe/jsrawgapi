/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

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

          {game.parent_platforms.map(({ platform }) => (
            <Typography key={platform.id}>{platform.name}</Typography>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GameCard
