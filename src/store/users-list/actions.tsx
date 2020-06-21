import { actionTypes, IUser } from './types';
import { doFetch, IParams} from '../../utils';

type IPayload = IUser[] | IUser | [] | Object | null;

interface IAction {
  type: actionTypes | string,
  payload?: IPayload | IUser | Object | null,
};

type IDispatch = (arg: IAction) => (IAction);

const generateAsyncActions = (type: actionTypes | string, prefix: string) => (
  { REQUEST: `@@${prefix}/${type}_REQUEST`, SUCCESS: `@@${prefix}/${type}_SUCCESS`, FAIL: `@@${prefix}/${type}_FAIL` }
);

const createAction = (type: actionTypes | string, payload?: IPayload) => (payload ? {type, payload} : {type});

const createServiceAction = async (actionType: actionTypes | string, actionPrefix: string, serviceOptions: IParams | null, payload: IPayload, dispatch: IDispatch) => {
  const { REQUEST, SUCCESS, FAIL } = generateAsyncActions(actionType, actionPrefix);

  if (serviceOptions) {
    try {
      dispatch(createAction(REQUEST));
      const result = await doFetch(serviceOptions);
      // const users = [{"address":"7424 Broadway Square","email":"trinity@gmail.com","gender":"female","id":"stormy.wildflower.29","lname":"Brekke","mobile":"(259) 945-6691","name":"Thomas"},{"address":"9529 Westminster Drive Parks","email":"veniam@hotmail.com","gender":"male","id":"lefty-breeze","lname":"Steuber","mobile":"916-783-0979","name":"Adrain"},{"address":"594 4th Street North Fort","email":"type_florian@yahoo.com","gender":"male","id":"warm-hill-50","lname":"Turcotte","mobile":"897.469.4448","name":"Samantha"},{"address":"9289 Harrison Street Extensions","email":"lavina@outlook.com","gender":"female","id":"floral.wind.34","lname":"Braun","mobile":"1-704-103-8553","name":"Alicia"},{"address":"4200 Woodland Drive Spring","email":"architecto@gmail.com","gender":"male","id":"insane.field","lname":"Rowe","mobile":"1-596-099-6506","name":"Domingo"},{"address":"925 William Street Heights","email":"work_francesca@outlook.com","gender":"female","id":"lively-voice-2","lname":"Boyer","mobile":"498-717-9829","name":"Estell"},{"address":"874 George Street Corner","email":"riley@yahoo.com","gender":"male","id":"fast.thunder.90","lname":"Ondricka","mobile":"617-092-5528","name":"Sofia"},{"address":"3136 Route 2 Center","email":"magdalena@hotmail.com","gender":"female","id":"madam-water","lname":"Volkman","mobile":"(250) 775-8082","name":"Reggie"},{"address":"5006 2nd Street East Brook","email":"odie@outlook.com","gender":"male","id":"king.sea","lname":"Metz","mobile":"(723) 368-0032","name":"Alene"},{"address":"1408 Myrtle Street Grove","email":"et@hotmail.com","gender":"female","id":"holy.mountain.51","lname":"Renner","mobile":"(371) 542-4023","name":"Harmon"}];
      // setTimeout(() => {dispatch(createAction(SUCCESS, users));}, 3000);

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

export const editUser = (payload: Object) => (dispatch: IDispatch) => {
  createServiceAction('EDIT_SELECTED_USER', 'users', null, payload, dispatch);
};