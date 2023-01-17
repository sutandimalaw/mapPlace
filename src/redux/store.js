import { configureStore } from '@reduxjs/toolkit';
import  sourceReducer from './sourceSlice';

export const store = configureStore({
  reducer: {
    map : sourceReducer
  },  
}); 