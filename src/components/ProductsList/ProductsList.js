import React from 'react';
import { TABLE, TR, THEAD, THEADtr, THEADth, TBODY, TBODYtr, TBODYtd } from './ProductsList.styles';

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

export default ProductsList;
