import { Button } from '@components/atoms/Button';
import { Container } from '@components/molecules/Container';
import { PAGES } from '@navigation/types';
import useAppNavigation from '@navigation/useAppNavigation';
import { FunctionComponent, memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, View } from 'react-native';
import useStyles from './styles';
const SelectUser: FunctionComponent = () => {
  // i18n
  const { t } = useTranslation();

  // Navigation
  const { goTo } = useAppNavigation();

  // Styles
  const { card, title, label, input } = useStyles();

  // State
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');

  const onButtonPress = useCallback(() => {
    goTo(PAGES.Game, { playerX, playerO });
  }, [playerX, playerO, goTo]);

  const isButtonDisabled = useMemo(() => {
    return playerX.trim() === '' || playerO.trim() === '';
  }, [playerX, playerO]);

  return (
    <Container>
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
        <Button
          title={t('startGame')}
          onPress={onButtonPress}
          disabled={isButtonDisabled}
        />
      </View>
    </Container>
  );
};

export default memo(SelectUser);
