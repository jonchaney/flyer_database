import React from 'react';
import { Link } from 'react-router-dom';

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
      </div>
    );
  }
}

export default Header;