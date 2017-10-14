import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <p>The goal of this site is to create a searchable and updatable database of diy shows in the San Francisco Bay Area.</p>
      </div>
    );
  }
}

export default About;