import { FunctionComponent, memo } from 'react';
import { View } from 'react-native';
import useStyles from './styles';

const BackgroundOrbs: FunctionComponent = () => {
  // Styles
  const { background, orbOne, orbTwo } = useStyles();

  return (
    <View style={background} pointerEvents="none">
      <View style={orbOne} />
      <View style={orbTwo} />
    </View>
  );
};

export default memo(BackgroundOrbs);
