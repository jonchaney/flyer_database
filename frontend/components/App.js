import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

import HomeContainer from "./home/homeContainer";
import SessionFormContainer from './sessionForm/sessionFormContainer';

const App = () => (
  <div>
    <Route exact path="/" component={HomeContainer} />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;