import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/index';
import Landing from './pages/Landing';
import Loading from './components/Loading';
import Error from './pages/Error';
import Register from './pages/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Loading} />

        <Route path="/landing" exact component={Landing} />

        <Route path="/login" component={Login} />

        <Route path="/register" component={Register} />

        <Route component={Error} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
