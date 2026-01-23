import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { ButtonStylesProps } from './definitions';

const useStyles = ({ disabled }: ButtonStylesProps) =>
  useMemo(
    () =>
      StyleSheet.create({
        button: {
          marginTop: 12,
          alignSelf: 'center',
          paddingVertical: 12,
          paddingHorizontal: 28,
          backgroundColor: disabled ? '#CCCCCC' : '#1F6F8B',
          borderRadius: 999,
          shadowColor: '#1F6F8B',
          shadowOpacity: 0.25,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 20,
          elevation: 6,
        },
        buttonText: {
          color: disabled ? '#999999' : '#FFFFFF',
          fontSize: 14,
          fontWeight: '600',
          letterSpacing: 0.6,
          textTransform: 'uppercase',
          fontFamily: Platform.select({
            ios: 'Avenir Next',
            android: 'sans-serif-medium',
            default: 'sans-serif',
          }),
        },
      }),
    [disabled],
  );

export default useStyles;
