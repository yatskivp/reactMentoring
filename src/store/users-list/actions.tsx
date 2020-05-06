import { actionTypes, IUser } from './types';
import { IState } from '../';
import { doFetch, payload} from '../../utils';

interface IAction {
  type: actionTypes,
  payload?: {
    users: IUser[] | IUser | [],
    isUsersLoading: boolean,
    isUsersFail: boolean,
  } | IUser
};

type IDispatch = (arg: IAction) => (IAction);

const SET_USERS_LOADING = (users: IUser[]) => ({
  type: actionTypes.SET_USERS_LOADING, 
  payload: {
    users,
    isUsersLoading: true,
    isUsersFail: false,
}});

const SET_USERS_SUCCESS = (users: IUser[]) => ({
  type: actionTypes.SET_USERS_SUCCESS, 
  payload: {
    users,
    isUsersLoading: false,
    isUsersFail: false,
}});

const SET_USERS_FAIL = (users: IUser[]) => ({
  type: actionTypes.SET_USERS_FAIL, 
  payload: {
    users,
    isUsersLoading: false,
    isUsersFail: true,
}});

const SET_SELECTED_USER = (user: IUser) => ({type: actionTypes.SET_SELECTED_USER, payload: user});

export const getUsers = () => async (dispatch: IDispatch, getState: () => IState) => {
  try{
    dispatch(SET_USERS_LOADING([]));

    const result = await doFetch(payload, {url: 'https://app.fakejson.com/q'});

    dispatch(SET_USERS_SUCCESS(result.data));
  } catch (error) {
    dispatch(SET_USERS_FAIL(getState().users.users));
    console.log(`getUsers error: ${error}`);
  }
};

export const selectUser = (user: IUser) => (dispatch: IDispatch) => {
  try{
    dispatch(SET_SELECTED_USER(user));
  } catch (error) {
    console.log(`selectUser error: ${error}`);
  }
};