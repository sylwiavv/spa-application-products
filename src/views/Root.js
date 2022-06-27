import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import Container from '../components/Container/Container';
import { MainTemplateWrapper } from '../components/templates/MainTemplate/MainTemplate.styles';

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
