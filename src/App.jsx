import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import GameHeading from './components/GameHeading'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import Navbar from './components/common/Navbar'
import GameGrid from './layouts/GameGrid'
import GenreList from './layouts/GenreList'

function App() {
  const [gameQuery, setGameQuery] = useState({})

  return (
    <>
      <Navbar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <Box sx={{ m: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </Grid>

          <Grid item xs={6} sm={8} md={8} lg={9} xl={10}>
            <GameHeading gameQuery={gameQuery} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Box>
            <GameGrid gameQuery={gameQuery} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default App
