import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ButtonAppBar from './Components/ButtonAppBar';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Container from './Components/Container';

ReactDOM.render(
  <BrowserRouter>
  <ButtonAppBar/>
  <Switch>
    <Route exact path="/clean">
      <Container/>
    </Route>
    <Route exact path="/">
       <App />
    </Route>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
