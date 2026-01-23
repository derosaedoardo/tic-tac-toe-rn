import { SelectPlayer } from '@/screen/SelectPlayer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Game } from '@screens/Game';
import { Homepage } from '@screens/Homepage';
import { useTranslation } from 'react-i18next';
import { PAGES, RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PAGES.Home}>
        <Stack.Screen
          name={PAGES.Home}
          component={Homepage}
          options={{ title: t('title'), headerShown: false }}
        />
        <Stack.Screen
          name={PAGES.SelectPlayer}
          component={SelectPlayer}
          options={{ title: t('selectPlayerTitle'), headerShown: false }}
        />
        <Stack.Screen
          name={PAGES.Game}
          component={Game}
          options={{ title: t('gameScreen'), headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
