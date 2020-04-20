import { combineReducers } from 'redux';

import { setUsers } from './users-list/reducer';

export const rootReducer = combineReducers({
  users: setUsers,
});