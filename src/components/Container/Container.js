import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import ProductsList from '../ProductsList/ProductsList';
import Pagination from '../Pagination/Pagination';
import { api, endpoints } from '../../api';

const Container = () => {
  const [inputValue, setInputValue] = useState('');
  const [dataAPI, setData] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    if (page !== null) {
      api
        .get(endpoints.products, { params: { per_page: 5, page } })
        .then(({ data }) => {
          setData(data.data);
          setTotalPages(data.total_pages);
        })
        .catch(() => setError(`Sorry we couldn't show you products`));
    }
  }, [page]);

  const onSearch = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      api
        .get(endpoints.products, { params: { id: inputValue } })
        .then(({ data }) => {
          setData([data.data]);
        })
        .catch(() => setError(`Sorry we couldn't show you products`));
      setInputValue('');
      setPage(null);
    }
  };

  const onInputChange = (e) => {
    const result = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(result);
  };

  const onNextPage = () => {
    if (totalPages > page) {
      setPage(page + 1);
    }
  };

  const onPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const onReset = () => {
    setPage(1);
  };

  return (
    <>
      <Form value={inputValue} onInputChange={onInputChange} onSearch={onSearch} onReset={onReset} />
      <ProductsList products={dataAPI} />
      {page && <Pagination page={page} totalPages={totalPages} onPrevPage={onPrevPage} onNextPage={onNextPage} />}
    </>
  );
};

export default Container;
