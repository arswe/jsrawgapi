/* eslint-disable react/prop-types */
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const SortSelector = ({ onSelectSortOrder, sortOrder }) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]

  const currentSortOrder = sortOrders.find((order) => order.value === sortOrder)

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel
          size='small'
          id='OrderbyRelevance'
          sx={{ fontFamily: 'rajdhani' }}
        >
          {currentSortOrder?.label || 'Relevance'}
        </InputLabel>
        <Select
          sx={{ fontFamily: 'rajdhani' }}
          labelId='Platform'
          label={currentSortOrder?.label || 'Platform'}
          size='small'
          value={currentSortOrder?.label || ''}
        >
          {sortOrders.map((sortOrder) => (
            <MenuItem
              sx={{ fontFamily: 'rajdhani' }}
              key={sortOrder.label}
              value={sortOrder.value}
              onClick={() => onSelectSortOrder(sortOrder.value)}
            >
              {sortOrder.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SortSelector
