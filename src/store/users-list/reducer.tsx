import {actionTypes, IUsersListState} from './types';

interface IAction {
  type: actionTypes,
  payload: IUsersListState,
};

const initState: IUsersListState = {
   users: [] 
};

export const setUsers = (state = initState, action: IAction) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {...state, users: action.payload};
    default:
      return state;
  }
};