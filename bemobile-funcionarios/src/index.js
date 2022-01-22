import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

import Header from './Components/Header/Header';
import Funcionarios from "./Views/Funcionarios/Funcionarios"

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Funcionarios/>
  </React.StrictMode>,
  document.getElementById('root')
);
