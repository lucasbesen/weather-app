import { stringify } from 'query-string';

import { AppThunk } from 'app/store';

import {
  fetchWeatherCompleted,
  fetchWeatherPending,
  fetchWeatherFailed,
} from './actions';

// Fetch weather
export const thunkFetchWeather = (lat: number, lon: number): AppThunk => {
  return function (dispatch) {
    dispatch(fetchWeatherPending());

    const params = {
      appid: '168aafd4df1cd6126cfd691cf6a5dfb4',
      lat,
      lon,
    };

    const url =
      'http://api.openweathermap.org/data/2.5/weather?' + stringify(params);

    return fetch(url)
      .then(
        (response) => response.json(),
        (error) => dispatch(fetchWeatherFailed(error.message)),
      )
      .then((data) => {
        if (data.cod !== 200) {
          return dispatch(fetchWeatherFailed(data.message));
        }
        // Setup weather
        const weather = {
          kind: data.weather[0].description,
          title: data.weather[0].main,
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
        };

        dispatch(fetchWeatherCompleted(weather));
      })
      .catch((error) => error);
  };
};
