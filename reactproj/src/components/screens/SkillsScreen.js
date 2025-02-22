import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions, PanResponder, Animated } from "react-native";

const { width } = Dimensions.get("window");
const imageWidth = width * 0.4;
const imageHeight = imageWidth * 1.4;
const images = [
  "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1770&q=80",
];

const ImageTrack = () => {
  const translateX = useState(new Animated.Value(0))[0];
  let prevTranslateX = 0;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      let newTranslateX = prevTranslateX + gestureState.dx;
      translateX.setValue(newTranslateX);
    },
    onPanResponderRelease: () => {
      prevTranslateX = translateX.__getValue();
    },
  });

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Animated.View style={[styles.track, { transform: [{ translateX }] }]}>
        {images.map((src, index) => (
          <Image key={index} source={{ uri: src }} style={styles.image} />
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    overflow: "hidden",
  },
  track: {
    flexDirection: "row",
    gap: 20,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: "cover",
  },
});

export default ImageTrack;
