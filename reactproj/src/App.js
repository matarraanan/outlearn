import React, { useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/screens/HomeScreen';
import SkillsScreen from './components/screens/SkillsScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import VerticalNavBar from './components/navigation/VerticalNavBar';
import CustomTabBar from './components/navigation/CustomTabBar';  

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home': return <HomeScreen />;
      case 'Skills': return <SkillsScreen />;
      case 'Profile': return <ProfileScreen />;
      case 'Settings': return <SettingsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {}
        <VerticalNavBar setActiveTab={setActiveTab} activeTab={activeTab} />

        {}
        {renderScreen()}

        {}
        <CustomTabBar setActiveTab={setActiveTab} activeTab={activeTab} />
      </View>
    </NavigationContainer>
  );
}

