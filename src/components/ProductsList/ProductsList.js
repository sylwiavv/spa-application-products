import React from 'react';
import { TR } from './ProductsList.styles';

const ProductsList = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map(({ id, name, color, year }) => (
            <TR key={id} color={color}>
              <td color={color}>{id}</td>
              <td>{name}</td>
              <td>{year}</td>
            </TR>
          ))
        ) : (
          <tr>
            <td>No available products</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductsList;
