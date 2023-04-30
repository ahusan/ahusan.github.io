import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Dashboard from './component/dashboard';
import Article from './component/article';
import Error404 from './component/error404';

function App(){
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <Dashboard/>
    }
  ])
  return(
      <RouterProvider router={routes} />
  )
}
export default App;
