import { instance } from './http';

export const getCanvasData = async () => {
  const response = await instance.get('/canvases');
  return response;
};
