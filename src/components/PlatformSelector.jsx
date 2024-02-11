/* eslint-disable react/prop-types */
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }) => {
  const { data } = usePlatforms()
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel size='small' id='Platform' sx={{ fontFamily: 'rajdhani' }}>
          {selectedPlatformId?.name || 'Platform'}
        </InputLabel>
        <Select
          sx={{ fontFamily: 'rajdhani' }}
          labelId='Platform'
          label={selectedPlatformId?.name || 'Platform'}
          size='small'
          value={selectedPlatformId?.name || ''}
        >
          {data?.results.map((platform) => (
            <MenuItem
              sx={{ fontFamily: 'rajdhani' }}
              key={platform.id}
              value={platform.name}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default PlatformSelector
