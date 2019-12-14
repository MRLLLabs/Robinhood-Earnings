import { createGlobalStyle } from 'styled-components';
import path from 'path';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "DINPro";
    width: 750px;
    margin: auto;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.25px;
    line-height: 19px;
  }
`

export default GlobalStyle
