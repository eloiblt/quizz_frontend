import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Child from '../components/Child';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'child/:id',
        element: <Child />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
