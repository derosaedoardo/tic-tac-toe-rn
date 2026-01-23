import { SelectPlayerForm } from '@/components/organisms/SelectPlayerForm';
import { PlayerList } from '@/components/organisms/PlayerList';
import { storage } from '@/store';
import { Container } from '@components/molecules/Container';
import { PAGES } from '@navigation/types';
import useAppNavigation from '@navigation/useAppNavigation';
import { useFocusEffect } from '@react-navigation/native';
import { FunctionComponent, memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Player } from './definitions';
import useStyles from './styles';

const SelectPlayer: FunctionComponent = () => {
  // i18n
  const { t } = useTranslation();

  // Navigation
  const { goTo } = useAppNavigation();

  // Styles
  const { card, title, label, input } = useStyles();

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
    return normalizedPlayerX.toLowerCase() === normalizedPlayerO.toLowerCase();
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
      <PlayerList playerList={playerList} isLoadingPlayers={isLoadingPlayers} />
      <SelectPlayerForm
        playerX={playerX}
        playerO={playerO}
        onChangePlayerX={setPlayerX}
        onChangePlayerO={setPlayerO}
        onSubmit={onButtonPress}
        isButtonDisabled={isButtonDisabled}
      />
    </Container>
  );
};

export default memo(SelectPlayer);
