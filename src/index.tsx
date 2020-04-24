import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Users } from './pages';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Users />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
