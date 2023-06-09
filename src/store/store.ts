import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './reducers/postsSlice';
import usersSlice from './reducers/usersSlice';
import commentsSlice from './reducers/commentsSlice';
import themeSlice from './reducers/themeSlice';
import { storage, storageSetItem } from '../utils/storage';

export const rootReducer = combineReducers({
  postsSlice,
  usersSlice,
  commentsSlice,
  themeSlice
});

export const store = configureStore({
  reducer: rootReducer
});

store.subscribe(() => {
  storageSetItem(storage.theme, store.getState().themeSlice);
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
