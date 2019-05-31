import React, { useState } from 'react';
import { navigate } from '@reach/router/';
import App from './App';
import Auth from './Auth';

const Main = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const logout = () => {
    localStorage.removeItem('token');
    // TODO: Maybe there is a race condition here?
    setToken(null);
    navigate('/');
  };
  return token ? <App logout={logout} /> : <Auth setToken={setToken} />;
};

export default Main;
