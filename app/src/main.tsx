import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import '../i18n';
import './index.css';

import { LandingPage, ErrorPage, ProcessPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/process',
    element: <Navigate to='/' replace />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/process/:slug',
    element: <ProcessPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
