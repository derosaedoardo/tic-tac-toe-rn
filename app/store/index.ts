import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  set: (key: string, value: unknown) =>
    AsyncStorage.setItem(key, JSON.stringify(value)),

  get: async <T>(key: string): Promise<T | null> => {
    const v = await AsyncStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : null;
  },

  remove: (key: string) => AsyncStorage.removeItem(key),
};

export const resetStorage = () => AsyncStorage.clear();
