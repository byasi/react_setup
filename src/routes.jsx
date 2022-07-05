import { useRoutes } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';

const Router = () => useRoutes([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      }
    ]
  }
]);

export default Router;