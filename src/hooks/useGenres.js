import { useQuery } from '@tanstack/react-query'

const useGenres = () =>
  useQuery({
    queryKey: ['genre'],
    queryFn: () => ,
  })

export default useGenres
