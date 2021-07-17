import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { dogsReducer } from './dogs';

const reducers = combineReducers({
  counter: counterReducer,
  dogs: dogsReducer,
});

export default reducers;
