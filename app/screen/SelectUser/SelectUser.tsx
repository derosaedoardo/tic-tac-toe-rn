import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SelectUser = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select User</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default memo(SelectUser);
