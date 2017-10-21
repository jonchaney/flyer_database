import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
  }

  renderErrors() {
    return (
      <div className="upload-errors">
        {this.props.errors.map((error, i) => (
          <p key={`error-${i}`}>
            {error}
          </p>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="upload-container">
        <p>UPLOAD FORM</p>
      </div>
    );
  }
}

export default withRouter(SessionForm);
