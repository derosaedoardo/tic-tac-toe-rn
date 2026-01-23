import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, TextInput, View } from 'react-native';
import { PAGES } from '../../navigation/types';
import useAppNavigation from '../../navigation/useAppNavigation';
import useStyles from './styles';

const SelectUser = () => {
  const { t } = useTranslation();
  const { goTo } = useAppNavigation();

  const {
    container,
    background,
    orbOne,
    orbTwo,
    content,
    card,
    title,
    label,
    input,
    startButton,
    startButtonText,
  } = useStyles();

  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  return (
    <View style={container}>
      <View style={background} pointerEvents="none">
        <View style={orbOne} />
        <View style={orbTwo} />
      </View>
      <View style={content}>
        <Text style={title}>{t('selectUserTitle')}</Text>
        <View style={card}>
          <Text style={label}>{t('playerX')}:</Text>
          <TextInput
            style={input}
            placeholder={t('playerX')}
            value={playerX}
            onChangeText={setPlayerX}
          />
          <Text style={label}>{t('playerO')}:</Text>
          <TextInput
            style={input}
            placeholder={t('playerO')}
            value={playerO}
            onChangeText={setPlayerO}
          />
          <Pressable
            onPress={() => goTo(PAGES.Game, { playerX, playerO })}
            style={({ pressed }) => [startButton, pressed && { opacity: 0.8 }]}
          >
            <Text style={startButtonText}>{t('startGame')}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default memo(SelectUser);
