import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'

const PlatformSelector = () => {
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl fullWidth>
        <InputLabel size='small' id='PlatformSelector'>
          Age
        </InputLabel>
        <Select
          labelId='PlatformSelector'
          id='demo-simple-select'
          value={age}
          label='Age'
          size='small'
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default PlatformSelector
