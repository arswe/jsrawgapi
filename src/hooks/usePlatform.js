import usePlatforms from './usePlatforms'

const usePlatform = (id) => {
  const { data: platforms } = usePlatforms()

  if (!platforms) {
    return null
  }

               return platforms.results.find((p) => p.id === id)
}

export default usePlatform
