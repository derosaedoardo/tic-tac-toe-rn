import { FunctionComponent, memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { GameGridProps } from './definitions';
import useStyles from './styles';

const GameGrid: FunctionComponent<GameGridProps> = ({
  gameGrid,
  onCellPress,
}) => {
  // Styles
  const { board, row: rowStyle, cell, cellText } = useStyles();

  return (
    <View style={board}>
      {[0, 1, 2].map(row => (
        <View key={row} style={rowStyle}>
          {[0, 1, 2].map(col => (
            <Pressable
              key={`${row}-${col}`}
              style={cell}
              onPress={() => onCellPress(row, col)}
            >
              <Text style={cellText}>{gameGrid[row][col]}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default memo(GameGrid);
