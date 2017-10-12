import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

import GreetingContainer from "./greeting/greetingContainer";
import SessionFormContainer from './sessionForm/sessionFormContainer';

const App = () => (
  <div>
    <h1>flyer database</h1>
    <Route exact path="/" component={GreetingContainer} />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;