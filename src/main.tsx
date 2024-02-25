import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Root, ErrorPage, HomePage, UserPage, usersPostLoader } from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, //alt sayfalara error elementi koysaydık bütün sayfada hata vermez navbar kalırdı
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <HomePage />,
      },
      {
        path: "/users/:userId",
        loader: usersPostLoader as any,
        element: <UserPage />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
