import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

function SeventyPercentBox() {
  return (
    <View style={styles.container}>
      {/* Content goes here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%', // Set width to 70% of the parent container (screen)
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
});

export default SeventyPercentBox;
