import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import About from "./screens/About";

import Header from "./screens/Header";
import Home from "./screens/Home";
export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
