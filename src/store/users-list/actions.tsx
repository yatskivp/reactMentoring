import { actionTypes, IUser } from './types';
import { doFetch, IParams} from '../../utils';

type IPayload = IUser[] | IUser | [] | null;

interface IAction {
  type: actionTypes | string,
  payload?: IPayload | IUser | null,
};

type IDispatch = (arg: IAction) => (IAction);

const generateAsyncActions = (type: actionTypes | string, prefix: string) => (
  { REQUEST: `@@${prefix}/${type}_REQUEST`, SUCCESS: `@@${prefix}/${type}_SUCCESS`, FAIL: `@@${prefix}/${type}_FAIL` }
);

const createAction = (type: actionTypes | string, payload?: IPayload | null) => ({type, payload});

const createServiceAction = async (actionType: actionTypes | string, actionPrefix: string, serviceOptions: IParams | null, payload: IPayload, dispatch: IDispatch) => {
  const { REQUEST, SUCCESS, FAIL } = generateAsyncActions(actionType, actionPrefix);

  if (serviceOptions) {
    try {
      dispatch(createAction(REQUEST));
      const result = await doFetch(serviceOptions);
      dispatch(createAction(SUCCESS, result.data));
    } catch (error) {
      dispatch(createAction(FAIL));
    }
  } else {
    dispatch(createAction(SUCCESS, payload));
  }
};

export const getUsers = () => async (dispatch: IDispatch) => {
  const serviceOptions = {
    payload : {
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
    },
    options: {
      method: 'post' as 'post',
      url: 'https://app.fakejson.com/q'
    }
  };

  createServiceAction('SET_USERS', 'users', serviceOptions, null, dispatch);
};

export const selectUser = (user: IUser) => (dispatch: IDispatch) => {
  createServiceAction('SET_SELECTED_USER', 'users', null, user, dispatch);
};