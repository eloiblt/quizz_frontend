import { createContext } from 'react';

export interface ColorThemeContextModel {
  toggleColorMode: () => any;
}

export const ColorThemeContext = createContext<ColorThemeContextModel>({} as ColorThemeContextModel);
