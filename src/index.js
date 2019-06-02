import React from 'react';
import { render } from 'react-dom';
import { Normalize } from '@smooth-ui/core-sc';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';

const GlobalStyle = createGlobalStyle`
  html {
    background: radial-gradient(ellipse at center, #192d38 0, #211f2f 100%);
    min-height: 100%;
  }
  body: {
    min-height: 100%
  }
`;

const App = () => (
  <>
    <Normalize />
    <GlobalStyle />
    <Router />
  </>
);

render(<App />, document.getElementById('app'));
