import * as types from './actionTypes';

interface IncrementCounterAction {
  type: typeof types.INCREMENT_COUNTER;
}
interface DecrementCounterAction {
  type: typeof types.DECREMENT_COUNTER;
}
export type CounterActions = IncrementCounterAction | DecrementCounterAction;

export interface CounterState {
  value: number;
}
