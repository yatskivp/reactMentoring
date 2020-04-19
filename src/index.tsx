import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { UsersListTableContainer } from './pages/users-list/users-list-table';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <UsersListTableContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
