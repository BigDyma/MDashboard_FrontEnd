import React from 'react';
import './App.css';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { Redirect } from 'react-router-dom';
import {isLogged} from './Services/Auth/login'



function App(): JSX.Element {



  if (isLogged() === false)
  {
    return (
    <SnackbarProvider maxSnack={3}>
        <Redirect from="/" to="/SignIn"/>
    </SnackbarProvider>
    );
  }
  return (
    <></>
  );
}

export default App;
