import { createSlice } from '@reduxjs/toolkit';

const loader = false ;

const initialState = { loader }; 

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    viewLoader: (state) => {
      state.loader = true;
    },
    hideLoader: (state) => {
      state.loader = false;
    }
  },
});

export const { viewLoader, hideLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
