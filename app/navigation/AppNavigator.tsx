import { SelectPlayer } from '@/screen/SelectPlayer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Game } from '@screens/Game';
import { Homepage } from '@screens/Homepage';
import { PAGES, RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PAGES.Home}>
        <Stack.Screen
          name={PAGES.Home}
          component={Homepage}
          options={{ title: 'Tic Tac Toe', headerShown: true }}
        />
        <Stack.Screen
          name={PAGES.SelectPlayer}
          component={SelectPlayer}
          options={{ title: 'Select Player', headerShown: true }}
        />
        <Stack.Screen
          name={PAGES.Game}
          component={Game}
          options={{ title: 'Game', headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
