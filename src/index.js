import React from 'react';
import { render } from 'react-dom';
import { Normalize } from '@smooth-ui/core-sc';
import Router from './Router';

const App = () => (
  <>
    <Normalize />
    <Router />
  </>
);

render(<App />, document.getElementById('app'));
