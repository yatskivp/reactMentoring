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

const generateAsyncActions = (type: any) => ({ REQUEST: `${type}_REQUEST`, SUCCESS: `${type}_SUCCESS`, FAIL: `${type}_FAIL`});
const createAction = (type: any, payload?: any) => {
  return {
    type,
    payload
  }
}

const createServiceAction = async (actionType: any, serviceOptions: any, payload: any, dispatch: any) => {
  const {REQUEST, SUCCESS, FAIL} = generateAsyncActions(actionType);

  if (serviceOptions) {
    try {
      dispatch(createAction(REQUEST));
      const result = await doFetch(payload, serviceOptions);
      dispatch(createAction(SUCCESS, result));
    }
    catch (err) {
      dispatch(createAction(FAIL));
    }
  } else {
    dispatch(createAction(SUCCESS, payload));
  }
}

// const SET_USERS_LOADING = (users: IUser[]) => ({
//   type: actionTypes.SET_USERS_LOADING, 
//   payload: {
//     users,
//     isUsersLoading: true,
//     isUsersFail: false,
// }});

// const SET_USERS_SUCCESS = (users: IUser[]) => ({
//   type: actionTypes.SET_USERS_SUCCESS, 
//   payload: {
//     users,
//     isUsersLoading: false,
//     isUsersFail: false,
// }});

// const SET_USERS_FAIL = (users: IUser[]) => ({
//   type: actionTypes.SET_USERS_FAIL, 
//   payload: {
//     users,
//     isUsersLoading: false,
//     isUsersFail: true,
// }});

const SET_SELECTED_USER = (user: IUser) => ({type: actionTypes.SET_SELECTED_USER, payload: user});

export const getUsers = () => (dispatch: IDispatch, getState: () => IState) => {
  const serviceOption = {
    method: 'post',
    url: 'https://app.fakejson.com/q'
  };
  const payload = {
    "token": process.env.REACT_APP_FAKE_JSON_TOKEN,
    "data": {
      "id": "personNickname",
      "name": "nameFirst",
      "lname": "nameLast",
      "email": "internetEmail",
      "gender": "personGender",
      "address": "addressFullStreet",
      "mobile": "phoneMobile",
      "_repeat": 10
    }
  };
  createServiceAction('SET_USERS', serviceOption, payload, dispatch);
};

export const selectUser = (user: IUser) => (dispatch: IDispatch) => {
  createServiceAction('SET_SELECTED_USER', null, user, dispatch);
  // try{
  //   dispatch(SET_SELECTED_USER(user));
  // } catch (error) {
  //   console.log(`selectUser error: ${error}`);
  // }
};