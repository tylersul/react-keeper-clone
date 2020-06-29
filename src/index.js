// ================================================================== //
// =========================== Imports ============================== //
// ================================================================== //
import React from 'react';                          // Include default export from React module
import ReactDOM from 'react-dom';                   // Include default export from React-Dom module
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <App />, 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
