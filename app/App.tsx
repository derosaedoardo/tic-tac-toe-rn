import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { RootStackParamList } from './navigation/types';
import { Game } from './screen/Game';
import { Homepage } from './screen/Homepage';
import { SelectUser } from './screen/SelectUser';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Homepage}
            options={{ title: 'Tic Tac Toe', headerShown: false }}
          />
          <Stack.Screen
            name="SelectUser"
            component={SelectUser}
            options={{ title: 'Select User', headerShown: false }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{ title: 'Game', headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
