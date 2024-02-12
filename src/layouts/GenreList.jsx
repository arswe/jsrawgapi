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
import useQueryStore from '../store'
import getCroppedImageUrl from '../utils/image-url'

const GenreList = () => {
  const { data, error, isLaoding } = useGenres()

  const selectedGenreId = useQueryStore((s) => s.gameQuery.genreId)
  const setGenreId = useQueryStore((s) => s.setGenreId)

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
              fontWeight={genre.id === selectedGenreId ? 'bold' : '500'}
              sx={{
                pt: 1,
                fontFamily: 'rajdhani',
                ':hover': { textDecoration: 'underline' },
                cursor: 'pointer',
                textAlign: 'left',
              }}
              onClick={() => setGenreId(genre)}
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
