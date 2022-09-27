import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
export default Home;
