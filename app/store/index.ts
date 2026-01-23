import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  set: (key: string, value: unknown) =>
    AsyncStorage.setItem(key, JSON.stringify(value)),

  get: async <T>(key: string): Promise<T | null> => {
    const v = await AsyncStorage.getItem(key);
    if (!v) return null;
    try {
      return JSON.parse(v) as T;
    } catch {
      return null;
    }
  },

  remove: (key: string) => AsyncStorage.removeItem(key),
};

export const resetStorage = () => AsyncStorage.clear();
