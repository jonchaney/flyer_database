import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logout, login } from '../../actions/sessionActions';
import clearErrors from '../../actions/errorActions';
import About from './about';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(About));
