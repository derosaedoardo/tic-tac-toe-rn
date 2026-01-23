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
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(true);

  const normalizedPlayerX = useMemo(() => playerX.trim(), [playerX]);
  const normalizedPlayerO = useMemo(() => playerO.trim(), [playerO]);

  const onButtonPress = useCallback(() => {
    goTo(PAGES.Game, {
      playerX: normalizedPlayerX,
      playerO: normalizedPlayerO,
    });
  }, [normalizedPlayerX, normalizedPlayerO, goTo]);

  const isButtonDisabled = useMemo(() => {
    if (normalizedPlayerX === '' || normalizedPlayerO === '') {
      return true;
    }
    return (
      normalizedPlayerX.toLowerCase() === normalizedPlayerO.toLowerCase()
    );
  }, [normalizedPlayerX, normalizedPlayerO]);

  useFocusEffect(
    useCallback(() => {
      const load = async () => {
        setIsLoadingPlayers(true);
        setPlayerList([]);
        const stored = await storage.get<Player[]>('players');
        setPlayerList(stored && stored.length > 0 ? stored : []);
        setIsLoadingPlayers(false);
      };
      load();
      setPlayerX('');
      setPlayerO('');
    }, []),
  );

  return (
    <Container>
      <View style={listCard}>
        <Text style={listTitle}>{t('playersList')}</Text>
        {isLoadingPlayers ? (
          <Text style={listEmpty}>{t('loadingPlayers')}</Text>
        ) : playerList.length === 0 ? (
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
