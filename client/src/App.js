import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import NotFound from './components/404/NotFound';

import PrivateRoute from './components/PrivateRoutes/PrivateRoute';
import Authenticated from './components/Authenticated/Authenticated';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path="/*" component={Authenticated}/>
          <Route exact path="*" component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
