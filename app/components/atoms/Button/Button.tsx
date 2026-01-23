import { FunctionComponent, memo } from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonProps } from './definitions';
import useStyles from './styles';

const Button: FunctionComponent<ButtonProps> = ({ onPress, title }) => {
  const { button, buttonText } = useStyles();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [button, pressed && { opacity: 0.8 }]}
    >
      <Text style={buttonText}>{title}</Text>
    </Pressable>
  );
};

export default memo(Button);
