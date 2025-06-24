import { StyleSheet, Text } from "react-native";

import { Colors } from "config/theme";
import React from "react";

export interface FormErrorMessageProps {
  error?: string | null;
  visible?: boolean;
}

export const FormErrorMessage = ({ error, visible }: FormErrorMessageProps) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: Colors.notification,
    fontSize: 16,
    fontWeight: "600",
    paddingLeft: 2,
    marginBottom: 2,
  },
});
