import { BackgroundOrbs } from '@components/atoms/BackgroundOrbs';
import { FunctionComponent, memo } from 'react';
import { View } from 'react-native';
import { ContainerProps } from './definitions';
import useStyles from './styles';
const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  // Styles
  const { container, content } = useStyles();

  return (
    <View style={container}>
      {/* Background Orbs */}
      <BackgroundOrbs />

      {/* Content */}
      <View style={content}>{children}</View>
    </View>
  );
};

export default memo(Container);
