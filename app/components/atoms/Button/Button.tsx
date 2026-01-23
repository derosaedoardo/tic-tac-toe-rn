import { FunctionComponent, memo } from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonProps } from '@components/atoms/Button/definitions';
import useStyles from '@components/atoms/Button/styles';

const Button: FunctionComponent<ButtonProps> = ({ onPress, title }) => {
  // Styles
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
