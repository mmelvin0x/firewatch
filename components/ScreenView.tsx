import { SafeAreaView, StyleSheet, ViewStyle } from "react-native";

import React from "react";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const ScreenView = ({ children, style }: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(1, 1, 1, .1)", // optional global background
  },
});
