import { storage } from '@/store';
import { Button } from '@components/atoms/Button';
import { Container } from '@components/molecules/Container';
import { PAGES } from '@navigation/types';
import useAppNavigation from '@navigation/useAppNavigation';
import { useFocusEffect } from '@react-navigation/native';
import { FunctionComponent, memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextInput, View } from 'react-native';
import { Player } from './definitions';
import useStyles from './styles';
const SelectUser: FunctionComponent = () => {
  // i18n
  const { t } = useTranslation();

  // Navigation
  const { goTo } = useAppNavigation();

  // Styles
  const {
    card,
    title,
    label,
    input,
    listCard,
    listTitle,
    listRow,
    listName,
    listWins,
    listEmpty,
  } = useStyles();

  // State
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [playerList, setPlayerList] = useState<Player[]>([]);

  const onButtonPress = useCallback(() => {
    goTo(PAGES.Game, { playerX, playerO });
  }, [playerX, playerO, goTo]);

  const isButtonDisabled = useMemo(() => {
    return playerX.trim() === '' || playerO.trim() === '';
  }, [playerX, playerO]);

  const loadPlayers = useCallback(() => {
    const load = async () => {
      const stored = await storage.get<Player[]>('players');
      if (stored && stored.length > 0) {
        setPlayerList(stored);
        return;
      }
      const initialPlayers: Player[] = [];
      await storage.set('players', initialPlayers);
      setPlayerList(initialPlayers);
    };
    load();
  }, []);

  useFocusEffect(loadPlayers);

  return (
    <Container>
      <View style={listCard}>
        <Text style={listTitle}>{t('playersList')}</Text>
        {playerList.length === 0 ? (
          <Text style={listEmpty}>{t('noPlayers')}</Text>
        ) : (
          playerList.map((player, index) => (
            <View key={index} style={listRow}>
              <Text style={listName}>{player.name}</Text>
              <Text style={listWins}>
                {t('wins')}: {player.gameWins}
              </Text>
            </View>
          ))
        )}
      </View>

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
