import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FavoriteState {
  favorite: Array<number | null>
}

const initialState: FavoriteState = {
    favorite: [],
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {

    addFavorite:(state, action: PayloadAction<number>) =>{
        state.favorite.push(action.payload)
    },

    removeFavorite: (state, action: PayloadAction<number>) => {
      const index = state.favorite.indexOf(action.payload);
      if (index !== -1)  state.favorite.splice(index,1);
    },

    resetFavorite: (state) => {
      state.favorite = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite, resetFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer