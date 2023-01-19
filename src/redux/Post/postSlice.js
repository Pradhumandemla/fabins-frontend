import { createSlice } from '@reduxjs/toolkit';

// const token = localStorage.getItem("token") ? localStorage.getItem("token") :  false ;
const posts = [] ;

const initialState = { posts }; 

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = action.payload;
    },

    // register: (state, action) => {
    //   state.token = action.payload;
    // },

    // logout: (state) => {
    //   state.token = false;
    //   state.user = {};
    // },

    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },

  },
});

// export const { login, logout, register, setUser } = authSlice.actions;

export default authSlice.reducer;
