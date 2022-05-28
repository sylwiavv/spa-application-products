import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { api, endpoints, params } from 'api';
import { ProductsWrapper, Product } from '../components/ProductWrapper/ProductWrapper.styles';

const Root = () => {
  const [dataAPI, setData] = useState([]);

  useEffect(() => {
    // .get(endpoints.products, { page: 1, limit: 2, id: 2 })
    api
      .get(endpoints.products)
      .then(({ data }) => {
        setData(data);
        // console.log(data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello</h1>
      {/*{console.log(dataAPI.data.length)}*/}
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
    </ThemeProvider>
  );
};

export default Root;
