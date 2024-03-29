import { useInfiniteQuery } from '@tanstack/react-query'
import ms from 'ms'
import APIClient from '../services/api-client'
import useQueryStore from '../store'

const apiClient = new APIClient('/games')

const useGames = () => {
  const gameQuery = useQueryStore((s) => s.gameQuery)

  return useInfiniteQuery({
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
    staleTime: ms('24h'),
  })
}

export default useGames
