import { PlayerList } from '@/components/organisms/PlayerList';
import { SelectPlayerForm } from '@/components/organisms/SelectPlayerForm';
import { storage } from '@/store';
import { Container } from '@components/molecules/Container';
import { PAGES } from '@navigation/types';
import useAppNavigation from '@navigation/useAppNavigation';
import { useFocusEffect } from '@react-navigation/native';
import { FunctionComponent, memo, useCallback, useMemo, useState } from 'react';
import { Player } from './definitions';

const SelectPlayer: FunctionComponent = () => {
  // Navigation
  const { goTo } = useAppNavigation();

  // State
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(true);

  // Normalized Player Names
  const normalizedPlayerX = useMemo(() => playerX.trim(), [playerX]);
  const normalizedPlayerO = useMemo(() => playerO.trim(), [playerO]);

  // Handler button press
  const onButtonPress = useCallback(() => {
    goTo(PAGES.Game, {
      playerX: normalizedPlayerX,
      playerO: normalizedPlayerO,
    });
  }, [normalizedPlayerX, normalizedPlayerO, goTo]);

  // Disable Button Logic
  const isButtonDisabled = useMemo(() => {
    if (normalizedPlayerX === '' || normalizedPlayerO === '') {
      return true;
    }
    return normalizedPlayerX.toLowerCase() === normalizedPlayerO.toLowerCase();
  }, [normalizedPlayerX, normalizedPlayerO]);

  useFocusEffect(
    useCallback(() => {
      // Load players from storage
      const load = async () => {
        setIsLoadingPlayers(true);
        setPlayerList([]);
        const stored = await storage.get<Player[]>('players');
        setPlayerList(stored && stored.length > 0 ? stored : []);
        setIsLoadingPlayers(false);
      };
      load();

      // Reset selected players when screen is focused
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
