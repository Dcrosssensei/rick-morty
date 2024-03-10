import { configureStore } from '@reduxjs/toolkit'
import favoriteSlice from './favoriteSlide';
import charactersSlice  from './charactersSlide';

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice,
    characters: charactersSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch