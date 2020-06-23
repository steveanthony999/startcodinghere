import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

import Html from './components/Html';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/html'>
          <Html />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// Tech Used

// React
// Material-UI & Material Icons
// Fontawesome
// React Router
