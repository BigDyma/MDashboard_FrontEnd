/* eslint-disable react/no-array-index-key */
import React, {useMemo} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import requireLogin from '../Services/Guard/_requireLogin';
import getRoutes from '../Services/Guard/_routes';

const GUARDS = [requireLogin];

const RouterPages = ({children}:any): JSX.Element => 
  { 
    const routes = useMemo(() => getRoutes(), []);
    return ( 
    <BrowserRouter>
    <GuardProvider guards={GUARDS} >
    <Route
          render={routeProps =>
            children(
              <Switch>
                {routes.map(({ component, error, exact, ignoreGlobal, loading, meta, path }, i) => (
                  <GuardedRoute
                    key={i}
                    component={component}
                    exact={exact}
                    error={error}
                    ignoreGlobal={ignoreGlobal}
                    loading={loading}
                    meta={meta}
                    path={path}
                  />
                ))} 
              </Switch>,
              routeProps,
            )
          }
        />
    </GuardProvider>
    </BrowserRouter>
    )}

export default RouterPages;