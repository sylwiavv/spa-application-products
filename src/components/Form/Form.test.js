import { screen, render } from '@testing-library/react';
import React from 'react';
import Form from './Form';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { renderWithThemeProvider } from '../../helpers/renderWithThemeProvider';
import Container from '../Container/Container';

// describe('Form', () => {
it('Input accept only numbers', () => {
  const onInputChange = jest.fn();
  renderWithThemeProvider(<Form value="inputValue" onInputChange={onInputChange} />);
  const inputSearch = screen.getByRole('textbox', { name: 'input-number' });
  userEvent.type(inputSearch, '123');
  // expect(inputSearch).toHaveValue('12');
  expect(onInputChange).toHaveBeenCalledTimes(3);
});

// function MockedInput({ onChange }) {
//   return (
//     <>
//       <input data-testid="my-id" onChange={onChange} />
//     </>
//   );
// }
//
// jest.mock('./Form', () => ({
//   Form: MockedInput,
// }));
//
// it('on change', () => {
//   renderWithThemeProvider(<Container></Container>);
//   const input = screen.getByTestId('my-id');
//   userEvent.type(input, '12');
//   expect(input).toHaveValue('12');
// });
// });
