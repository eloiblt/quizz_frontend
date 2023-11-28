import { Container, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { firstValueFrom, map } from 'rxjs';
import { AppContext } from '../contexts/app.context';
import NavBar from './NavBar';

export default function Home() {
  const { apiClient } = useContext(AppContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      const results = await firstValueFrom(apiClient.ping().pipe(map(r => r.data)));
      console.log(results);
    })();
  }, [apiClient]);

  return (
    <>
      <NavBar />
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          mt: 2,
        }}
      >
        <Typography variant="h6">{t('title')}</Typography>
        <Link to={`child/1`}>Child</Link>

        <Outlet />
      </Container>
    </>
  );
}
