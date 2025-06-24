import { ActivityIndicator, StyleSheet } from "react-native";

import { Colors } from "config/theme";
import React from "react";
import { ScreenView } from "./ScreenView";

export const LoadingIndicator = () => {
  return (
    <ScreenView style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#ffffff" },
});
