import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        title: {
          fontSize: 24,
          fontWeight: '700',
          letterSpacing: 0.6,
          color: '#1B1B1B',
          textAlign: 'center',
          marginBottom: 12,
          fontFamily: Platform.select({
            ios: 'Georgia',
            android: 'serif',
            default: 'serif',
          }),
        },
        subtitle: {
          fontSize: 14,
          color: '#4A4A4A',
          marginBottom: 4,
        },
        card: {
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 24,
          padding: 18,
          marginTop: 12,
          shadowColor: '#1F6F8B',
          shadowOpacity: 0.12,
          shadowOffset: { width: 0, height: 12 },
          shadowRadius: 24,
          elevation: 5,
        },
      }),
    [],
  );

export default useStyles;
