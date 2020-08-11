import {
  FETCH_WEATHER_COMPLETED,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_FAILED,
} from './actions';

import { WeatherActionTypes, WeatherState } from './types';

const initialState: WeatherState = {
  isFetching: false,
  error: null,
  weather: {},
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
