import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Loading from './components/Loading';
import { Error, Home, Contact, Code, Photo } from './pages';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Code',
        element: <Code />
      },
      {
        path: '/Photo',
        element: <Photo />
      },
      {
        path: '/Contact',
        element: <Contact />
      }
    ]
  }
]);

let root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Loading />} />
  </StrictMode>
);
