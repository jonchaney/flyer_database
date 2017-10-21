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
        <div>
          <h1><Link to="/">notaflof.world</Link></h1>
        </div>
        <div className="about">
          <p>Interactive archive showcasing DIY music event posters.</p>
        </div>
        <div className="search">
          {/* <SearchContainer /> */}
        </div>
        <div className="upload">
          <p><Link to="./upload">upload</Link></p>
        </div>
      </div>
    );
  }
}

export default Header;

{/* <GreetingContainer />
  <Switch>
    <AuthRoute path="/" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </Switch>  */}