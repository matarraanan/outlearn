import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

// 🎨 Theme Colors
const primaryColor = "#4A90E2";
const secondaryColor = "#F5F7FA";

// 🏠 Dashboard Screen
const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.dashboardText}>DASHBOARD</Text>
        <Text style={styles.points}>24 🔥</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.pfp}>
          <MaterialIcons name="person" size={40} color="#fff" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileText}>Name: Matar</Text>
          <Text style={styles.profileText}>Level: 5</Text>
        </View>
      </View>

      {/* Achievements */}
      <View style={styles.achievementsContainer}>
        <Text style={styles.sectionHeading}>🏆 Achievements</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.awardsScroll}>
          {["🌟 Excellence", "🚀 Fast Learner", "💡 Innovator"].map((award, index) => (
            <View key={index} style={styles.awardCard}>
              <Text style={styles.awardText}>{award} ✅</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.achievementsContainer}>
  <Text style={styles.sectionHeading}>🎯 Goals</Text>
  <View style={styles.scrollWrapper}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.awardsScroll}>
      {["💪 Master Breathing", "📖 Read 3 Books", "🎨 Improve UI Skills"].map((goal, index) => (
        <View key={index} style={styles.awardCard}>
          <Text style={styles.awardText}>{goal}</Text>
        </View>
      ))}
    </ScrollView>
  </View>
</View>
    </SafeAreaView>
  );
};

// 🌍 Community Screen
const CommunityScreen = () => {
  const [posts, setPosts] = useState([
    { id: "1", user: "Alice", content: "Excited to be here! 🎉", likes: 4 },
    { id: "2", user: "Bob", content: "Just reached level 6! 🔥", likes: 7 },
  ]);
  const [newPost, setNewPost] = useState("");

  // Function to add a new post
  const addPost = () => {
    if (newPost.trim() !== "") {
      setPosts([{ id: Date.now().toString(), user: "You", content: newPost, likes: 0 }, ...posts]);
      setNewPost("");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.heading}>Community 🎭</Text>

      {/* Post Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Share something..."
          value={newPost}
          onChangeText={setNewPost}
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.postButton} onPress={addPost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Post List */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Text style={styles.postUser}>{item.user}:</Text>
            <Text style={styles.postContent}>{item.content}</Text>
            <View style={styles.postActions}>
              <TouchableOpacity onPress={() => likePost(item.id)} style={styles.likeButton}>
                <MaterialIcons name="thumb-up" size={20} color="white" />
                <Text style={styles.likeText}>{item.likes}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

// 📚 Skills Screen
const SkillsScreen = () => {
  const skills = [
    { name: "React Native", progress: 80 },
    { name: "JavaScript", progress: 70 },
    { name: "UI/UX Design", progress: 50 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.heading}>Your Skills 📈</Text>

      {/* Skills List */}
      <FlatList
        data={skills}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.skillCard}>
            <Text style={styles.profileText}>{item.name}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
            </View>
            <Text style={styles.progressText}>{item.progress}%</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

// 📌 Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Dashboard") iconName = "dashboard";
            else if (route.name === "Community") iconName = "group";
            else if (route.name === "Skills") iconName = "build";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// 🎨 Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: secondaryColor },
  
  // Headers
  header: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20, borderBottomWidth: 2, borderColor: primaryColor, paddingBottom: 10 },
  dashboardText: { fontSize: 22, fontWeight: "bold", color: primaryColor },
  points: { fontSize: 20, fontWeight: "bold" },
  heading: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20, color: primaryColor },
  achievementsContainer: { 
    borderWidth: 2, 
    borderColor: "#ffc500",  // Yellow border
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 20, 
    backgroundColor: "#fffbe5" 
  },
  goalsContainer: { 
    borderWidth: 2, 
    borderColor: "#532f19",  // Brown border
    padding: 15, 
    borderRadius: 10, 
    backgroundColor: "#fffbe5" 
  },
  card: { 
    backgroundColor: "#32368d",  // Blue cards
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 10, 
    marginRight: 10, 
    borderWidth: 2, 
    borderColor: "#ffc500" // Yellow border
  },
  cardText: { fontSize: 14, fontWeight: "bold", color: "#fffbe5" },
  // Profile
  profileContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20, borderWidth: 2, borderColor: primaryColor, padding: 10, borderRadius: 10 },
  pfp: { width: 60, height: 60, borderRadius: 30, backgroundColor: primaryColor, justifyContent: "center", alignItems: "center", marginRight: 10 },
  profileText: { fontSize: 16, fontWeight: "500" },

  // Achievements
  achievementsContainer: { borderWidth: 2, borderColor: primaryColor, padding: 15, borderRadius: 10, marginBottom: 20 },

  // Community Input
  inputContainer: { flexDirection: "row", marginBottom: 20, borderWidth: 2, borderColor: primaryColor, padding: 10, borderRadius: 10 },
  input: { flex: 1, padding: 10, fontSize: 16 },
  postButton: { backgroundColor: primaryColor, padding: 10, borderRadius: 5 },
  postButtonText: { color: "white", fontWeight: "bold" },

  // Posts
  postCard: { borderWidth: 2, borderColor: primaryColor, padding: 10, borderRadius: 10, marginBottom: 10 },
  skillCard: { backgroundColor: "#fff", padding: 20, borderRadius: 10, marginBottom: 10, borderWidth: 2, borderColor: primaryColor },
  progressBar: { height: 10, backgroundColor: "#ddd", borderRadius: 5 },
  progressFill: { height: "100%", backgroundColor: primaryColor },
  achievementsContainer: { 
    borderWidth: 2, 
    borderColor: primaryColor, 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 20 
  },
  
  achievementsScrollWrapper: { 
    height: 50, // Ensures a proper container for the scrollable awards
    marginTop: 10 
  },
  
  awardCard: { 
    backgroundColor: "#fff", 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 10, 
    marginRight: 10, 
    borderWidth: 2, 
    borderColor: primaryColor 
  },
  
  awardText: { 
    fontSize: 14, 
    fontWeight: "bold" 
  },
  
});

export default App;
