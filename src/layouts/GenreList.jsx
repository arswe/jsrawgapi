import { Avatar, List, ListItem, Stack, Typography } from '@mui/material'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../utils/image-url'

const GenreList = () => {
  const { genres } = useGenres()
  return (
    <List>
      <Typography
        variant='h4'
        component='h4'
        sx={{ m: 1, fontFamily: 'rajdhani', fontWeight: 700 }}
      >
        Genres
      </Typography>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <Stack direction='row' spacing={2} overflow={'hidden'}>
            <Avatar
              src={getCroppedImageUrl(genre.image_background)}
              sx={{ objectFit: 'cover' }}
            />
            <Typography
              component={'a'}
              sx={{
                fontFamily: 'rajdhani',
                fontWeight: 600,
                ':hover': {
                  textDecoration: 'underline',
                },
                cursor: 'pointer',
              }}
              whiteSpace={'nowrap'}
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
