import { StyleSheet, Text } from "react-native";

import { Colors } from "config/theme";
import React from "react";
import { ScreenView } from "components/ScreenView";

export const IncidentReportScreen = () => (
  <ScreenView style={styles.container}>
    <Text>IncidentReportScreen Placeholder</Text>
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
