// react query 적용
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// 라우터 적용
import { RouterProvider } from 'react-router-dom';
// 라우터 설정
import router from './Router';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
