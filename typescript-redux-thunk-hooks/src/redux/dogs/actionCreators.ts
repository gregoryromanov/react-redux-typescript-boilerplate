import { Dispatch } from 'redux';
import * as types from './actionTypes';

export const getDogs = () => async (dispatch: Dispatch) => {
  const dogsUrl: string = 'https://dog.ceo/api/breeds/list/all';

  try {
    dispatch({ type: types.GET_DOGS_REQUEST });
    const promise = await fetch(dogsUrl);
    const { message: breeds } = await promise.json();

    const presentedList = Object.entries(breeds).map(([name, list]) => ({
      name,
      list,
    }));

    dispatch({ type: types.GET_DOGS_FULLFIELD, payload: presentedList });
  } catch (error) {
    console.log('error', error);
  }
};
