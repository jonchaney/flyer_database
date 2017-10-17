import React from 'react';
import {
    Route,
    Switch,
    Link,
    Redirect
  } from 'react-router-dom';
import SessionFormContainer from '../sessionForm/sessionFormContainer';
import { AuthRoute } from '../../util/route_util';

import GreetingContainer from "../greeting/greetingContainer";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1><Link to="/">notaflof.world</Link></h1>
        <GreetingContainer />
        <Switch>
          <AuthRoute path="/" component={SessionFormContainer} />
          <AuthRoute path="/signup" component={SessionFormContainer} />
        </Switch>
      </div>
    );
  }
}

export default Header;