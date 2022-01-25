import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

import { Header, Container } from './styles';

import { ThemeContext } from '../../context/ThemeContext';
import logo from '../../assets/images/Fundo.svg';

export default function PageHeader() {
  const { theme, onToggleTheme } = useContext(ThemeContext);

  return (
    <Header>
      <Container>
        <img src={logo} alt="Logo Be mobile" />
        <button
          type="button"
          onClick={onToggleTheme}
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </Container>
    </Header>
  );
}
