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

  table {
    max-width: 680px;
  }
  
  th,
  td {
    padding: 8px;
  }
  
  thead > tr,
  tbody > tr {
    display: grid;
    grid-template-columns:
    minmax(50px, 1fr)
    minmax(150px, 3.33fr)
    minmax(150px, 1.67fr);
    text-align: left;
  }
`;
