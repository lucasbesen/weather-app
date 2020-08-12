import {
  FETCH_WEATHER_COMPLETED,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_FAILED,
} from './actions';

import { WeatherActionTypes, WeatherState, IWeather } from './types';

const initialState: WeatherState = {
  isFetching: false,
  error: null,
  weather: {} as IWeather,
};

const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes,
): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_PENDING:
      return { ...state, error: null, isFetching: true };
    case FETCH_WEATHER_FAILED:
      return { ...state, isFetching: false, error: action.error };
    case FETCH_WEATHER_COMPLETED:
      return { ...state, isFetching: false, weather: action.weather };
    default:
      return state;
  }
};

export default weatherReducer;
