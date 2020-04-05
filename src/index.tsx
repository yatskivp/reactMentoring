import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import axios from 'axios';
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

  axios({
    method: "post",
    url: "https://app.fakejson.com/q",
    data: payload
  }).then(function(resp) {
    console.log(resp);
  });

  return <div></div>
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
