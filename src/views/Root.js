import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { MainTemplateWrapper } from '../components/templates/MainTemplate/MainTemplate.styles';
import Container from '../components/Container/Container';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainTemplateWrapper>
        <GlobalStyle />
        <h1>Products list</h1>
        <Container />
      </MainTemplateWrapper>
    </ThemeProvider>
  );
};

export default Root;
