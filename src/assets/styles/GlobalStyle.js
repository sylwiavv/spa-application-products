import './fonts.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  body {
    margin: 0;
    color: #122332;
  }
  
  html,
  *, *::after, *::before {
    box-sizing: border-box;
  }
  
  body,
  a, button {
    font-family: 'Montserrat', sans-serif; 
  }
`;
