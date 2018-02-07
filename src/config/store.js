import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const INITIAL_STATE = {};

const store = createStore(
  combineReducers(reducers), 
  INITIAL_STATE, 
  applyMiddleware(logger, thunk)
);

export default store;