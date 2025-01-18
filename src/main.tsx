import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// 라우터 적용
import { RouterProvider } from 'react-router-dom';
// 라우터 설정
import router from './Router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
