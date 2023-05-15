import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './reducers/postsSlice';
import usersSlice from './reducers/usersSlice';

export const rootReducer = combineReducers({
  postsSlice,
  usersSlice
});

export const store = configureStore({
  reducer: rootReducer
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false
  //   })
});

store.subscribe(() => {
  // storageSetItem(storage.weatherStats, store.getState().statisticsSlice);
  // storageSetItem(storage.weatherFavoriteList, store.getState().favoriteCitiesSlice);
  // storageSetItem(storage.weatherCurrentCity, store.getState().currentWeatherSlice.currentCity);
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
