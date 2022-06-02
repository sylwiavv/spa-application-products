import React from 'react';
import { StyledTable, StyledThead, StyledTheadTr, StyledTheadTh, StyledTbody, StyledTbodyTr, StyledTbodyTd } from './ProductsList.styles';
import PropTypes from 'prop-types';

const ProductsList = ({ products, loading }) => {
  return loading && products.length === 0 ? (
    <h3>Loading...</h3>
  ) : (
    <StyledTable>
      <StyledThead>
        <StyledTheadTr>
          <StyledTheadTh>ID</StyledTheadTh>
          <StyledTheadTh>Name</StyledTheadTh>
          <StyledTheadTh>Year</StyledTheadTh>
        </StyledTheadTr>
      </StyledThead>
      <StyledTbody>
        {products.map(({ id, name, color, year }) => (
          <StyledTbodyTr key={id} color={color}>
            <StyledTbodyTd>{id}</StyledTbodyTd>
            <StyledTbodyTd className="name">{name}</StyledTbodyTd>
            <StyledTbodyTd>{year}</StyledTbodyTd>
          </StyledTbodyTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
};

export default ProductsList;
