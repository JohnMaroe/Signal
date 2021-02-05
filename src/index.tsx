import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Login from './pages/Login';

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
    background: '#fca0a0',
    primary: '#2c2d2f',
    secundary: '#191720',
    contrast: '#eee',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <GlobalStyle />
      <Login />

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
