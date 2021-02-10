import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Landing from './pages/Landing';
import Loading from './components/Loading';
import Error from './pages/Error';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Loading} />

        <Route path="/landing" component={Landing} />

        <Route path="/login" component={Login} />

        <Route component={Error} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
