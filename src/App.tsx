import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet } from 'react-router-dom';
import { firstValueFrom, map } from 'rxjs';
import { AppContext } from './contexts/app.context';

function App() {
  const { apiClient } = useContext(AppContext);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    (async () => {
      const results = await firstValueFrom(apiClient.ping().pipe(map(r => r.data)));
      console.log(results);
    })();
  }, [apiClient]);

  return (
    <div className="app-container">
      <h1>{t('title')}</h1>
      <Link to={`contacts/1`}>Child</Link>

      <h3>Current Language: {i18n.language}</h3>

      <button type="button" onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}>
        Change Language
      </button>
      <Outlet />
    </div>
  );
}

export default App;
