
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Settings Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FA',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
});

export default SettingsScreen;