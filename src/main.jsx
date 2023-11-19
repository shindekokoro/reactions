import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Loading from './components/Loading';
import { Error, Home, Contact, Projects, Resume } from './pages';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App error={<Error />} />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Code',
        element: <Projects type="code" />
      },
      {
        path: '/Photo',
        element: <Projects type="photo" />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Resume',
        element: <Resume />
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
