import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import apiClient from '../services/api-client'

const usePlatform = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get('/platforms').then((res) => res.data),
    staleTime: 10 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  })

export default usePlatform
