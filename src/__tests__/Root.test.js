import React from 'react';
import { render, screen, act } from '@testing-library/react';

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Root from '../views/Root';

test('App renders without crashing', () => {
  render(<Root />);
});

test('App renders ', () => {
  render(<Root />);
});

test('The input should accept only numbers', () => {
  render(<Root />);
  const inputField = screen.getByPlaceholderText('Enter your color id');
  userEvent.type(inputField, 'teyh12');
  expect(inputField).toHaveValue('12');
});

test('Search for single product', async () => {
  render(<Root />);
  const inputField = screen.getByPlaceholderText('Enter your color id');
  userEvent.type(inputField, '6');
  const button = screen.getByRole('button', { name: 'Search' });
  userEvent.click(button);
  const product = await screen.findByText('blue turquoise');
  expect(product).toBeInTheDocument();
  const productsWrapper = await screen.findByTestId('products-wrapper');
  expect(productsWrapper.children).toHaveLength(1);
});

// test('Table display 5 items per page', async () => {
//   render(<Root />);
//
//     const productsWrapper = await screen.findByTestId('products-wrapper');
//     expect(productsWrapper.children).toHaveLength(8);
// });
