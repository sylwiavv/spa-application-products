import React from 'react';
import { render, screen, act, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Root from './Root';

test('App renders without crashing', () => {
  render(<Root />);
});
