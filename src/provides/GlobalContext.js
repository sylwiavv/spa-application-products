import React, { useState, createContext, useEffect } from 'react';
import { api, endpoints, params } from 'api';
import axios from 'axios';

const ListContext = createContext({
  nextPage: () => {},
  prevPage: () => {},
  reset: () => {},
  onChangeHandler: () => {},
  handleKeyDown: () => {},
  handleButtonSearch: () => {},
});

const GlobalContext = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [dataAPI, setData] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [shouldReset, setShouldReset] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/products', { params: { per_page: 5, page } })
      .then(({ data }) => {
        setData(data);
        setTotalPages(data.total_pages);
        setShouldReset(false);
      })
      .catch((error) => {});
  }, [page, shouldReset]);

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

  const reset = () => {
    setShouldReset(true);
    setPage(1);
  };

  const handleButtonSearch = () => {
    if (inputValue !== '') {
      axios
        .get('https://reqres.in/api/products', { params: { id: inputValue } })
        .then(({ data }) => {
          setData({ data: [data.data] });
        })
        .catch((error) => {});
      setInputValue('');
      setShouldReset(false);
    }
  };

  const onChangeHandler = (e) => {
    const result = e.replace(/[^0-9]/g, '');
    setInputValue(result);
  };

  const handleKeyDown = (e) => {
    let inputText = e.target.value;
    if (inputText !== '') {
      if (e.keyCode === 13) {
        setInputValue(inputText);
        handleButtonSearch();
      }
    }
  };

  return (
    <ListContext.Provider
      value={{
        dataAPI,
        setData,
        page,
        setPage,
        totalPages,
        setTotalPages,
        shouldReset,
        setShouldReset,
        inputValue,
        setInputValue,

        nextPage,
        prevPage,
        reset,
        onChangeHandler,
        handleKeyDown,
        handleButtonSearch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export { ListContext, GlobalContext };
