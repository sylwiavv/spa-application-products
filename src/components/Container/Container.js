import React, { useEffect, useState } from 'react';
import InputWr from '../Input/InputWr';
import Products from '../ProductWrapper/Products';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';

const Container = () => {
  const [inputValue, setInputValue] = useState('');
  const [dataAPI, setData] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  const onChangeHandler = (e) => {
    const result = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(result);
  };

  const reset = () => {
    setPage(1);
  };

  const handleButtonSearch = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      axios
        .get('https://reqres.in/api/products', { params: { id: inputValue } })
        .then(({ data }) => {
          setData({ data: [data.data] });
        })
        .catch(() => setError(`Sorry we couldn't show you products`));
      setInputValue('');
      setPage(null);
    }
  };

  useEffect(() => {
    if (page !== null) {
      axios
        .get('https://reqres.in/api/products', { params: { per_page: 5, page } })
        .then(({ data }) => {
          setData(data);
          setTotalPages(data.total_pages);
          // console.log(data);
        })
        .catch(() => setError(`Sorry we couldn't show you products`));
    }
  }, [page]);

  const handleKeyDown = (e) => {
    let inputText = e.target.value;
    if (inputText !== '') {
      if (e.keyCode === 13) {
        setInputValue(inputText);
        handleButtonSearch();
      }
    }
  };

  const nextPage = () => {
    if (totalPages > page) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <InputWr value={inputValue} onChange={onChangeHandler} handleButtonSearch={handleButtonSearch} reset={reset} handleKeyDown={handleKeyDown} />
      <Products products={dataAPI} />
      {page !== null ? <Pagination page={page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} /> : null}
    </>
  );
};

export default Container;
