import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export const endpoints = {
  products: '/products',
};
