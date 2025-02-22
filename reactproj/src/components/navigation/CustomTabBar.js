import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomTabBar = ({ setActiveTab, activeTab }) => {
  const tabs = [
    { name: 'Home', icon: 'home' },
    { name: 'Skills', icon: 'list' },
    { name: 'Profile', icon: 'user' },
    { name: 'Settings', icon: 'cog' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tabItem, activeTab === tab.name && styles.activeTab]}
          onPress={() => setActiveTab(tab.name)}>
          <Icon name={tab.icon} size={24} color={activeTab === tab.name ? '#3498db' : '#ccc'} />
          <Text style={{ color: activeTab === tab.name ? '#3498db' : '#ccc' }}>{tab.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabItem: {
    alignItems: 'center',
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
  },
});

export default CustomTabBar;