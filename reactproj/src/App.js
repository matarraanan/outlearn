import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const colors = {
  primary: "#3498db",
  secondary: "#2980b9",
  accent: "#f39c12",
  background: "#f5f8fa",
  card: "#ffffff",
  text: "#2c3e50",
  textLight: "#7f8c8d",
  success: "#2ecc71",
  border: "#e0e6ed",
};


const Tab = createBottomTabNavigator();


const ProfileHeader = () => (
  <View style={styles.header}>
    <View style={styles.headerContent}>
      <View style={styles.headerLeft}>
        <View style={styles.profilePhoto}>
          <Text style={styles.profilePhotoText}>M</Text>
        </View>
        <View>
          <Text style={styles.headerName}>Matar</Text>
          <Text style={styles.headerSubtitle}>Level 5 </Text>
        </View>
      </View>
      
      <View style={styles.pointsBadge}>
        <MaterialIcons name="local-fire-department" size={20} color="" />
        <Text style={styles.pointsText}>24</Text>
      </View>
    </View>
  </View>
);


const DashboardScreen = () => {
 
  const goals = [
    { id: "1", title: "Master Breathing Techniques", progress: 70, icon: "self-improvement" },
    { id: "2", title: "Read 3 Technical Books", progress: 30, icon: "menu-book" },
    { id: "3", title: "Improve UI Design Skills", progress: 50, icon: "design-services" },
  ];


  const achievements = [
    { id: "1", title: "Excellence Award", icon: "star", date: "Mar 10, 2025" },
    { id: "2", title: "Fast Learner", icon: "speed", date: "Feb 22, 2025" },
    { id: "3", title: "Top Innovator", icon: "lightbulb", date: "Jan 15, 2025" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProfileHeader />
      
      <ScrollView 
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Goals Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="flag" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Current Goals</Text>
          </View>
          
          {goals.map((goal) => (
            <View key={goal.id} style={styles.goalCard}>
              <MaterialIcons name={goal.icon} size={24} color={colors.primary} />
              <View style={styles.goalContent}>
                <Text style={styles.goalTitle}>{goal.title}</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View 
                      style={[styles.progressFill, { width: `${goal.progress}%` }]} 
                    />
                  </View>
                  <Text style={styles.progressText}>{goal.progress}%</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Achievements Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="emoji-events" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Achievements</Text>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.achievementsContainer}
          >
            {achievements.map((achievement) => (
              <View key={achievement.id} style={styles.achievementCard}>
                <View style={styles.achievementIconContainer}>
                  <MaterialIcons name={achievement.icon} size={24} color="white" />
                </View>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDate}>{achievement.date}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const SkillsScreen = () => {
  
  const skills = [
    { name: "less phone usage", progress: 80, icon: "phone-android" },
    { name: "technical", progress: 70, icon: "code" },
    { name: "UI/UX Design", progress: 50, icon: "palette" },  
    { name: "Communication", progress: 75, icon: "merge-type" },
    { name: "Time managment", progress: 55, icon: "storage" },
  ];
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProfileHeader />
      
      <ScrollView 
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
      
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="trending-up" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Your Skills</Text>
          </View>
          
          {skills.map((skill) => (
            <View key={skill.name} style={styles.skillCard}>
              <View style={styles.skillIconContainer}>
                <MaterialIcons name={skill.icon} size={24} color={colors.primary} />
              </View>
              <View style={styles.skillInfo}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View 
                      style={[
                        styles.progressFill, 
                        { width: `${skill.progress}%` },
                        skill.progress > 70 ? { backgroundColor: colors.success } : {}
                      ]} 
                    />
                  </View>
                  <Text style={styles.progressText}>{skill.progress}%</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const CommunityScreen = () => {
  
  const [posts, setPosts] = useState([
    { id: "1", user: "Alice Chen", avatar: "A", content: "Just completed a breathing course! 🎉", likes: 12, time: "2h ago" },
    { id: "2", user: "Robert Kim", avatar: "R", content: "Looking for teammates on the new project challenge. Anyone interested?", likes: 8, time: "4h ago" },
    { id: "3", user: "Sophia Lee", avatar: "S", content: "Just discovered a great resource for learning skills on Youtube. Highly recommend!", likes: 15, time: "6h ago" },
    { id: "4", user: "David Wang", avatar: "D", content: "Anyone attending the upcoming skills workshop next weekend?", likes: 5, time: "1d ago" },
  ]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim() !== "") {
      setPosts([
        { 
          id: Date.now().toString(), 
          user: "Matar", 
          avatar: "M",
          content: newPost, 
          likes: 0, 
          time: "Just now" 
        }, 
        ...posts
      ]);
      setNewPost("");
    }
  };

 
  const likePost = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ProfileHeader />
      
      <ScrollView 
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
  
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="groups" size={24} color={colors.primary} />
            <Text style={styles.sectionTitle}>Community</Text>
          </View>
          
       
          <View style={styles.postInputContainer}>
            <TextInput
              style={styles.postInput}
              placeholder="Share something with the community..."
              placeholderTextColor={colors.textLight}
              value={newPost}
              onChangeText={setNewPost}
              multiline
            />
            <TouchableOpacity 
              style={[styles.postButton, newPost.trim() === "" ? styles.postButtonDisabled : {}]}
              onPress={addPost}
              disabled={newPost.trim() === ""}
            >
              <MaterialIcons name="send" size={20} color="white" />
            </TouchableOpacity>
          </View>
          
       
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.postAvatar}>
                  <Text style={styles.postAvatarText}>{post.avatar}</Text>
                </View>
                <View>
                  <Text style={styles.postUsername}>{post.user}</Text>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
              </View>
              
              <Text style={styles.postContent}>{post.content}</Text>
              
              <TouchableOpacity 
                style={styles.likeButton} 
                onPress={() => likePost(post.id)}
              >
                <MaterialIcons name="thumb-up" size={16} color={colors.primary} />
                <Text style={styles.likeText}>{post.likes}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = 'dashboard';
            } else if (route.name === 'Skills') {
              iconName = 'trending-up';
            } else if (route.name === 'Community') {
              iconName = 'groups';
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textLight,
          tabBarStyle: {
            height: 60,
            paddingBottom: 10,
            paddingTop: 6,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: colors.primary,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  profilePhotoText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  headerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
  },
  pointsBadge: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
  },
  pointsText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 4,
    fontSize: 16,
  },
  contentContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginLeft: 8,
  },
  skillCard: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  skillIconContainer: {
    marginRight: 16,
    justifyContent: "center",
  },
  skillInfo: {
    flex: 1,
  },
  skillName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  progressText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: "500",
    color: colors.textLight,
    width: 38,
  },
  goalCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  goalContent: {
    flex: 1,
    marginLeft: 16,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  achievementsContainer: {
    paddingVertical: 8,
    paddingRight: 8,
  },
  achievementCard: {
    width: 140,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
  },
  achievementIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
    textAlign: "center",
    marginBottom: 6,
  },
  achievementDate: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: "center",
  },
  postInputContainer: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  postInput: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    minHeight: 20,
  },
  postButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
    alignSelf: "flex-end",
  },
  postButtonDisabled: {
    backgroundColor: colors.textLight,
  },
  postCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  postAvatarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  postUsername: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.text,
  },
  postTime: {
    fontSize: 12,
    color: colors.textLight,
  },
  postContent: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    marginBottom: 12,
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: colors.background,
    borderRadius: 16,
  },
  likeText: {
    fontSize: 14,
    color: colors.text,
    marginLeft: 4,
  },
});

export default App;