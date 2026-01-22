import { memo } from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, Text, View } from 'react-native';
import type { RootStackParamList } from '../../navigation/types';
import useStyles from './styles';

const Homepage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
  const { container, title, startButton, startButtonText } = useStyles();
  return (
    <View style={container}>
      <Text style={title}>Tic Tac Toe</Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => navigation.navigate('SelectUser')}
        style={({ pressed }) => [
          startButton,
          pressed && { opacity: 0.7 },
        ]}
      >
        <Text style={startButtonText}>Start</Text>
      </Pressable>
    </View>
  );
};

export default memo(Homepage);
