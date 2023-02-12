import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import ProductsList from '../ProductsList/ProductsList';
import { api, endpoints } from '../../api';
import Pagination from '../Pagination/Pagination';

interface Product {
  color: string;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

const Container = () => {
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [productsData, setProductsData] = useState<Array<Product>>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number | null>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const errorMessage: string = `Sorry, we can't fetch products.`;

  useEffect(() => {
    if (page !== null) {
      api
        .get(endpoints.products, { params: { per_page: 5, page } })
        .then(({ data }) => {
          setProductsData(data.data);
          setTotalPages(data.total_pages);
          setLoading(false);
          setError('');
        })
        .catch(() => setError(errorMessage));
    }
  }, [page]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue !== '') {
      api
        .get(endpoints.products, { params: { id: inputValue } })
        .then(({ data }) => {
          setProductsData([data.data as Product]);
        })
        .catch(() => setError(errorMessage));

      setInputValue('');
      setPage(null);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result: number = Number(e.target.value.replace(/[^0-9]/g, ''));
    setInputValue(result);
  };

  const onNextPage = () => {
    if (page)
      if (totalPages > page) {
        setPage(page + 1);
      }
  };

  const onPrevPage = () => {
    if (page)
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
      {error ? (
        error
      ) : (
        <>
          <ProductsList loading={loading} products={productsData} />
          {page && <Pagination page={page} totalPages={totalPages} onPrevPage={onPrevPage} onNextPage={onNextPage} />}
        </>
      )}
    </>
  );
};

export default Container;
