import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersContainer from "./UsersContainer";

ReactDOM.render(
  <React.StrictMode>
    <UsersContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);
