import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';
import Dashboard from './component/dashboard';

function App(){
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Dashboard />}>
        {/* <Route path='/' element={<Dashboard />} /> */}
      </Route>
    )
  )
  return(
    <>
      <RouterProvider router={routes} />
    </>
  )
}
export default App;
