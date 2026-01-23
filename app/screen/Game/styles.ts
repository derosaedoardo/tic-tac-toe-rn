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
          opacity: 0.35,
          top: -100,
          left: -80,
        },
        orbTwo: {
          position: 'absolute',
          width: 260,
          height: 260,
          borderRadius: 130,
          backgroundColor: '#A1D6B2',
          opacity: 0.35,
          bottom: -80,
          right: -40,
        },
        content: {
          width: '100%',
          maxWidth: 360,
          alignItems: 'center',
        },
        title: {
          fontSize: 24,
          fontWeight: '700',
          letterSpacing: 0.6,
          color: '#1B1B1B',
          textAlign: 'center',
          marginBottom: 12,
          fontFamily: Platform.select({
            ios: 'Georgia',
            android: 'serif',
            default: 'serif',
          }),
        },
        subtitle: {
          fontSize: 14,
          color: '#4A4A4A',
          marginBottom: 4,
        },
        card: {
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 24,
          padding: 18,
          marginTop: 12,
          shadowColor: '#1F6F8B',
          shadowOpacity: 0.12,
          shadowOffset: { width: 0, height: 12 },
          shadowRadius: 24,
          elevation: 5,
        },
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
        actionButton: {
          marginTop: 16,
          alignSelf: 'center',
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
        actionButtonText: {
          color: '#FFFFFF',
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
    [],
  );

export default useStyles;
