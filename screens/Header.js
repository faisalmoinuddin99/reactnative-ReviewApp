import { View, Text } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
const Header = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Review App" />
    </Appbar.Header>
  );
};

export default Header;
