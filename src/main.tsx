import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';
import Child from './components/Child';
import { AppContext, AppContextModel } from './contexts/app.context';
import ApiClient from './services/api.service';
import './styles/app.scss';

const router = createBrowserRouter([
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

const appContext = {
  apiClient: new ApiClient(import.meta.env.VITE_API_URL, ''),
} as AppContextModel;

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <AppContext.Provider value={appContext}>
    <RouterProvider router={router} />
  </AppContext.Provider>
  // </React.StrictMode>
);
