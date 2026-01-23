import { useNavigation } from '@react-navigation/native';
import type {
  AppNavigation,
  RootStackParamList,
  RouteWithoutParams,
  RouteWithParams,
} from './types';

const useAppNavigation = () => {
  const navigation = useNavigation<AppNavigation>();

  function goTo<T extends RouteWithoutParams>(screen: T): void;

  function goTo<T extends RouteWithParams>(
    screen: T,
    params: RootStackParamList[T],
  ): void;

  function goTo<T extends keyof RootStackParamList>(
    screen: T,
    params?: RootStackParamList[T],
  ) {
    if (params === undefined) {
      navigation.navigate(screen as RouteWithoutParams);
      return;
    }
    navigation.navigate(screen as RouteWithParams, params as never);
  }

  return { navigation, goTo, goBack: navigation.goBack };
};

export default useAppNavigation;
