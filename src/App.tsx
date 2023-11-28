import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppContext, AppContextModel } from './contexts/app.context';
import { ColorThemeContext, ColorThemeContextModel } from './contexts/color-theme.context';
import ApiClient from './services/api.service';

export default function App() {
  const appContext = {
    apiClient: new ApiClient(import.meta.env.VITE_API_URL, ''),
  } as AppContextModel;

  const [themeColor, setThemeColor] = useState<'light' | 'dark'>(
    useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  );

  const colorThemeContext = useMemo(
    () =>
      ({
        toggleColorMode: () => {
          setThemeColor(prevColorTheme => (prevColorTheme === 'light' ? 'dark' : 'light'));
        },
      }) as ColorThemeContextModel,
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeColor,
        },
      }),
    [themeColor]
  );

  return (
    <AppContext.Provider value={appContext}>
      <ColorThemeContext.Provider value={colorThemeContext}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
      </ColorThemeContext.Provider>
    </AppContext.Provider>
  );
}
