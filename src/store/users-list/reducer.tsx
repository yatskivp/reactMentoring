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
  isUserSelected: false,
  isUsersLoading: false,
  isUsersFail: false,
};

export const usersReducer = (state = initState, {type, payload}: any) => {
  switch (type) {
    case 'SET_USERS_REQUEST':
      return {...state, isLoading: true}
    case 'SET_USERS_SUCCESS':
      return {...state, users: payload, isLoading: false}
    case 'SET_USERS_FAIL':
      return {...state, isLoading: false, error: 'Unable to get users.' }

    case 'SET_SELECTED_USER_SUCCESS':
      return {...state, isUserSelected: true, selectedUser: payload};
    default:
      return state;
  }
};