import { createGlobalStyle } from "styled-components"; 

import OCRAExtended1 from "./assets/fonts/OCRAExtended.woff";
import OCRAExtended2 from "./assets/fonts/OCRAExtended.woff2";


export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'OCR A Extended';
    src:
      url(${OCRAExtended2}) format('woff2'),
      url(${OCRAExtended1}) format('woff');
  }

  * {
    font-family: "OCR A Extended";
    box-sizing: border-box;
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #7272723a
  }

  main {
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;