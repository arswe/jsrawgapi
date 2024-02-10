/* eslint-disable react/prop-types */
import { Avatar, Stack } from '@mui/material'
import bullsEye from '../assets/bulls-eye.webp'
import meh from '../assets/meh.webp'
import thumbsUp from '../assets/thumbs-up.webp'

const Emoji = ({ rating }) => {
  if (rating < 3) return null

  const emojiMap = {
    3: <Avatar alt='meh' src={meh} sx={{ width: 20, height: 20 }} />,
    4: (
      <Avatar alt='recommended' src={thumbsUp} sx={{ width: 20, height: 20 }} />
    ),
    5: (
      <Avatar alt='exceptional' src={bullsEye} sx={{ width: 20, height: 20 }} />
    ),
  }
  return <Stack>{emojiMap[rating]}</Stack>
}

export default Emoji
