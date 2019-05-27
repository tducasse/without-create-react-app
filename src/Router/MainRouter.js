import React from 'react';
import { Router } from '@reach/router';
import Login from '/pages/Login';

const MainRouter = () => (
  <Router>
    <Login path="/" />
  </Router>
);

export default MainRouter;
