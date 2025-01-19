import { CanvasSearchParams } from '../types';
import { instance } from './http';

export const getCanvasData = async (params: CanvasSearchParams) => {
  const response = await instance.get('/canvases', { params });
  return response;
};
