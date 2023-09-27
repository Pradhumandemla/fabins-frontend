import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import loaderReducer from './Loader/loaderSlice';
import postReducer from './Post/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    loader: loaderReducer
  }
});

// export default store;