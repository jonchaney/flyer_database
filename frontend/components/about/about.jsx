import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <p>searchable and updatable database for bay area diy shows.</p>
      </div>
    );
  }
}

export default About;