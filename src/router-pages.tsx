import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

 const RouterPages = (): JSX.Element => 
     ( 
     <BrowserRouter>
        <Switch>
            <Route exact path="/SignIn">
                <SignIn />
            </Route>
            <Route exact path="/SignUp">
                <SignUp />
            </Route>
        </Switch>
      </BrowserRouter>
      )

export default RouterPages;