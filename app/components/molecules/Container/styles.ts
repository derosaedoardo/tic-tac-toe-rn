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
          backgroundColor: '#F7F2EA',
          paddingHorizontal: 24,
        },
        content: {
          width: '100%',
          maxWidth: 360,
          alignItems: 'center',
        },
      }),
    [],
  );

export default useStyles;
