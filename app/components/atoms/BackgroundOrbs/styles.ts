import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        background: {
          ...StyleSheet.absoluteFillObject,
          overflow: 'hidden',
        },
        orbOne: {
          position: 'absolute',
          width: 320,
          height: 320,
          borderRadius: 160,
          backgroundColor: '#F9C784',
          opacity: 0.45,
          top: -80,
          right: -80,
        },
        orbTwo: {
          position: 'absolute',
          width: 260,
          height: 260,
          borderRadius: 130,
          backgroundColor: '#A1D6B2',
          opacity: 0.45,
          bottom: -60,
          left: -40,
        },
      }),
    [],
  );

export default useStyles;
