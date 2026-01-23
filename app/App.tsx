import { initI18n } from '@/i18n';
import AppNavigator from '@navigation/AppNavigator';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  // App Ready State
  const [ready, setReady] = useState(false);

  // App Initialization
  useEffect(() => {
    // i18n Initialization
    initI18n().then(() => setReady(true));
  }, []);

  // Render nothing until the app is ready
  if (!ready) return null;

  // Render App
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
