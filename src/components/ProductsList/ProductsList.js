import React from 'react';
import { TABLE, THEAD, THEADtr, THEADth, TBODY, TBODYtr, TBODYtd } from './ProductsList.styles';
import PropTypes from 'prop-types';

const ProductsList = ({ products }) => {
  return (
    <TABLE>
      <THEAD>
        <THEADtr>
          <THEADth>ID</THEADth>
          <THEADth>Name</THEADth>
          <THEADth>Year</THEADth>
        </THEADtr>
      </THEAD>
      <TBODY>
        {products.length > 0 ? (
          products.map(({ id, name, color, year }) => (
            <TBODYtr key={id} color={color}>
              <TBODYtd>{id}</TBODYtd>
              <TBODYtd className="name">{name}</TBODYtd>
              <TBODYtd>{year}</TBODYtd>
            </TBODYtr>
          ))
        ) : (
          <TBODYtr>
            <TBODYtd>No available products</TBODYtd>
          </TBODYtr>
        )}
      </TBODY>
    </TABLE>
  );
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
