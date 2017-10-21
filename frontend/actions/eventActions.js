import * as APIUtil from '../util/events_api_util';
import { receiveErrors, clearErrors } from './errorActions';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const fetchEvents = () => dispatch => {
  return APIUtil.fetchEvents().then(events => {
    dispatch(receiveEvents(events));
  }, errors => (
    dispatch(receiveErrors(errors))
  ));
};