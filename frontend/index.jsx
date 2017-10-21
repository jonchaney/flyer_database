import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

// import {createEvent} from './util/events_api_util';
import { createEvent } from './actions/eventActions';
import {fetchEvents} from './actions/eventActions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // test
    window.fetchEvents = fetchEvents;
    window.createEvent = createEvent;
    window.dispatch = store.dispatch;
  // end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  
});
