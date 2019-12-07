import { createGlobalStyle } from 'styled-components';
import path from 'path';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "DIN Pro";
    src: url(${path.resolve('./fonts/DINPro-Medium.ttf')}) format('truetype');
  }
  body {
    font-family: Arial;
    width: 750px;
    margin: auto;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.25px;
    line-height: 19px;
  }
`

export default GlobalStyle
