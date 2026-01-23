import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

type AppNavigation = NativeStackNavigationProp<RootStackParamList>;

const useAppNavigation = () => {
  const navigation = useNavigation<AppNavigation>();

  const goTo = <T extends keyof RootStackParamList>(
    screen: T,
    ...args: RootStackParamList[T] extends undefined
      ? []
      : [RootStackParamList[T]]
  ) => {
    navigation.navigate(screen, ...(args as [RootStackParamList[T]]));
  };

  return { navigation, goTo, goBack: navigation.goBack };
};

export default useAppNavigation;
