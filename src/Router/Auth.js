import React from 'react';
import { Router } from '@reach/router';
import Login from '/pages/Login';
import PropTypes from 'prop-types';
import NotFound from '/pages/NotFound';

const Auth = (props) => {
  const { setToken } = props;
  return (
    <Router>
      <Login path="/" setToken={setToken} />
      <NotFound default />
    </Router>
  );
};
Auth.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Auth;
