import { screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { renderWithThemeProvider } from '../../helpers/renderWithThemeProvider';

it('Input accept only numbers', () => {
  const onInputChange = jest.fn();
  renderWithThemeProvider(<Form value="inputValue" onInputChange={onInputChange} />);
  const inputSearch = screen.getByRole('textbox', { name: 'input-number' });
  userEvent.type(inputSearch, '123');
  expect(onInputChange).toHaveBeenCalledTimes(3);
});
