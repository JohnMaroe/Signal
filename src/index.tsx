import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Cabin', sans-serif;
    color: #eee;
  };

  :root {
    font-size: 62.5%;
  }
`;

const theme = {
  colors: {
    background: '#ee8484',
    primary: '#2c2d2f',
    secondary: '#191720',
    contrast: '#eee',
  },
};

ReactDOM.render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>

      <GlobalStyle />
      <Routes />

    </ThemeProvider>

  </React.StrictMode>,
  document.getElementById('root'),
);
