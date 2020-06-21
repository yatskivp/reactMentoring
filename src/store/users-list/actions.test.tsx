import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actionTypes } from './types';
import { initState } from './reducer';
import { doFetch } from '../../utils';

jest.mock('../../utils');
const mockDoFetch = doFetch as any;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const users = [{"address":"9529 Westminster Drive Parks","email":"veniam@hotmail.com","gender":"male","id":"lefty-breeze","lname":"Steuber","mobile":"916-783-0979","name":"Adrain"}];
let store: any;

beforeEach(() => {
  store = mockStore(initState);
});

  describe('Get users async action creators', () => {
  it('Get users SUCCESS', () => {
      const expectedActions = [
        { type: actionTypes.SET_USERS_REQUEST },
        { type: actionTypes.SET_USERS_SUCCESS, payload: users }
      ];

      mockDoFetch.mockImplementationOnce(() => ({data: users}));

      store.dispatch(actions.getUsers()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

  it('Get users Fail', () => {
    const expectedActions = [
      { type: actionTypes.SET_USERS_REQUEST },
      { type: actionTypes.SET_USERS_FAIL }
    ];

    mockDoFetch.mockImplementationOnce(() => { throw new Error('Get Users Fail')});

    store.dispatch(actions.getUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('Select user action', () => {
    it('Get Selected User', () => {
      const user = {"address":"9529 Westminster Drive Parks","email":"veniam@hotmail.com","gender":"male","id":"lefty-breeze","lname":"Steuber","mobile":"916-783-0979","name":"Adrain"};
      const expectedAction = [
        { type: actionTypes.SET_SELECTED_USER_SUCCESS, payload: user }
      ];

      store.dispatch(actions.selectUser(user));

      expect(store.getActions()).toEqual(expectedAction);
    })
  });

  describe('Edit user action', () => {
    it('Edit selected user', () => {
      const user = {"address":"9529 Westminster Drive Parks","email":"veniam@hotmail.com","gender":"male","id":"lefty-breeze","lname":"Steuber","mobile":"916-783-0979","name":"Adrain"};
      const changes = {"address":"1111", "name": "Shrek"};
          
      const expectedAction = [
        { type: actionTypes.EDIT_SELECTED_USER_SUCCESS, payload: { ...user, ...changes } }
      ];

      store.dispatch(actions.editUser({ ...user, ...changes }));

      expect(store.getActions()).toEqual(expectedAction);
    });
  });
})