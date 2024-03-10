import { configureStore } from '@reduxjs/toolkit'
import selectedSlice from './selectedSlide';
import charactersSlice  from './charactersSlide';

export const store = configureStore({
  reducer: {
    selected: selectedSlice,
    characters: charactersSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch