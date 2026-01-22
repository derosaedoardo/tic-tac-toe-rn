import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../../navigation/types';
import useStyles from './styles';

const SelectUser = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'SelectUser'>
    >();

  const { container, title, input } = useStyles();

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  return (
    <View style={container}>
      <Text style={title}>Select User</Text>
      <View>
        <Text>Player 1:</Text>
        <TextInput
          style={input}
          placeholder="Player 1"
          value={player1}
          onChangeText={setPlayer1}
        />
        <Text>Player 2:</Text>
        <TextInput
          style={input}
          placeholder="Player 2"
          value={player2}
          onChangeText={setPlayer2}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('Game', { player1, player2 })}
      >
        <Text>Start Game</Text>
      </Pressable>
    </View>
  );
};

export default memo(SelectUser);
