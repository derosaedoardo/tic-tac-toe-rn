import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        card: {
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 24,
          padding: 20,
          shadowColor: '#1F6F8B',
          shadowOpacity: 0.12,
          shadowOffset: { width: 0, height: 12 },
          shadowRadius: 24,
          elevation: 5,
        },
        title: {
          fontSize: 28,
          fontWeight: '700',
          letterSpacing: 0.8,
          color: '#1B1B1B',
          textAlign: 'center',
          marginBottom: 16,
          fontFamily: Platform.select({
            ios: 'Georgia',
            android: 'serif',
            default: 'serif',
          }),
        },
      }),
    [],
  );

export default useStyles;
