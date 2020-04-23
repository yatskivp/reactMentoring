import {actionTypes, IUser} from './types';
import {doFetch} from '../../utils';

interface IAction {
  type: actionTypes,
  payload?: IUser[] | IUser,
};

type IDispatch = (arg: IAction) => (IAction);

const SET_USERS = (users: IUser[]) => ({type: actionTypes.SET_USERS, payload: users});
const SET_SELECTED_USER = (user: IUser) => ({type: actionTypes.SET_SELECTED_USER, payload: user});

export const getUsers = (payload: Object) => async (dispatch: IDispatch) => {
  try{
    const result = await doFetch(payload, {url: 'https://app.fakejson.com/q'});

    dispatch(SET_USERS(result.data));
  } catch (error) {
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