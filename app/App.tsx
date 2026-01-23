import { initI18n } from '@/i18n';
import AppNavigator from '@navigation/AppNavigator';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  // App Ready State
  const [ready, setReady] = useState(false);

  // App Initialization
  useEffect(() => {
    // resetStorage(); // Uncomment to reset storage during development
    const initApp = async () => {
      // i18n Initialization
      try {
        await initI18n();
      } finally {
        setReady(true);
      }
    };
    initApp();
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
