import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { ListContext, GlobalContext } from 'provides/GlobalContext.js';
import Products from '../components/ProductWrapper/Products';
import InputWr from '../components/Input/InputWr';
import Pagination from '../components/Pagination/Pagination';

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
  const {
    nextPage,
    prevPage,
    reset,
    onChangeHandler,
    handleKeyDown,
    handleButtonSearch,
    dataAPI,
    setData,
    page,
    setPage,
    totalPages,
    setTotalPages,
    shouldReset,
    setShouldReset,
    inputValue,
    setInputValue,
  } = useContext(ListContext);
  console.log(totalPages);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalContext>
        <MainTemplate>
          <h1>Products list</h1>
          <InputWr />
          <Products />
          <Pagination />
        </MainTemplate>
      </GlobalContext>
    </ThemeProvider>
  );
};

export default Root;
