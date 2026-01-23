import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';

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
        content: {
          alignItems: 'center',
        },
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
        startButton: {
          marginTop: 24,
          paddingVertical: 12,
          paddingHorizontal: 28,
          backgroundColor: '#1F6F8B',
          borderRadius: 999,
          shadowColor: '#1F6F8B',
          shadowOpacity: 0.25,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 20,
          elevation: 6,
        },
        startButtonText: {
          color: '#FFFFFF',
          fontSize: 16,
          fontWeight: '600',
          letterSpacing: 0.5,
          textTransform: 'uppercase',
          fontFamily: Platform.select({
            ios: 'Avenir Next',
            android: 'sans-serif-medium',
            default: 'sans-serif',
          }),
        },
      }),
    [],
  );

export default useStyles;
