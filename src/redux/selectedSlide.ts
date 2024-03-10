import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../models/character';

export interface selectForm {
  character: Character | null,
  fav: boolean
}

export interface selectedState  {
  selected: selectForm,

}

const initialState: selectedState = {
    selected: {character:null, fav: false},
}

export const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {

    selected:(state, action: PayloadAction<selectForm>) =>{
        state.selected.character =action.payload.character;
        state.selected.fav =action.payload.fav;
    },
    
    changeFav:(state, action: PayloadAction<boolean>) =>{
        state.selected.fav =action.payload;
    },

    unselect: (state) => {
      state.selected.character = null;
      state.selected.fav = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { selected, unselect, changeFav} = selectedSlice.actions

export default selectedSlice.reducer