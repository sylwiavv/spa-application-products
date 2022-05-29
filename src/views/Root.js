import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { api, endpoints, params } from 'api';
import { ProductsWrapper, Product, WrapperProperties } from '../components/ProductWrapper/ProductWrapper.styles';
import axios from 'axios';
import { PaginationWrapper } from '../components/Pagination/Pagination.styles';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { StyledInput, WrapperInput } from '../components/Input/Input.styles';

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
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleButtonSearch = () => {
    axios
      .get('https://reqres.in/api/products', { params: { id: 4 } })
      .then(({ data }) => {
        console.log([data.data]);
        setData({ data: [data.data] });
      })
      .catch((error) => {});
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <h1>Hello</h1>
        {/*{console.log(dataAPI.data.length)}*/}
        {/*<StyledInput />*/}
        <WrapperInput>
          <StyledInput
            id="input-autocomplete"
            type="text"
            placeholder="Choose your color id"
            // onChange={(e) => onChangeHandler(e.target.value)}
            // value={inputText === undefined ? results[activeSuggestion] : inputText}
            // onKeyDown={handleKeyDown}
          />
          <button onClick={handleButtonSearch}>Search</button>
        </WrapperInput>
        <WrapperProperties>
          <strong>Id</strong>
          <strong>Name</strong>
          <strong>Year</strong>
        </WrapperProperties>
        {console.log(dataAPI)}
        <ProductsWrapper>
          {dataAPI.data ? (
            dataAPI.data.map(({ id, name, color, year }) => (
              <Product key={id} color={color}>
                <span>{id}</span>
                <h2>{name}</h2>
                <p>{year}</p>
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
