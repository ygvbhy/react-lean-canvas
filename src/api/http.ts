import axios, { AxiosRequestConfig } from 'axios';

const create = (baseURL: string, options: AxiosRequestConfig) => {
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
};

console.log(import.meta.env.VITE_API_BASE_URL);

export const instance = create(import.meta.env.VITE_API_BASE_URL, {});
