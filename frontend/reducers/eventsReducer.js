import merge from 'lodash/merge';

import {
  RECEIVE_EVENTS,
  // RECEIVE_EVENT,
  // CLEAR_EVENTS,
  // CLEAR_EVENT
} from '../actions/eventActions';

const defaultState = {
  events: {
    id: null,
    name: null,
    date: null,
    price: null,
    presented_by: null,
    poster_creator: null,
    venue: null,
    city: null,
    address: null,
    bands: null
  },
};

const EventsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    // case RECEIVE_EVENT:
    //     return;
    // case CLEAR_EVENTS:
    //   return defaultState;
    // case CLEAR_EVENT:
    //   return defaultState;
    default:
      return state;
  }
};

export default EventsReducer;
