import React from 'react';
import ReactDOM from 'react-dom';
import Lienzo from './Lienzo'
import './index.css';
import Platillos from './Platillos';
import Bebidas from './Bebidas';
import {BrowserRouter, Route} from 'react-router-dom';

const Enrutador = (
  <BrowserRouter>
    <Route path="/" component={Lienzo} />
  </BrowserRouter>
);
ReactDOM.render(
  Enrutador,
  document.getElementById('root')
);
