import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../models/character';

interface selectForm {
  character: Character | object,
  fav: boolean
}

export interface selectedState  {
  selected: selectForm,

}

const initialState: selectedState = {
    selected: {character:{}, fav: false},
}

export const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {

    selected:(state, action: PayloadAction<selectForm>) =>{
        state.selected.character =action.payload.character;
        state.selected.fav =action.payload.fav;
    },

    unselect: (state) => {
      state.selected.character = {};
      state.selected.fav = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { selected, unselect } = selectedSlice.actions

export default selectedSlice.reducer