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
