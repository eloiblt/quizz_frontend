import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/app.scss';
import './utils/i18n';
import { router } from './utils/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
