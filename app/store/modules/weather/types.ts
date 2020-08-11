import {
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_FAILED,
  FETCH_WEATHER_COMPLETED,
} from './actions';

export interface IWeather {
  kind: string;
  title: string;
  icon: string;
  temperature: string;
  city: string;
  country: string;
}

interface FetchWeatherPendingAction {
  type: typeof FETCH_WEATHER_PENDING;
}

interface FetchWeatherFailedAction {
  type: typeof FETCH_WEATHER_FAILED;
  error: string;
}

interface FetchWeatherCompletedAction {
  type: typeof FETCH_WEATHER_COMPLETED;
  weather: IWeather;
}

export type WeatherActionTypes =
  | FetchWeatherPendingAction
  | FetchWeatherFailedAction
  | FetchWeatherCompletedAction;

export type WeatherState = {
  isFetching: boolean;
  error: string | null;
  weather: IWeather | {};
};
