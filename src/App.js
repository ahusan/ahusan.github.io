import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Dashboard from './component/dashboard';
import Error404 from './component/error404';
import { projects } from './data/portfolioData';

const Blog = lazy(() => import('./component/Blog'));
const ProjectDetails = lazy(() => import('./component/ProjectDetails'));
const ProjectsPage = lazy(() => import('./component/ProjectsPage'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
    <div className="animate-pulse flex space-x-4">
      <div className="h-12 w-12 bg-indigo-500 rounded-full"></div>
      <div className="space-y-4">
        <div className="h-4 bg-indigo-500 rounded w-36"></div>
        <div className="h-4 bg-indigo-400 rounded w-80"></div>
      </div>
    </div>
  </div>
);

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/blog',
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <Blog />
        </Suspense>
      ),
    },
    {
      path: '/projects',
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <ProjectsPage projects={projects} />
        </Suspense>
      ),
    },
    {
      path: '/project/:projectId',
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <ProjectDetails projects={projects} />
        </Suspense>
      ),
    },
    {
      path: '*',
      element: <Error404 />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
export default App;
