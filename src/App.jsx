import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
      path: '/shop',
      element: <Shop />
    }
]);

function App()  {
  return <RouterProvider router={router} />
}

export default App;
