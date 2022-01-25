import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ThemeContextProvider from '../../context/ThemeContext';
import GlobalStyles from '../../assets/styles/global';

import PageHeader from '../PageHeader';
import Routes from '../../routes';

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <GlobalStyles />
        <PageHeader />
        <Routes />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
