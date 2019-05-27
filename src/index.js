import React from 'react';
import { render } from 'react-dom';
import Router from './Router';

const App = () => (
  <div>
    <Router />
  </div>
);

render(<App />, document.getElementById('app'));
