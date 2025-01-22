import axios, { AxiosRequestConfig } from 'axios';

const create = (baseURL: string, options: AxiosRequestConfig) => {
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
};

export const instance = create(
  'https://json-server-vercel-iota-opal.vercel.app',
  {},
);
