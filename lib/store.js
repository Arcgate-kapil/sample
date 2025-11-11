import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterReducer';
import blogReducer from './features/blogSlice';

export function makeStore(preloadedState) {
  return configureStore({
    reducer: {
      counter: counterReducer,
      blog: blogReducer,
    },
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}

export const store = makeStore();
