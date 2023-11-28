import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import Home from '../components/Home/Home';
import ErrorPage from '../components/Shared/ErrorPage';

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
        path: 'online',
        element: 'Online play feature is coming !',
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
