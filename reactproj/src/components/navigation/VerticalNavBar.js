import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

export default function VerticalNavBar({ setActiveTab, activeTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleMenu = () => {
    Animated.timing(animation, {
      toValue: isOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsOpen(!isOpen);
  };

  const menuStyle = {
    transform: [
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [-150, 0],
        }),
      },
    ],
  };

  const tabs = ['Home', 'Skills', 'Profile', 'Settings'];

  return (
    <View style={{ position: 'absolute', left: 0, top: 50, zIndex: 10 }}>
      <TouchableOpacity
        onPress={toggleMenu}
        style={{
          padding: 10,
          backgroundColor: '#6200ea',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{isOpen ? 'X' : '☰'}</Text>
      </TouchableOpacity>

      <Animated.View
        style={[
          {
            position: 'absolute',
            left: 0,
            backgroundColor: '#fff',
            padding: 10,
            borderRightWidth: 1,
            borderColor: '#ccc',
            width: 150,
            elevation: 5,
          },
          menuStyle,
        ]}
      >
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => {
              setActiveTab(tab);
              toggleMenu();
            }}
            style={{
              padding: 15,
              backgroundColor: activeTab === tab ? '#6200ea' : 'transparent',
              marginBottom: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: activeTab === tab ? 'white' : 'black', textAlign: 'center' }}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </View>
  );
}
