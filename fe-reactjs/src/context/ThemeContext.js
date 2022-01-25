import React, {
  createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import themes from '../assets/styles/themes';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const currentTheme = useMemo(() => themes[theme] || themes.light, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    function initalLocalTheme() {
      let localTheme = 'light';
      try {
        localTheme = JSON.parse(localStorage.getItem('theme'));
      } catch (err) {
        console.log(err);
      }
      return localTheme;
    }
    setTheme(initalLocalTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
        currentTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
