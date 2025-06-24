import { StyleSheet, Text } from "react-native";

import { Colors } from "config/theme";
import React from "react";
import { ScreenView } from "components/ScreenView";

export const PersonnelScreen = () => (
  <ScreenView style={styles.container}>
    <Text>PersonnelScreen Placeholder</Text>
  </ScreenView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: Colors.text },
});
