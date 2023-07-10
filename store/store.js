import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from '../store/bookmarkSlice'

const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
  },
});

export default store;
