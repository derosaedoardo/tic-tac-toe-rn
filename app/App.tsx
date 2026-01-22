import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Homepage } from './screen/Homepage';
import { SelectUser } from './screen/SelectUser';
import type { RootStackParamList } from './navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Homepage}
            options={{ title: 'Tic Tac Toe' }}
          />
          <Stack.Screen
            name="SelectUser"
            component={SelectUser}
            options={{ title: 'Select User' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
