import {actionTypes, IUsersListState} from './types';

interface IAction {
  type: actionTypes,
  payload: IUsersListState,
};

const initState: IUsersListState = {
  users: [],
  selectedUser: {
    name: '',
    lname: '',
    email: '',
    gender: '',
    loginInfo: {
      dateTime: '',
      ipv4: '',
    },
    id: '',
  },
};

export const usersReducer = (state = initState, action: IAction) => {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {...state, users: action.payload};
    case actionTypes.SET_SELECTED_USER:
      return {...state, selectedUser: action.payload};
    default:
      return state;
  }
};