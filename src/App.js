import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Dashboard from './component/dashboard';
import Error404 from './component/error404';
import Blog from './component/Blog';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
export default App;
