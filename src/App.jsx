import { Container } from '@mui/material'
import GameGrid from './layouts/GameGrid'

function App() {
  return (
    <Container maxWidth={'xl'}>
      <h1>All Games</h1>
      <GameGrid />
    </Container>
  )
}

export default App
