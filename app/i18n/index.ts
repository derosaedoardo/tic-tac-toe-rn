import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './languages/en';

const STORAGE_KEY = 'app.language';

const resources = { en };

function getDeviceLanguage(): 'en' {
  return 'en';
}

export async function initI18n() {
  const saved = await AsyncStorage.getItem(STORAGE_KEY);
  const initialLng = (saved as 'en') || getDeviceLanguage();

  await i18n.use(initReactI18next).init({
    resources,
    lng: initialLng,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v4',
    react: { useSuspense: false },
  });
}

export async function setAppLanguage(lng: 'en') {
  await AsyncStorage.setItem(STORAGE_KEY, lng);
  await i18n.changeLanguage(lng);
}

export default i18n;
