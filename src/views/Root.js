import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Container from '../components/Container/Container';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <h1>Products list</h1>
        <Container />
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
