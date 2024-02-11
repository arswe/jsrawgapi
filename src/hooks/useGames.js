import { useInfiniteQuery } from '@tanstack/react-query'
import APIClient from '../services/api-client'

const apiClient = new APIClient('/games')

const useGames = (gameQuery) =>
  useInfiniteQuery({
    queryKey: ['games'],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
  })

export default useGames
