import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import capsulesSlice from './capsulesSlice';


const rootReducer = combineReducers({
  capsules: capsulesSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export default store;