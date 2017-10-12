import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
      return (
        <div>
          <h1>Flyer Database</h1>
          <ul className="nav">
            <li><Link to="/login">login</Link></li>
            <li><Link to="/signup">sign up</Link></li>
          </ul>
        </div>
      );
  }
}

export default Home;
