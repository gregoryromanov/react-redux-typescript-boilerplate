import * as types from './actionTypes';

export interface DogsState {
  dogsList: DogsListElement[];
  isLoading: boolean;
}

export interface DogsRequestAction {
  type: typeof types.GET_DOGS_REQUEST;
}

export interface DogsFullfieldAction {
  type: typeof types.GET_DOGS_FULLFIELD;
  payload: DogsListElement[];
}

export interface DogsRejectedAction {
  type: typeof types.GET_DOGS_REJECTED;
  payload: Error;
}

export type DogsActions =
  | DogsRequestAction
  | DogsFullfieldAction
  | DogsRejectedAction;

interface DogsListElement {
  name: string;
  list: string[];
}

interface Error {
  name: string;
  message: string;
  stack?: string;
}
