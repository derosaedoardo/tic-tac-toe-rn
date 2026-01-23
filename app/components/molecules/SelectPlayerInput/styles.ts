import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        label: {
          fontSize: 14,
          fontWeight: '600',
          color: '#4A4A4A',
          marginBottom: 6,
        },
        input: {
          height: 44,
          borderWidth: 1,
          borderColor: '#D7D1C7',
          borderRadius: 12,
          paddingHorizontal: 12,
          backgroundColor: '#FAF7F1',
          color: '#1B1B1B',
          marginBottom: 14,
        },
      }),
    [],
  );

export default useStyles;
