import useData from './useData'

const useGames = (gameQuery) =>
  useData(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  )

export default useGames
