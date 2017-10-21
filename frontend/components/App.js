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
import EventContainer from './events/eventsContainer';

const App = () => (
  <div>   
      <HeaderContainer />
      <Switch>
        <Route path="/about" component={AboutContainer}/>
      </Switch>
      <EventContainer />
  </div>
);

export default App;