import React, { useContext } from 'react';
import { Product, ProductsWrapper, WrapperProperties } from './ProductWrapper.styles';
import { ListContext } from '../../provides/GlobalContext';

const Products = () => {
  const { dataAPI } = useContext(ListContext);

  return (
    <>
      <WrapperProperties>
        <strong>Id</strong>
        <strong>Name</strong>
        <strong>Year</strong>
      </WrapperProperties>
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
    </>
  );
};

export default Products;
