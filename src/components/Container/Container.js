import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import ProductsList from '../ProductsList/ProductsList';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';

const Container = () => {
  const [inputValue, setInputValue] = useState('');
  const [dataAPI, setData] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    if (page !== null) {
      axios
        .get('https://reqres.in/api/products', { params: { per_page: 5, page } })
        .then(({ data }) => {
          setData(data.data);
          setTotalPages(data.total_pages);
        })
        .catch(() => setError(`Sorry we couldn't show you products`));
    }
  }, [page]);

  const handleButtonSearch = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      axios
        .get('https://reqres.in/api/products', { params: { id: inputValue } })
        .then(({ data }) => {
          setData([data.data]);
        })
        .catch(() => setError(`Sorry we couldn't show you products`));
      setInputValue('');
      setPage(null);
    }
  };

  const handleInputOnChange = (e) => {
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

  const reset = () => {
    setPage(1);
  };

  return (
    <>
      <Form value={inputValue} handleInputOnChange={handleInputOnChange} handleButtonSearch={handleButtonSearch} reset={reset} />
      <ProductsList products={dataAPI} />
      {/*{page !== null ? <Pagination page={page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} /> : null}*/}
      {page !== null && <Pagination page={page} totalPages={totalPages} prevPage={onPrevPage} nextPage={onNextPage} />}
    </>
  );
};

export default Container;
