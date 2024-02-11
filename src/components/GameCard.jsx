/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import getCroppedImageUrl from '../utils/image-url'
import PlatformIconList from './PlatformIconList'
import CriticScore from './shared/CriticScore'
import Emoji from './shared/Emoji'

const GameCard = ({ game }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={game.name}
          height='140'
          image={getCroppedImageUrl(game.background_image)}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ 1: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant='h6'
              component={'h6'}
              sx={{ fontWeight: 600, fontFamily: 'rajdhani' }}
            >
              {game.name}
            </Typography>

            <CriticScore score={game.metacritic} />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <Emoji rating={game.rating_top} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default GameCard
