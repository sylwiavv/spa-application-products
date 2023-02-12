import React from 'react';
import { StyledTable, StyledThead, StyledTheadTr, StyledTheadTh, StyledTbody, StyledTbodyTr, StyledTbodyTd } from './ProductsList.styles';

interface Props {
  loading: boolean;
  products: Products[];
}

interface Products {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

const ProductsList = ({ products, loading }: Props) => {
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
        {products.map(({ id, name, color, year }: Products) => (
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

export default ProductsList;
