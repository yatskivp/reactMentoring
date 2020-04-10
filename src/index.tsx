import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import UsersListTable from './pages/users-list/users-list-table/users-list-table';
import {doFetch} from './utils';
import './index.css';

const App = () => {
  let payload = {
    token: "i6-5QRXnpgryAQmFnzczFg",
    data: {
      name: "nameFirst",
      email: "internetEmail",
      phone: "phoneHome",
      _repeat: 300
    }
};

  console.log(doFetch(
    payload, {method: 'post', url: 'https://app.fakejson.com/q'}
  ));

  return <div></div>
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <UsersListTable users={[]} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
