import { IWeather, WeatherActionTypes } from './types';

// Redux actions
export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const FETCH_WEATHER_FAILED = 'FETCH_WEATHER_FAILED';
export const FETCH_WEATHER_COMPLETED = 'FETCH_WEATHER_COMPLETED';

export const fetchWeatherPending = (): WeatherActionTypes => ({
  type: FETCH_WEATHER_PENDING,
});

export const fetchWeatherFailed = (error: string): WeatherActionTypes => ({
  type: FETCH_WEATHER_FAILED,
  error,
});

export const fetchWeatherCompleted = (
  weather: IWeather,
): WeatherActionTypes => ({
  type: FETCH_WEATHER_COMPLETED,
  weather,
});
