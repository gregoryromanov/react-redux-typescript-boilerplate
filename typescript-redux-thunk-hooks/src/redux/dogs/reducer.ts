import * as types from './actionTypes';
import { DogsState, DogsActions } from './types';

const INITIAL_STATE: DogsState = {
  dogsList: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action: DogsActions) => {
  switch (action.type) {
    case types.GET_DOGS_REQUEST:
      return { ...state, isLoading: true };
    case types.GET_DOGS_FULLFIELD:
      return {
        isLoading: false,
        dogsList: action.payload,
      };
    default:
      return state;
  }
};
