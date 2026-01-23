import { FunctionComponent, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { Button } from '../../components/atoms/Button';
import { Container } from '../../components/molecules/Container';
import { PAGES } from '../../navigation/types';
import useAppNavigation from '../../navigation/useAppNavigation';
import useStyles from './styles';

const Homepage: FunctionComponent = () => {
  // i18n
  const { t } = useTranslation();

  // Navigation
  const { goTo } = useAppNavigation();

  // Styles
  const { title } = useStyles();

  return (
    <Container>
      <Text style={title}>{t('title')}</Text>
      <Button title={t('start')} onPress={() => goTo(PAGES.SelectUser)} />
    </Container>
  );
};

export default memo(Homepage);
