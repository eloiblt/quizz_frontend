import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppContext, AppContextModel } from './contexts/app.context';
import ApiClient from './services/api.service';
import './styles/app.scss';
import { router } from './utils/router';

const appContext = {
  apiClient: new ApiClient(import.meta.env.VITE_API_URL, ''),
} as AppContextModel;

import './utils/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <AppContext.Provider value={appContext}>
    <RouterProvider router={router} />
  </AppContext.Provider>
  // </React.StrictMode>
);
