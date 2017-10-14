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
            <li><Link to="/">login</Link></li>
            <li><Link to="/signup">signup</Link></li>
          </ul>
      </div>
    );
  }

  personalGreeting(currentUser, logout) {
    return (
      <div>
        <ul className="logout-greeting">
          <li>hi, {this.props.currentUser.username}</li>
          <li><button onClick={logout}>logout</button></li>
        </ul>
      </div>
    );
  }

  render() {
    console.log(this.props.location.pathname.slice(1));
    const greeting = this.props.currentUser ?
      this.personalGreeting(this.props.currentUser, this.props.logout) :
      this.sessionLinks(this.props.login);
    return greeting;
  }
}

export default Greeting;