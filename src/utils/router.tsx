import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Child from '../components/Child';
import ErrorPage from '../components/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Child />,
      },
    ],
  },
]);
