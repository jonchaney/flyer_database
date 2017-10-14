import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { logout, login } from '../../actions/sessionActions';
import Header from './header';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
