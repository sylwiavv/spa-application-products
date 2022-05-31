import { PaginationWrapper, PaginationWrapperPage, PaginationActualPage, PaginationTotalPage } from './Pagination.styles';
import { ReactComponent as Line } from '../../assets/icons/icon-line.svg';
import { ReactComponent as LeftArrow } from '../../assets/icons/icon-prev-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/icon-next-arrow.svg';
import React from 'react';

const Pagination = ({ onNextPage, onPrevPage, totalPages, page }) => {
  return (
    <PaginationWrapper>
      <button onClick={onPrevPage} disabled={page === 1}>
        {page === 1 ? <Line /> : <LeftArrow />}
      </button>
      <PaginationWrapperPage>
        <PaginationActualPage>{page}</PaginationActualPage>
        <PaginationTotalPage>{totalPages}</PaginationTotalPage>
      </PaginationWrapperPage>
      <button onClick={onNextPage} disabled={page === totalPages}>
        {page === totalPages ? <Line /> : <RightArrow />}
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;
