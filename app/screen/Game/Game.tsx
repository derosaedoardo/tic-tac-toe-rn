import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, View } from 'react-native';
import { RootStackParamList } from '../../navigation/types';
import { GameRoute } from './definitions';
import useStyles from './styles';

const Game = () => {
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Game'>>();
  const { board, row: rowStyle, cell } = useStyles();
  const {
    params: { playerX, playerO },
  } = useRoute<GameRoute>();
  const [gameGrid, setGameGrid] = useState<string[][]>(
    Array(3)
      .fill(null)
      .map(() => Array(3).fill('')),
  );
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');

  const [winner, setWinner] = useState<string | null>(null);

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

    const winner = checkWinner();
    if (winner) {
      setWinner(winner);
    }
  }, [gameGrid]);

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

  return (
    <View>
      <View>
        <Text>{t('gameScreen')}</Text>
        <Text>
          {t('playerX')}: {playerX}
        </Text>
        <Text>
          {t('playerO')}: {playerO}
        </Text>
      </View>

      <View style={board}>
        {[0, 1, 2].map(row => (
          <View key={row} style={rowStyle}>
            {[0, 1, 2].map(col => (
              <Pressable
                key={`${row}-${col}`}
                style={cell}
                onPress={() => onCellPress(row, col)}
              >
                <Text>{gameGrid[row][col]}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
      <Pressable
        onPress={() => {
          if (winner) {
            navigation.navigate('SelectUser');
          }
          setGameGrid(
            Array(3)
              .fill(null)
              .map(() => Array(3).fill('')),
          );
        }}
      >
        <Text>
          {winner
            ? `${t('winner')}: ${winner === 'X' ? playerX : playerO}`
            : t('resetGame')}
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(Game);
