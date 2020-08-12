import fetch from 'jest-fetch-mock';

import mockStore from 'app/test/mockStore';
import mockApiResponse from 'app/test/mockApiResponse';

import { thunkFetchWeather } from 'app/store/modules/weather/thunks';
import {
  FETCH_WEATHER_COMPLETED,
  FETCH_WEATHER_PENDING,
  FETCH_WEATHER_FAILED,
} from 'app/store/modules/weather/actions';
import weatherReducer from 'app/store/modules/weather/reducers';

import { IWeather } from '../types';

const LAT = 37.785834;
const LON = -122.406417;

const mockedWeather = {
  kind: 'few clouds',
  title: 'Clouds',
  icon: '03d',
  temperature: 291.15,
  city: 'San Francisco',
  country: 'US',
};

describe('Weather tests', () => {
  it('should fetch weather and emit success actions', async () => {
    fetch.mockResponse(JSON.stringify(mockApiResponse));

    const store = mockStore({
      isFetching: false,
      error: null,
      weather: {},
    });

    return store.dispatch(thunkFetchWeather(LAT, LON)).then(() => {
      const [fetchPending, fetchComplete] = store.getActions();

      // check emmited actions
      expect(fetchPending.type).toEqual(FETCH_WEATHER_PENDING);
      expect(fetchComplete.type).toEqual(FETCH_WEATHER_COMPLETED);

      // check data sent to reducer
      expect(fetchComplete.weather.city).toEqual(mockApiResponse.name);
    });
  });

  it('should fetch weather and emit error actions', async () => {
    const errorMessage = 'Fake error message';
    fetch.mockReject(new Error(errorMessage));

    const store = mockStore({
      isFetching: false,
      error: null,
      weather: {},
    });

    return store.dispatch(thunkFetchWeather(LAT, LON)).then(() => {
      const [fetchPending, fetchRejected] = store.getActions();

      // check emmited actions
      expect(fetchPending.type).toEqual(FETCH_WEATHER_PENDING);
      expect(fetchRejected.type).toEqual(FETCH_WEATHER_FAILED);

      // check data sent to reducer
      expect(fetchRejected.error).toEqual(errorMessage);
    });
  });

  it('should update store on fetchPending action', async () => {
    const action = { type: FETCH_WEATHER_PENDING } as const;

    const initialState = {
      isFetching: false,
      error: null,
      weather: {} as IWeather,
    };

    const nextState = {
      ...initialState,
      isFetching: true,
      error: null,
    };

    expect(weatherReducer(initialState, action)).toEqual(nextState);
  });

  it('should update store on fetchCompleted action', async () => {
    const weather = mockedWeather;

    const action = { type: FETCH_WEATHER_COMPLETED, weather } as const;

    const initialState = {
      isFetching: true,
      error: null,
      weather: {} as IWeather,
    };

    const nextState = {
      ...initialState,
      isFetching: false,
      error: null,
      weather,
    };

    expect(weatherReducer(initialState, action)).toEqual(nextState);
  });
});
