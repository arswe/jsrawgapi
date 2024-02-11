/* eslint-disable react/prop-types */
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import usePlatform from '../hooks/usePlatform'

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }) => {
  const { data } = usePlatform()
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel size='small' id='Platform' sx={{ fontFamily: 'rajdhani' }}>
          {selectedPlatform?.name || 'Platform'}
        </InputLabel>
        <Select
          sx={{ fontFamily: 'rajdhani' }}
          labelId='Platform'
          label={selectedPlatform?.name || 'Platform'}
          size='small'
          value={selectedPlatform?.name || ''}
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
