import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { UsersListTable } from './pages';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <UsersListTable />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
