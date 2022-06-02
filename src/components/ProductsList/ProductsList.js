import React from 'react';
import { StyledTable, StyledThead, StyledTheadTr, StyledTheadTh, StyledTbody, StyledTbodyTr, StyledTbodyTd } from './ProductsList.styles';
import PropTypes from 'prop-types';

const ProductsList = ({ products }) => {
  return (
    <StyledTable>
      <StyledThead>
        <StyledTheadTr>
          <StyledTheadTh>ID</StyledTheadTh>
          <StyledTheadTh>Name</StyledTheadTh>
          <StyledTheadTh>Year</StyledTheadTh>
        </StyledTheadTr>
      </StyledThead>
      <StyledTbody>
        {products.length > 0 ? (
          products.map(({ id, name, color, year }) => (
            <StyledTbodyTr key={id} color={color}>
              <StyledTbodyTd>{id}</StyledTbodyTd>
              <StyledTbodyTd className="name">{name}</StyledTbodyTd>
              <StyledTbodyTd>{year}</StyledTbodyTd>
            </StyledTbodyTr>
          ))
        ) : (
          <StyledTbodyTr>
            <StyledTbodyTd>No available products</StyledTbodyTd>
          </StyledTbodyTr>
        )}
      </StyledTbody>
    </StyledTable>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
