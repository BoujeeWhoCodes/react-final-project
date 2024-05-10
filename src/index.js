
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './Store/Slices/WeatherSlice';

const store = configureStore({
	reducer: {
		weather: weatherReducer,
	},
});

export default store;
