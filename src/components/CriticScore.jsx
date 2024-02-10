/* eslint-disable react/prop-types */
import { Badge } from '@mui/material'

const CriticScore = ({ score }) => {
  const styles = score > 75 ? 'primary' : score > 60 ? 'secondary' : 'default'

  return (
    <Badge
      sx={{ mt: 2, whiteSpace: 'nowrap' }}
      badgeContent={score}
      color={styles}
    />
  )
}

export default CriticScore
