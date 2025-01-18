import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import CanvasDetail from './pages/CanvasDetail';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/canvas/:id',
        element: <CanvasDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
