import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export const store = makeStore();
