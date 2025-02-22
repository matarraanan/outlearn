import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const fetchAndUpdateStreak = async () => {
      try {
        const storedStreak = await AsyncStorage.getItem('streak');
        const newStreak = storedStreak ? parseInt(storedStreak) + 1 : 1;
        setStreak(newStreak);
        await AsyncStorage.setItem('streak', newStreak.toString());
      } catch (error) {
        console.error('Failed to update streak:', error);
      }
    };
    fetchAndUpdateStreak();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Profile Screen</Text>
      <Text style={styles.streakText}>🔥 Streak: {streak} days</Text>
    </View>
  );
};

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
  streakText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#E74C3C',
  },
});

export default ProfileScreen;