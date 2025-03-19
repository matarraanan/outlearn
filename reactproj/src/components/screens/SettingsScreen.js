import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
  
const skills = [
  { id: '1', name: 'JavaScript', description: 'Programming language for the web.' },
  { id: '2', name: 'React Native', description: 'Framework for building native apps.' },
  { id: '3', name: 'Python', description: 'General-purpose programming language.' },
  { id: '4', name: 'Data Structures', description: 'Organizing data efficiently.' },
];

const SkillCard = ({ skill }) => (
  <View style={[styles.card, { width }]}>
    <Text style={styles.skillName}>{skill.name}</Text>
    <Text style={styles.skillDescription}>{skill.description}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skill={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate="fast"
        getItemLayout={(data, index) => ({ length: width, offset: width * index, index })}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContainer: {
    alignItems: 'center',
  },
  card: {
    height: height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  skillName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  skillDescription: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
