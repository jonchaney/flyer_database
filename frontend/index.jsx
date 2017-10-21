import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';

// import {fetchEvents} from './util/events_api_util';
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
    window.dispatch = store.dispatch;
  // end test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  
});
