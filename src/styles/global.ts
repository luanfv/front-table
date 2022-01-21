import { createGlobalStyle } from "styled-components";

//Calculo =( size / 1440 ) * 100 vw

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      --background:#F0F0F0;
      --header-background:#1C1C1C;
      --header-table:#5984C0;
      --card-color:#FFFFFF;
      --title-color:#1C1C1C;
      --border-color:#CDCDCD;


      font-size: 1.6vw;
      font-family: 'Roboto', sans-serif;

      @media (min-width: 768px) {
        font-size: 1.25vw;
      }

      @media (min-width: 1024px) {
        font-size: 71.1vw;
      }
    }
  ;
`;

export default Global;