import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterReducer from './features/counterReducer';
import blogReducer from './features/blogSlice';

const blogPersistConfig = {
  key: 'blog',
  storage,
  whitelist: ['isHindi', 'showHindButton'],
};

const persistedBlogReducer = persistReducer(blogPersistConfig, blogReducer);

export function makeStore(preloadedState) {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
      blog: persistedBlogReducer,
    },
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
  });

  return store;
}

export const store = makeStore();
export const persistor = persistStore(store);
