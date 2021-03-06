import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from './components/HomePage';
// import Navbars from './components/Navbars';
import './index.css';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <HomePage/>
    {/* <Navbars/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
