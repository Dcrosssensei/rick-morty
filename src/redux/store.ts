import { configureStore } from '@reduxjs/toolkit'
import selectedSlice from './selectedSlide';
import charactersSlice  from './charactersSlide';
import  favoriteSlice from './favoritesSlide';

export const store = configureStore({
  reducer: {
    selected: selectedSlice,
    characters: charactersSlice,
    favorites:favoriteSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch