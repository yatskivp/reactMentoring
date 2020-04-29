import {actionTypes, IUsersListState} from './types';

interface IAction {
  type: actionTypes,
  payload: IUsersListState,
};

export const initState: IUsersListState = {
  users: [],
  selectedUser: {
    name: '',
    lname: '',
    email: '',
    gender: '',
    address: '',
    mobile: '',
    id: '',
  },
  isUserSelected: false
};

export const usersReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {...state, users: action.payload};
    case actionTypes.SET_SELECTED_USER:
      return {...state, isUserSelected: true, selectedUser: action.payload};
    default:
      return state;
  }
};