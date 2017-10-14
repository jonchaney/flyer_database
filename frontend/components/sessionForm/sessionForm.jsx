import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user;
    if (this.band) {
      user = this.state;
    } else {
      user = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      };
    }
    this.props.processForm(user).then(() => {});
  }

  navLink() {
    if (this.props.formType === '') {
      return "login";
    } else {
      return "sign up";
    }
  }

  renderErrors() {
    return (
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
              <div className="login-input">
                <label>
                  <input type="text"
                    autoFocus="autofocus"
                    className="login-input"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder={'username'}
                  />
                </label>

                <label>
                  <input type="password"
                    className="login-input"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="password"
                  />
                </label>
                <label>
                  <input type="submit"
                    className="login-button"
                    value={this.navLink()} />
                </label>

              </div> 
                {this.renderErrors()}
            </div>
          </form>
        </div>
      );
  }
}

export default withRouter(SessionForm);
