import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import usePlatform from '../hooks/usePlatform'

const PlatformSelector = () => {
  const { data } = usePlatform()
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel size='small' id='Platform'>
          Age
        </InputLabel>
        <Select
          labelId='Platform'
          label='Age'
          size='small'
          onChange={() => console.log('ok')}
        >
          {data.map((platform) => (
            <MenuItem key={platform.id} value={platform.id}>
              {platform.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default PlatformSelector
