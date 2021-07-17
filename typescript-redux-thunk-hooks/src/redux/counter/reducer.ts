import * as types from './actionTypes';
import { CounterState, CounterActions } from './types';

const INITIAL_STATE: CounterState = {
  value: 0,
};

export default (state = INITIAL_STATE, action: CounterActions) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return { ...state, value: state.value + 1 };
    case types.DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};
