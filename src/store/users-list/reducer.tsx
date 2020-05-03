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

export const usersReducer = (state = initState, {type, payload}: IAction) => {
  switch (type) {
    case actionTypes.SET_USERS_LOADING:
    case actionTypes.SET_USERS_SUCCESS:
    case actionTypes.SET_USERS_FAIL:
      return {...state, users: payload.users, isUsersLoading: payload.isUsersLoading, isUsersFail: payload.isUsersFail}
    case actionTypes.SET_SELECTED_USER:
      return {...state, isUserSelected: true, selectedUser: payload};
    default:
      return state;
  }
};