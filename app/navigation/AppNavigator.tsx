import { SelectPlayer } from '@/screen/SelectPlayer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Game } from '@screens/Game';
import { Homepage } from '@screens/Homepage';
import { PAGES, RootStackParamList } from './types';
import { useTranslation } from 'react-i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { t } = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={PAGES.Home}>
        <Stack.Screen
          name={PAGES.Home}
          component={Homepage}
          options={{ title: t('title'), headerShown: true }}
        />
        <Stack.Screen
          name={PAGES.SelectPlayer}
          component={SelectPlayer}
          options={{ title: t('selectPlayerTitle'), headerShown: true }}
        />
        <Stack.Screen
          name={PAGES.Game}
          component={Game}
          options={{ title: t('gameScreen'), headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
