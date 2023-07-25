import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../dist/output.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login.tsx';
import LandingPage from './components/LandingPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/login',
    element: <Login/>
  }
]);
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
