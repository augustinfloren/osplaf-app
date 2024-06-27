import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";

import Home from './components/Home/Home';
import Cgv from './components/Cgv/Cgv';
import MentionsLegales from './components/MentionsLegales/MentionsLegales';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
      path: '/cgv',
      element: <Cgv/>
    },
    {
      path: "/mentions-legales",
      element: <MentionsLegales />
    }
]);

function App()  {
  return <RouterProvider router={router} />
}

export default App;
