import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import Container from '../components/Container/Container';

const Root = () => {
  // useEffect(() => {
  //   // .get(endpoints.products, { page: 1, limit: 2, id: 2 })
  //   api
  //     .get(endpoints.products, { page: 1, limit: 2, id: 2 })
  //     .then(({ data }) => {
  //       setData(data);
  //       // console.log(data);
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //     });
  // }, []);
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
