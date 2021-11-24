import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// -------------bootstrap--------------
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
// -------------bootstrap--------------
import './scss/main.scss'

import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL='http://127.0.0.1:8000'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
