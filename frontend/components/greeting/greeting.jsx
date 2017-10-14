import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  sessionLinks(login, user) {
    return (
      <div>
          <ul className="nav">
            <li><Link to="/about">about</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/signup">signup</Link></li>
          </ul>
      </div>
    );
  }

  personalGreeting(currentUser, logout) {
    return (
      <div>
        <ul>
          <li><button onClick={logout}>logout</button></li>
        </ul>
      </div>
    );
  }

  render() {
    const greeting = this.props.currentUser ?
      this.personalGreeting(this.props.currentUser, this.props.logout) :
      this.sessionLinks(this.props.login);
    return greeting;
  }
}

export default Greeting;