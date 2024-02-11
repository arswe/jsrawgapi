import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'

const useGames = (gameQuery) =>
  useQuery({
    queryKey: ['/games'],
    queryFn: () =>
      apiClient
        .get('/games', {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 60 * 60 * 1000,
  })

export default useGames
