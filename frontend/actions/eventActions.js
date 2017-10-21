import * as APIUtil from '../util/events_api_util';
import { receiveErrors, clearErrors } from './errorActions';

export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

export const receiveEvents = events => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
});

export const fetchEvents = () => dispatch => {
  return APIUtil.fetchEvents().then(events => {
    dispatch(receiveEvents(events));
  }, errors => (
    dispatch(receiveErrors(errors))
  ));
};

export const createEvent = event => dispatch => (
  APIUtil.createEvent(event).then(event => {
    dispatch(receiveEvent(event));
  }, errors => (
    dispatch(receiveErrors(errors))
  ))
);