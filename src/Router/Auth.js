import React from 'react';
import { Router, Redirect } from '@reach/router';
import Login from '/pages/Login';
import PropTypes from 'prop-types';
import NotFound from '/pages/NotFound';
import Signup from '/pages/Signup';

const Auth = (props) => {
  const { setToken } = props;
  return (
    <Router>
      <Redirect from="/" to="/login" noThrow />
      <Login path="/login" setToken={setToken} />
      <Signup path="/signup" setToken={setToken} />
      <NotFound default />
    </Router>
  );
};
Auth.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Auth;
