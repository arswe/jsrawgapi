import { create } from 'zustand'

const useQueryStore = create((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOder: (sortOder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOder } })),
}))

export default useQueryStore
