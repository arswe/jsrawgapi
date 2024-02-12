import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import APIClient from '../services/api-client'

const apiClient = new APIClient('/platforms/lists/parents')

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 10 * 60 * 60 * 1000,
    initialData: platforms,
  })

export default usePlatforms
