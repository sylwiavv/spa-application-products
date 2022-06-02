import React from 'react';
import { render, screen, act, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Root from './Root';

test('App renders without crashing', () => {
  render(<Root />);
});

// test('The input should accept only numbers', () => {
//   render(<Root />);
//   // const inputField = screen.getByPlaceholderText('Enter your color id');
//   const inputField = screen.getByRole('input', { name: 'input-number' });
//
//   console.log(inputField);
//   // userEvent.type(inputField, 'teyh12');
//   // expect(inputField).toHaveValue('12');
// });
//
// test('Search for single product', async () => {
//   render(<Root />);
//   const inputField = screen.getByPlaceholderText('Enter your color id');
//   userEvent.type(inputField, '6');
//   const button = screen.getByRole('button', { name: 'Search' });
//   userEvent.click(button);
//   const product = await screen.findByText('blue turquoise');
//   expect(product).toBeInTheDocument();
//   const productsWrapper = await screen.findByTestId('products-wrapper');
//   expect(productsWrapper.children).toHaveLength(1);
// });
