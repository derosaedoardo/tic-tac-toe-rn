import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../../navigation/types';
import useStyles from './styles';

const SelectUser = () => {
  const { t } = useTranslation();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'SelectUser'>
    >();

  const { container, title, input } = useStyles();

  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  return (
    <View style={container}>
      <Text style={title}>{t('selectUserTitle')}</Text>
      <View>
        <Text>{t('playerX')}:</Text>
        <TextInput
          style={input}
          placeholder={t('playerX')}
          value={playerX}
          onChangeText={setPlayerX}
        />
        <Text>{t('playerO')}:</Text>
        <TextInput
          style={input}
          placeholder={t('playerO')}
          value={playerO}
          onChangeText={setPlayerO}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Game', { playerX, playerO })}
      >
        <Text>{t('startGame')}</Text>
      </Pressable>
    </View>
  );
};

export default memo(SelectUser);
