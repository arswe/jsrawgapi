/* eslint-disable react/prop-types */
import {
  Avatar,
  CircularProgress,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../utils/image-url'

const GenreList = ({ onSelectGenre, selectedGenre }) => {
  const { data, error, isLaoding } = useGenres()

  if (error) return <div>Something went wrong!</div>
  if (isLaoding) return <CircularProgress />

  return (
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id}>
          <Stack direction='row' spacing={2} overflow={'hidden'}>
            <Avatar
              src={getCroppedImageUrl(genre.image_background)}
              sx={{ objectFit: 'cover' }}
            />
            <Typography
              component={'a'}
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : '500'}
              sx={{
                pt: 1,
                fontFamily: 'rajdhani',
                ':hover': { textDecoration: 'underline' },
                cursor: 'pointer',
                textAlign: 'left',
              }}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Typography>
          </Stack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList
