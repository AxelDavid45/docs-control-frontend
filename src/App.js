import React from 'react';
import {
  BrowserRouter as Router,
  Route, Navigate,
} from 'react-router-dom'
import { LayoutHome } from './containers/LayoutHome'
import { Home } from './containers/Home'
import { Routes } from './constants/routes'

const loggedIn = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Routes.Home} >
          {loggedIn ?  <LayoutHome> <Home /> </LayoutHome> : <Navigate to={Routes.Login} />}
        </Route>
        <Route path={Routes.Login} >
          {loggedIn ? <LayoutHome> <Home /> </LayoutHome> : <Navigate to={Routes.Login} />}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
