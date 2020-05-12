import {actionTypes, IUsersListState} from './types';

interface IAction {
  type: actionTypes | string,
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
  isLoading: false,
  error: '',
};

export const usersReducer = (state = initState, {type, payload}: IAction) => {
  switch (type) {
    case actionTypes.SET_USERS_REQUEST:
      return {...state, isLoading: true, error: ''}
    case actionTypes.SET_USERS_SUCCESS:
      return {...state, users: payload, isLoading: false,  error: ''}
    case actionTypes.SET_USERS_FAIL:
      return {...state, isLoading: false, error: 'Unable to get users.' }
    case actionTypes.SET_SELECTED_USER_SUCCESS:
      return {...state, isUserSelected: true, selectedUser: payload};
    default:
      return state;
  }
};