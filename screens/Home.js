import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = (props) => {
  return (
    <View style={styles.container}>
      {/* <Text style={props.style}>Home Screen </Text> */}
      <Text style={styles.titleText}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 18,
  },
});
export default Home;
