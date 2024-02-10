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

const GenreList = () => {
  const { data, error, isLaoding } = useGenres()
  if (error) return <div>Something went wrong!</div>

  if (isLaoding) return <CircularProgress />

  return (
    <List>
      <Typography
        variant='h4'
        component='h4'
        sx={{ m: 1, fontFamily: 'rajdhani', fontWeight: 700 }}
      >
        Genres
      </Typography>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <Stack direction='row' spacing={2} overflow={'hidden'}>
            <Avatar
              src={getCroppedImageUrl(genre.image_background)}
              sx={{ objectFit: 'cover' }}
            />
            <Typography
              component={'a'}
              sx={{
                pt: 1,
                fontFamily: 'rajdhani',
                ':hover': { textDecoration: 'underline' },
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onClick={() => console.log('log')}
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
