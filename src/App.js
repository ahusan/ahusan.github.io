import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog';
import Dashboard, { supportLinks } from './component/dashboard';
import Error404 from './component/error404';
import ProjectDetails from './component/ProjectDetails';
import ProjectsPage from './component/ProjectsPage';

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
      path: '/projects',
      element: <ProjectsPage projects={supportLinks} />,
    },
    {
      path: '/project/:projectId',
      element: <ProjectDetails projects={supportLinks} />,
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
export default App;
