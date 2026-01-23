import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import { en } from './languages/en';
import { it } from './languages/it';

const STORAGE_KEY = 'app.language';

const resources = {
  it,
  en,
};

function getDeviceLanguage(): 'it' | 'en' {
  const locales = RNLocalize.getLocales();
  const lang = locales?.[0]?.languageCode?.toLowerCase();
  return lang === 'it' ? 'it' : 'en';
}

export async function initI18n() {
  const saved = await AsyncStorage.getItem(STORAGE_KEY);
  const initialLng = (saved as 'it' | 'en') || getDeviceLanguage();

  await i18n.use(initReactI18next).init({
    resources,
    lng: initialLng,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v4',
    react: { useSuspense: false },
  });
}

export async function setAppLanguage(lng: 'it' | 'en') {
  await AsyncStorage.setItem(STORAGE_KEY, lng);
  await i18n.changeLanguage(lng);
}

export default i18n;
