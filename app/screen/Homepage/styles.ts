import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        title: {
          fontSize: 36,
          fontWeight: '700',
          letterSpacing: 1,
          color: '#1B1B1B',
          textAlign: 'center',
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
