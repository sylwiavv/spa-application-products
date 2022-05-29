import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { api, endpoints, params } from 'api';
import { ProductsWrapper, Product } from '../components/ProductWrapper/ProductWrapper.styles';
import axios from 'axios';
import { PaginationWrapper } from '../components/Pagination/Pagination.styles';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { StyledInput } from '../components/Input/Input.styles';

const Root = () => {
  const [dataAPI, setData] = useState([]);

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

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState('');

  useEffect(() => {
    axios
      .get('https://reqres.in/api/products', { params: { per_page: 5, page } })
      .then(({ data }) => {
        setData(data);
        setTotalPages(data.total_pages);
        // console.log(totalPages);
      })
      .catch((error) => {});
  }, [page]);

  const nextPage = () => {
    if (totalPages > page) {
      setPage(page + 1);
    }
    if (totalPages === page) {
      console.log('last');
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    if (page === 1) {
      console.log('pierwsza');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <h1>Hello</h1>
        {/*{console.log(dataAPI.data.length)}*/}
        <StyledInput />
        <ProductsWrapper>
          {dataAPI.data ? (
            dataAPI.data.map(({ id, name, color }) => (
              <Product key={id} color={color}>
                <span>{id}</span>
                <h2>{name}</h2>
              </Product>
            ))
          ) : (
            <h1>No available products</h1>
          )}
        </ProductsWrapper>
        <PaginationWrapper>
          <button onClick={prevPage} disabled={page === 1}>
            <strong>Previous Page</strong>
          </button>
          <span>{page}</span>
          <button onClick={nextPage} disabled={page === totalPages}>
            <strong>Next Page</strong>
          </button>
        </PaginationWrapper>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
