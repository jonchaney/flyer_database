import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logout, login } from '../../actions/sessionActions';
import clearErrors from '../../actions/errorActions';
import Upload from './upload';

const mapStateToProps = ({session}) => ({
  errors: session.errors,
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload));
