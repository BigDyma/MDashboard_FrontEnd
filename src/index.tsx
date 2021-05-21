import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './Components/Form/SignIn';
import SignUp from './Components/Form/SignUp';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/SignIn">
        <App />
      </Route>
      <Route exact path="/SignUp">
        <SignUp />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVWitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
