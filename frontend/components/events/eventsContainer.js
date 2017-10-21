import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { allEvents } from '../../reducers/selectors';

import clearErrors from '../../actions/errorActions';
import {fetchEvents} from '../../actions/eventActions';
import Event from './events';

const mapStateToProps = ({events}) => ({
  events: allEvents(events)
});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Event));
