import { RouteProp, useRoute } from '@react-navigation/native';
import { memo } from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../navigation/types';
import useStyles from './styles';

type GameRoute = RouteProp<RootStackParamList, 'Game'>;

const Game = () => {
  const { board, row: rowStyle, cell } = useStyles();
  const {
    params: { player1, player2 },
  } = useRoute<GameRoute>();
  return (
    <View>
      <View>
        <Text>Game Screen</Text>
        <Text>Player 1: {player1}</Text>
        <Text>Player 2: {player2}</Text>
      </View>

      <View style={board}>
        {[0, 1, 2].map(row => (
          <View key={row} style={rowStyle}>
            {[0, 1, 2].map(col => (
              <View key={`${row}-${col}`} style={cell} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default memo(Game);
