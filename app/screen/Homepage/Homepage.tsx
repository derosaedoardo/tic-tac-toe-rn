import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import useStyles from './styles';

const Homepage = () => {
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const { container, title, startButton, startButtonText } = useStyles();
  return (
    <View style={container}>
      <Text style={title}>{t('title')}</Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => navigation.navigate('SelectUser')}
        style={({ pressed }) => [startButton, pressed && { opacity: 0.7 }]}
      >
        <Text style={startButtonText}>{t('start')}</Text>
      </Pressable>
    </View>
  );
};

export default memo(Homepage);
