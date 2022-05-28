import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export const endpoints = {
  products: '/products',
};

export const params = {
  page: 'page',
  limit: 'per_page',
  id: 'id',
};
