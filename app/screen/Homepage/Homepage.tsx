import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { Button } from '../../components/atoms/Button';
import { PAGES, RootStackParamList } from '../../navigation/types';
import useStyles from './styles';

const Homepage = () => {
  // i18n
  const { t } = useTranslation();

  // Navigation
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, PAGES.Home>>();

  // Styles
  const {
    container,
    background,
    orbOne,
    orbTwo,
    content,
    title,
    startButton,
    startButtonText,
  } = useStyles();

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
        <Button
          title={t('start')}
          onPress={() => navigation.navigate(PAGES.SelectUser)}
        />
      </View>
    </View>
  );
};

export default memo(Homepage);
