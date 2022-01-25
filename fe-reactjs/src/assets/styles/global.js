import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.backgroundBody};
    color: ${({ theme }) => theme.textColor};
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
