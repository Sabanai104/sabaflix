import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from '../src/pages/cadastro';
import CadastroCategoria from '../src/pages/cadastro/categoria'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path='/'
        exact component={Home}
      />

      <Route
        path='/cadastro'
        exact component={CadastroVideo}
      />
      
      <Route 
        path='/cadastro/categoria'
        component={CadastroCategoria}
      />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
