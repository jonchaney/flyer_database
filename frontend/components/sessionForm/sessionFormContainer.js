import { connect } from 'react-redux';
import SessionForm from './sessionForm';
import { login, logout, signup } from '../../actions/sessionActions';
import { clearErrors } from '../../actions/errorActions';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, { location }) => {
  // const formType = location.pathname.slice(1);
  let formType = location.pathname.slice(1);
  const processForm = (formType === "signup") ? signup : login;
  return {
    login: (user) => dispatch(login(user)),
    processForm: user => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
