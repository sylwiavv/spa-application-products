import { PaginationWrapper } from './Pagination.styles';
import { ReactComponent as Line } from '../../assets/icons/icon-line.svg';
import { ReactComponent as LeftArrow } from '../../assets/icons/icon-left-arr.svg';
import { ReactComponent as RightArrow } from '../../assets/icons/icon-right-arr.svg';
import React, { useContext } from 'react';
import { ListContext } from '../../provides/GlobalContext';

const Pagination = () => {
  const { page, totalPages, prevPage, nextPage } = useContext(ListContext);

  return (
    <PaginationWrapper>
      <button onClick={prevPage} disabled={page === 1}>
        {page === 1 ? <Line /> : <LeftArrow />}
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button onClick={nextPage} disabled={page === totalPages}>
        {page === totalPages ? <Line /> : <RightArrow />}
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;
