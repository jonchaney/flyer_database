import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

import SessionFormContainer from './sessionForm/sessionFormContainer';
import HeaderContainer from './header/headerContainer';
import AboutContainer from './about/aboutContainer';

const App = () => (
  <div>   
    <HeaderContainer />
      <Route path="/about" component={AboutContainer}/>
    <Switch>
      <AuthRoute path="/" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;