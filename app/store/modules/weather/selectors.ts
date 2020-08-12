import { WeatherState } from 'app/store/modules/weather/types';

// Selectors
const getIsFetching = ({ isFetching }: WeatherState) => isFetching;

const getError = ({ error }: WeatherState) => error;

const getWeather = ({ weather }: WeatherState) => weather;

const selectors = {
  getError,
  getIsFetching,
  getWeather,
};

export default selectors;
