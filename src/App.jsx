import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import GameHeading from './components/GameHeading'
import GengreHeading from './components/GengreHeading'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import Navbar from './components/common/Navbar'
import GameGrid from './layouts/GameGrid'
import GenreList from './layouts/GenreList'

function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ m: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
            <GengreHeading />
            <GenreList />
          </Grid>

          <Grid item xs={6} sm={8} md={8} lg={9} xl={10}>
            <GameHeading />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <PlatformSelector />
              <SortSelector />
            </Box>
            <GameGrid />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
