export enum actionTypes {
  SET_USERS_REQUEST = '@@users/SET_USERS_REQUEST',
  SET_USERS_SUCCESS = '@@users/SET_USERS_SUCCESS',
  SET_USERS_FAIL = '@@users/SET_USERS_FAIL',
  SET_SELECTED_USER_SUCCESS = '@@users/SET_SELECTED_USER_SUCCESS',
};

export interface IUser {
  name: string,
  lname: string,
  email: string,
  gender: string,
  address: string,
  mobile: string,
  id: string,
  [index: string]: string,
};

export interface IUsersListState {
  readonly users: IUser[],
  readonly selectedUser: IUser,
  readonly isUserSelected?: boolean,
  readonly isLoading?: boolean,
  readonly error?: string,
};