import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../models/character'

export interface charactersState {
  characters: Array<Character>
}

const initialState: charactersState = {
  characters: [],
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {

    addCharacters:(state, action: PayloadAction<Array<Character>>) =>{
            state.characters = action.payload
    },

    resetCharacters: (state) => {
      state.characters = [];
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCharacters , resetCharacters } = charactersSlice.actions

export default charactersSlice.reducer