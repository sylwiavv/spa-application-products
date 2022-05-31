import React from 'react';
import { TR, TD } from './ProductWrapper.styles';

const Products = ({ products }) => {
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
        {products.data ? (
          products.data.map(({ id, name, color, year }) => (
            <TR key={id} color={color}>
              <TD color={color}>{id}</TD>
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

export default Products;
