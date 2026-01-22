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
          backgroundColor: '#F5FCFF',
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
        },
        startButton: {
          marginTop: 20,
          padding: 10,
          backgroundColor: '#007AFF',
          borderRadius: 5,
        },
        startButtonText: {
          color: '#FFFFFF',
          fontSize: 18,
        },
      }),
    [],
  );

export default useStyles;
