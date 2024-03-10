import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../models/character'

export interface FavoriteState {
  favorite: Character[]
}

const initialState: FavoriteState = {
    favorite: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {

    reduxFavorite:(state, action: PayloadAction<Character[]>) =>{
        state.favorite =action.payload;
    },

  },
})

// Action creators are generated for each case reducer function
export const { reduxFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer