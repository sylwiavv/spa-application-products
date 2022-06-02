import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { renderWithThemeProvider } from '../../helpers/renderWithThemeProvider';
import Pagination from './Pagination';

describe('Pagination component behavior', () => {
  it('Prev button is disabled after render', () => {
    renderWithThemeProvider(<Pagination page={1} />);
    const buttonPrev = screen.getByTestId('prev-page-button');
    expect(buttonPrev).toBeDisabled();
  });

  it('Test next callback function', () => {
    const onNextPage = jest.fn();
    renderWithThemeProvider(<Pagination onNextPage={onNextPage} page={1} totalPages={5} />);
    const buttonNext = screen.getByTestId('next-page-button');
    userEvent.click(buttonNext);
    expect(onNextPage).toHaveBeenCalledTimes(1);
  });

  it('Test prev callback function', () => {
    const onPrevPage = jest.fn();
    renderWithThemeProvider(<Pagination onPrevPage={onPrevPage} page={2} totalPages={5} />);
    const buttonPrev = screen.getByTestId('prev-page-button');
    userEvent.click(buttonPrev);
    expect(onPrevPage).toHaveBeenCalledTimes(1);
  });

  it('Next button is disabled when on last page', () => {
    const onNextPage = jest.fn();
    renderWithThemeProvider(<Pagination onNextPage={onNextPage} page={5} totalPages={5} />);
    const buttonNext = screen.getByTestId('next-page-button');
    expect(buttonNext).toBeDisabled();
  });

  it('Buttons are not disabled when not on edge pages', () => {
    renderWithThemeProvider(<Pagination page={2} totalPages={5} />);
    const buttonNext = screen.getByTestId('next-page-button');
    const buttonPrev = screen.getByTestId('prev-page-button');
    expect(buttonNext).not.toBeDisabled();
    expect(buttonPrev).not.toBeDisabled();
  });
});
