import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        title: {
          fontSize: 20,
          fontWeight: '600',
        },
        input: {
          height: 40,
          width: 200,
          borderWidth: 1,
          padding: 10,
        },
      }),
    [],
  );

export default useStyles;
