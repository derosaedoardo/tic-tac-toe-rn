import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  SelectUser: undefined;
  Game: { playerX: string; playerO: string };
};

export enum PAGES {
  Home = 'Home',
  SelectUser = 'SelectUser',
  Game = 'Game',
}

export type AppNavigation = NativeStackNavigationProp<RootStackParamList>;

export type RouteWithParams = {
  [K in keyof RootStackParamList]: RootStackParamList[K] extends undefined
    ? never
    : K;
}[keyof RootStackParamList];

export type RouteWithoutParams = {
  [K in keyof RootStackParamList]: RootStackParamList[K] extends undefined
    ? K
    : never;
}[keyof RootStackParamList];
