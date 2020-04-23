import { combineReducers } from 'redux';
import { usersReducer } from './users-list/reducer';
import { IUsersListState } from './users-list/types';

export const rootReducer = combineReducers({
  users: usersReducer,
});

export interface IState {
  users: IUsersListState,
};
