export enum actionTypes {
  SET_USERS = '@@users/SET_USERS',
};

export interface IUser {
  name: string,
  lname: string,
  email: string,
  gender: string,
  loginInfo: {
    dateTime: string,
    ipv4: string,
  },
  id: string,
};

export interface IUsersListState {
  readonly users: IUser[],
};