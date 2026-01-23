import { Button } from '@/components/atoms/Button';
import { Container } from '@/components/molecules/Container';
import { GameGrid } from '@/components/organisms/GameGrid';
import useAppNavigation from '@/navigation/useAppNavigation';
import { storage } from '@/store';
import { useRoute } from '@react-navigation/native';
import {
  FunctionComponent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { GameRoute } from './definitions';
import useStyles from './styles';

const Game: FunctionComponent = () => {
  // i18n
  const { t } = useTranslation();

  const { goBack } = useAppNavigation();

  // Styles
  const { title, subtitle, card } = useStyles();

  // Route Params
  const {
    params: { playerX, playerO },
  } = useRoute<GameRoute>();

  // State
  const [gameGrid, setGameGrid] = useState<string[][]>(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill('')),
  );
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<string | null>(null);

  type Player = { name: string; gameWins: number };

  // Check for winner
  useEffect(() => {
    const checkWinner = () => {
      const lines = [
        // Rows
        [gameGrid[0][0], gameGrid[0][1], gameGrid[0][2]],
        [gameGrid[1][0], gameGrid[1][1], gameGrid[1][2]],
        [gameGrid[2][0], gameGrid[2][1], gameGrid[2][2]],
        // Columns
        [gameGrid[0][0], gameGrid[1][0], gameGrid[2][0]],
        [gameGrid[0][1], gameGrid[1][1], gameGrid[2][1]],
        [gameGrid[0][2], gameGrid[1][2], gameGrid[2][2]],
        // Diagonals
        [gameGrid[0][0], gameGrid[1][1], gameGrid[2][2]],
        [gameGrid[0][2], gameGrid[1][1], gameGrid[2][0]],
      ];

      for (const line of lines) {
        if (line[0] && line[0] === line[1] && line[0] === line[2]) {
          return line[0];
        }
      }
      return null;
    };

    const gameWinner = checkWinner();
    if (gameWinner) {
      setWinner(gameWinner);
    }
  }, [gameGrid]);

  useEffect(() => {
    if (!winner) return;
    const updateWinner = async () => {
      const winnerName = (winner === 'X' ? playerX : playerO).trim();
      if (!winnerName) return;

      const existing = (await storage.get<Player[]>('players')) || [];
      const winnerKey = winnerName.toLowerCase();
      const index = existing.findIndex(
        player => player.name.trim().toLowerCase() === winnerKey,
      );
      const updated =
        index >= 0
          ? existing.map((player, i) =>
              i === index
                ? { ...player, gameWins: player.gameWins + 1 }
                : player,
            )
          : [...existing, { name: winnerName, gameWins: 1 }];

      await storage.set('players', updated);
    };

    updateWinner();
  }, [winner, playerX, playerO]);

  // Handle cell press
  const onCellPress = useCallback(
    (row: number, col: number) => {
      if (winner) {
        return;
      }
      setGameGrid(prevGrid => {
        if (prevGrid[row][col] !== '') {
          return prevGrid;
        }
        const newGrid = prevGrid.map(r => r.slice());
        newGrid[row][col] = currentPlayer;
        setCurrentPlayer(prev => (prev === 'X' ? 'O' : 'X'));
        return newGrid;
      });
    },
    [currentPlayer, winner],
  );

  // Handle reset press
  const onResetPress = useCallback(() => {
    setGameGrid(
      Array(3)
        .fill(null)
        .map(() => Array(3).fill('')),
    );
    setCurrentPlayer('X');
    setWinner(null);
  }, []);

  const isTie = useMemo(() => {
    return gameGrid.flat().every(cell => cell !== '') && !winner;
  }, [gameGrid, winner]);

  return (
    <Container>
      <Text style={title}>
        {winner
          ? `${t('winner')}: ${winner === 'X' ? playerX : playerO}`
          : isTie
          ? t('tie')
          : t('turn', { player: currentPlayer === 'X' ? playerX : playerO })}
      </Text>
      <Text style={subtitle}>
        {t('playerX')}: {playerX}
      </Text>
      <Text style={subtitle}>
        {t('playerO')}: {playerO}
      </Text>
      <View style={card}>
        <GameGrid gameGrid={gameGrid} onCellPress={onCellPress} />
        {winner || isTie ? (
          <Button title={t('resetGame')} onPress={onResetPress} />
        ) : null}
        <Button title={t('goBack')} onPress={goBack} />
      </View>
    </Container>
  );
};

export default memo(Game);
