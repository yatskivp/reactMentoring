import {actionTypes, IUser} from './types';
import {doFetch} from '../../utils';

interface IGetUsers {
  type: actionTypes.SET_USERS,
  payload?: IUser[],
};

type IDispatchSetUsers = (arg: IGetUsers) => (IGetUsers);

const SET_USERS = (users: IUser[]) => ({type: actionTypes.SET_USERS, payload: users});

export const getUsers = (payload: Object) => async (dispatch: IDispatchSetUsers) => {
  try{
    const result = await doFetch(payload, {url: 'https://app.fakejson.com/q'});

    dispatch(SET_USERS(result.data));
  } catch (error) {
    console.log(`getUsers error: ${error}`);
  }
};