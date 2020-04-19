import {actionTypes} from '../action-types';

interface Action {
  type: actionTypes,
  payload: any,
};

interface User {
  id: string,
};

export const users = (state: User[] = [], action: Action) => {
  return state;
};