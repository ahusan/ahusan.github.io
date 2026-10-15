import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Project from './pages/Project';
import './styles.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/project/:projectId', element: <Project /> },
      // Old routes: the project index now lives on the home page, writing on the blog.
      { path: '/projects', element: <Navigate to="/#work" replace /> },
      { path: '/blog', element: <Navigate to="/" replace /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
