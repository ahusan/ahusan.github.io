import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { supportLinks } from './component/dashboard';
import Layout from './components/layout/Layout';
import Dashboard from './component/dashboard';

// Lazy load components for routes that aren't the main dashboard
const Error404 = lazy(() => import('./component/error404'));
const Blog = lazy(() => import('./component/Blog'));
const ProjectDetails = lazy(() => import('./component/ProjectDetails'));
const ProjectsPage = lazy(() => import('./component/ProjectsPage'));

// Loading fallback
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
  </div>
);

// Error fallback
const ErrorFallback: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-red-500">
    <div className="text-xl font-semibold mb-2">Failed to load page</div>
    <p className="mb-4">There was an error loading this page. Please try refreshing.</p>
    <button
      onClick={() => window.location.reload()}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
    >
      Reload Page
    </button>
  </div>
);

// Wrap components with Suspense and error handling
const withSuspense = (
  Component: React.LazyExoticComponent<React.ComponentType<any>> | React.ComponentType<any>,
  props?: any
) => {
  // If it's not a lazy-loaded component, just render it directly in the layout
  if (!('_payload' in Component)) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  }

  // Otherwise use Suspense for lazy-loaded components
  return (
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      </Suspense>
    </Layout>
  );
};

interface AppRoute {
  path: string;
  element: React.ReactNode;
}

const App: React.FC = () => {
  // Determine if we're in production (GitHub Pages) or development
  const isGitHubPages = window.location.hostname === 'ahusan.github.io';

  // Use correct basename for GitHub Pages
  const basename = isGitHubPages ? '/ahusan.github.io' : '';

  const routes: AppRoute[] = [
    {
      path: '/',
      element: withSuspense(Dashboard),
    },
    {
      path: '/blog',
      element: withSuspense(Blog),
    },
    {
      path: '/projects',
      element: withSuspense(ProjectsPage, { projects: supportLinks }),
    },
    {
      path: '/project/:projectId',
      element: withSuspense(ProjectDetails, { projects: supportLinks }),
    },
    {
      path: '*',
      element: withSuspense(Error404),
    },
  ];

  const router = createBrowserRouter(routes, { basename });

  return <RouterProvider router={router} />;
};

export default App;
