import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        board: {
          alignSelf: 'center',
          marginTop: 8,
        },
        row: {
          flexDirection: 'row',
        },
        cell: {
          width: 84,
          height: 84,
          borderWidth: 1,
          borderColor: '#D7D1C7',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF7F1',
        },
        cellText: {
          fontSize: 28,
          fontWeight: '700',
          color: '#1F6F8B',
        },
      }),
    [],
  );

export default useStyles;
