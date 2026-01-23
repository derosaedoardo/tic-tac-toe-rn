import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Game } from '../screen/Game';
import { Homepage } from '../screen/Homepage';
import { SelectUser } from '../screen/SelectUser';
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
          name={PAGES.SelectUser}
          component={SelectUser}
          options={{ title: 'Select User', headerShown: true }}
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
