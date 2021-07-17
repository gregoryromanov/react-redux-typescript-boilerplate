import { CounterState } from './redux/counter/types';
import { DogsState } from './redux/dogs/types';

export interface SystemState {
  counter: CounterState;
  dogs: DogsState;
}
