import { PaginationWrapper, PaginationWrapperPage, PaginationActualPage, PaginationTotalPages } from './Pagination.styles';
import React from 'react';
import { IconLeftArrow, IconLine, IconRightArrow } from '../Icons';

interface Props {
  page: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const Pagination = ({ onNextPage, onPrevPage, totalPages, page }: Props) => {
  return (
    <PaginationWrapper>
      <button data-testid="prev-page-button" onClick={onPrevPage} disabled={page === 1}>
        {page === 1 ? <IconLine /> : <IconLeftArrow />}
      </button>
      <PaginationWrapperPage>
        <PaginationActualPage>{page}</PaginationActualPage>
        <span>/</span>
        <PaginationTotalPages>{totalPages}</PaginationTotalPages>
      </PaginationWrapperPage>
      <button data-testid="next-page-button" onClick={onNextPage} disabled={page === totalPages}>
        {page === totalPages ? <IconLine /> : <IconRightArrow />}
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;
