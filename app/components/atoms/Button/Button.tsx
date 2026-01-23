import { ButtonProps } from '@components/atoms/Button/definitions';
import useStyles from '@components/atoms/Button/styles';
import { FunctionComponent, memo } from 'react';
import { Pressable, Text } from 'react-native';

const Button: FunctionComponent<ButtonProps> = ({
  onPress,
  title,
  disabled = false,
}) => {
  // Styles
  const { button, buttonText } = useStyles({ disabled });

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [button, pressed && { opacity: 0.8 }]}
      disabled={disabled}
    >
      <Text style={buttonText}>{title}</Text>
    </Pressable>
  );
};

export default memo(Button);
