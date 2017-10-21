import { combineReducers } from 'redux';
import SessionReducer from './sessionReducer';
import EventsReducer from './eventsReducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  events: EventsReducer
});

export default RootReducer;