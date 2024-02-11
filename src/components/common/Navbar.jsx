/* eslint-disable react/prop-types */
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import SearchBar from './SearchBar'

const Navbar = ({ onSearch }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontFamily: 'rajdhani',
              fontWeight: 'bold',
            }}
          >
            Rawg API
          </Typography>
          <SearchBar onSearch={onSearch} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
