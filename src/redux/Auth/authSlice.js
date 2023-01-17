import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem("token") ? localStorage.getItem("token") :  false ;
const user = {} ;

const initialState = { token, user }; 

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },

    register: (state, action) => {
      state.token = action.payload;
    },

    logout: (state) => {
      state.token = false;
      state.user = {};
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

  },
});

export const { login, logout, register, setUser } = authSlice.actions;

export default authSlice.reducer;
