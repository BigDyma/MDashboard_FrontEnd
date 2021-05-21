import React from 'react';
import './App.css';
import { SnackbarProvider, useSnackbar } from 'notistack';
import SignIn from './Components/Form/SignIn';

function App(): JSX.Element {
  return (
    <SnackbarProvider maxSnack={3}>
      {' '}
      <SignIn />
    </SnackbarProvider>
  );
}

export default App;
