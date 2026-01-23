import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';

const useStyles = () =>
  useMemo(
    () =>
      StyleSheet.create({
        listCard: {
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          padding: 16,
          marginBottom: 18,
          shadowColor: '#1F6F8B',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 18,
          elevation: 4,
        },
        listTitle: {
          fontSize: 16,
          fontWeight: '700',
          letterSpacing: 0.6,
          color: '#1B1B1B',
          marginBottom: 12,
          textTransform: 'uppercase',
          fontFamily: Platform.select({
            ios: 'Avenir Next',
            android: 'sans-serif-medium',
            default: 'sans-serif',
          }),
        },
        listRow: {
          paddingVertical: 10,
          paddingHorizontal: 12,
          borderRadius: 12,
          backgroundColor: '#FAF7F1',
          marginBottom: 10,
          borderWidth: 1,
          borderColor: '#EFE7DB',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        listName: {
          fontSize: 15,
          fontWeight: '600',
          color: '#1B1B1B',
        },
        listWins: {
          fontSize: 13,
          color: '#1F6F8B',
          fontWeight: '700',
          letterSpacing: 0.4,
        },
        listEmpty: {
          fontSize: 14,
          color: '#7A746B',
          textAlign: 'center',
          paddingVertical: 8,
        },
      }),
    [],
  );

export default useStyles;
