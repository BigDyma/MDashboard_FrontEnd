import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './Components/Form/SignIn';
import SignUp from './Components/Form/SignUp';
import {isLogged} from './Services/Auth/login';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/SignIn">
            <>
              <SnackbarProvider maxSnack={3}>
                <SignIn />
              </SnackbarProvider>
            </>
        </Route>
        <Route exact path="/SignUp">
            <>
              <SnackbarProvider maxSnack={3}>
                <SignUp />
              </SnackbarProvider>
            </>
        </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVWitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
