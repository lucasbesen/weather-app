import { WeatherState } from 'app/store/modules/weather/types';

// Selectors
const getIsFetching = ({ isFetching }: WeatherState) => isFetching;

const getWeather = ({ weather }: WeatherState) => weather;

const selectors = {
  getIsFetching,
  getWeather,
};

export default selectors;
