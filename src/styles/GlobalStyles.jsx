import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background: var(--background);
  }

  *, button, input {
    border: 0;
    outline: 0;
  }

  :root {
    --header: #1c1c1c;
    --background: #F0F0F0;
    --backgroundInput: #ffffff;
    --border: #CDCDCD;
    --input: #9e9e9e;
    --thead: #5984c0;
  }
`;
