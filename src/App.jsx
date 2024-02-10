import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import GameHeading from './components/GameHeading'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameGrid from './layouts/GameGrid'
import GenreList from './layouts/GenreList'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState(null)

  return (
    <Box sx={{ m: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </Grid>

        <Grid item xs={6} sm={8} md={8} lg={9} xl={10}>
          <GameHeading />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector />
          </Box>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App
