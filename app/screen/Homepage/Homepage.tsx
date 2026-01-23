import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { Button } from '../../components/atoms/Button';
import { PAGES } from '../../navigation/types';
import useAppNavigation from '../../navigation/useAppNavigation';
import useStyles from './styles';

const Homepage = () => {
  // i18n
  const { t } = useTranslation();

  // Navigation
  const { goTo } = useAppNavigation();

  // Styles
  const { container, background, orbOne, orbTwo, content, title } = useStyles();

  return (
    <View style={container}>
      {/* Background Orbs Design */}
      <View style={background} pointerEvents="none">
        <View style={orbOne} />
        <View style={orbTwo} />
      </View>

      {/* Content */}
      <View style={content}>
        <Text style={title}>{t('title')}</Text>
        <Button title={t('start')} onPress={() => goTo(PAGES.SelectUser)} />
      </View>
    </View>
  );
};

export default memo(Homepage);
