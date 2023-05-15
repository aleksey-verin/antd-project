import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import postsSlice from './reducers/postsSlice';
// import { storage, storageSetItem } from '../utils/storage';
// import currentWeatherSlice from './reducers/currentWeatherSlice';
// import favoriteCitiesSlice from './reducers/favoriteCitiesSlice';
// import forecastWeatherSlice from './reducers/forecastWeatherSlice';
// import statisticsSlice from './reducers/statisticsSlice';

export const rootReducer = combineReducers({
  postsSlice
  // currentWeatherSlice,
  // favoriteCitiesSlice,
  // forecastWeatherSlice,
  // statisticsSlice
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
