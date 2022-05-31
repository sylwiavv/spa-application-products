import { PaginationWrapper } from './Pagination.styles';
import { ReactComponent as Line } from '../../assets/icons/icon-line.svg';
import { ReactComponent as LeftArrow } from '../../assets/icons/icon-left-arr.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/icon-right-arr.svg';
import React from 'react';

const Pagination = ({ onNxtPage, onPevPage, totalPages, page }) => {
  return (
    <PaginationWrapper>
      <button onClick={onPevPage} disabled={page === 1}>
        {page === 1 ? <Line /> : <LeftArrow />}
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button onClick={onNxtPage} disabled={page === totalPages}>
        {page === totalPages ? <Line /> : <RightArrow />}
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;
