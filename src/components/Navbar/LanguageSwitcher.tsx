import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const theme = useTheme();

  return (
    <Button
      variant="outlined"
      sx={{ p: 0, minWidth: '30px' }}
      color={theme.palette.mode === 'dark' ? 'secondary' : 'inherit'}
      size="large"
      onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}
    >
      {i18n.language}
    </Button>
  );
}
