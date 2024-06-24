import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import '../i18n';
import './index.css';

import { Landing, Error, Process } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: '/process',
    element: <Navigate to='/' replace />,
    errorElement: <Error />,
  },
  {
    path: '/process/:slug',
    element: <Process />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
