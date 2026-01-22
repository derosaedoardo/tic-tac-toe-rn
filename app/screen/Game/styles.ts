import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        board: {
          alignSelf: 'center',
        },
        row: {
          flexDirection: 'row',
        },
        cell: {
          width: 80,
          height: 80,
          borderWidth: 1,
          borderColor: '#222',
        },
      }),
    [],
  );

export default useStyles;
