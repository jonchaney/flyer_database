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
      <Switch>
        <Route path="/about" component={AboutContainer}/>
      </Switch>
  </div>
);

export default App;