import { createContext } from 'react';
import ApiClient from '../services/api.service';

export interface AppContextModel {
  apiClient: ApiClient;
}

export const AppContext = createContext<AppContextModel>({} as AppContextModel);
