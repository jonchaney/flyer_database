import React from 'react';
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import HomeContainer from "./home/homeContainer";

const App = () => (
  <div>
    <Route exact path="/" component={HomeContainer} />
    <Switch>
    </Switch>
  </div>
);

export default App;