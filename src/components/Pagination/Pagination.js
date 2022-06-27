import { PaginationWrapper, PaginationWrapperPage, PaginationActualPage, PaginationTotalPages } from './Pagination.styles';
import { ReactComponent as Line } from '../../assets/icons/icon-line.svg';
import { ReactComponent as LeftArrow } from '../../assets/icons/icon-left-arr.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/icon-right-arr.svg';
import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ onNextPage, onPrevPage, totalPages, page }) => {
  return (
    <PaginationWrapper>
      <button data-testid="prev-page-button" onClick={onPrevPage} disabled={page === 1}>
        {page === 1 ? <Line /> : <LeftArrow />}
      </button>
      <PaginationWrapperPage>
        <PaginationActualPage>{page}</PaginationActualPage>
        <span>/</span>
        <PaginationTotalPages>{totalPages}</PaginationTotalPages>
      </PaginationWrapperPage>
      <button data-testid="next-page-button" onClick={onNextPage} disabled={page === totalPages}>
        {page === totalPages ? <Line /> : <RightArrow />}
      </button>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  totalPages: PropTypes.number,
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
};

export default Pagination;
