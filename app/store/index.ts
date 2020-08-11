import { createStore, applyMiddleware, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { weatherReducer } from './modules/weather';

const logger = createLogger({ collapsed: true });

export type RootState = ReturnType<typeof weatherReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Setup Redux store
const store = createStore(weatherReducer, applyMiddleware(thunk, logger));

export default store;
