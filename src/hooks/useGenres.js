import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import apiClient from '../services/api-client'

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get('/genres').then((res) => res.data),
    staleTime: 10 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  })

export default useGenres
