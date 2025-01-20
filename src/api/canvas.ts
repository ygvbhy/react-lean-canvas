import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { CanvasSearchParams } from '../types';
import { instance } from './http';

export const getCanvasData = async (params: CanvasSearchParams) => {
  const payload = Object.assign(
    {
      _sort: 'date',
      _order: 'desc',
    },
    params,
  );
  const response = await instance.get('/canvases', { params: payload });
  return response;
};

export const createCanvas = async () => {
  const newData = {
    title: uuidv4().substring(0, 4) + '_새로운 린 캔버스',
    date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    tag: '신규',
    to: '/canvases/' + uuidv4().substring(0, 4),
  };
  const response = await instance.post('/canvases', newData);
  return response;
};

export const deleteCanvas = async (id: string) => {
  const response = await instance.delete(`/canvases/${id}`);
  return response;
};

export const getCanvasById = async (id: string) => {
  const response = await instance.get(`/canvases/${id}`);
  return response.data;
};

// json-server 자체 기능
export const updateCanvasTitle = async (id: string, title: string) => {
  /**
   * post - 새로운 자원 생성
   * put - 기존 자원 전체 업데이트 또는 새 자원 생성
   * patch - 기존 자원 부분 업데이트
   */
  await instance.patch(`/canvases/${id}`, { title });
};
