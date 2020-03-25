import React from 'react';
import ReactDOM from 'react-dom';
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
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
