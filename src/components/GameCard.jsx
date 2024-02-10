/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@mui/material'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
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
        <CardContent sx={{ 1: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {game.name} <CriticScore score={game.metacritic} />
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
