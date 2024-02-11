import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/api-client'

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () => apiClient.get('/genres').then((res) => res.data),
  })

export default useGenres
