import { create } from 'zustand'

create((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  
}))
