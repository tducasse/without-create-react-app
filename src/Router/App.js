import React from 'react';
import { Router, Redirect } from '@reach/router';
import Home from '/pages/Home';
import NotFound from '/pages/NotFound';
import PropTypes from 'prop-types';

const App = (props) => {
  const { logout } = props;
  return (
    <Router>
      <Redirect from="/" to="home" noThrow />
      <Redirect from="/login" to="home" noThrow />
      <Redirect from="/signup" to="home" noThrow />
      <Home path="home" logout={logout} />
      <NotFound default />
    </Router>
  );
};
App.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default App;
