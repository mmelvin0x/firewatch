import { Button, StyleSheet } from "react-native";

import { Colors } from "config/theme";
import React from "react";
import { ScreenView } from "../components/ScreenView";
import { Text } from "react-native";
import { auth } from "config/firebase";
import { signOut } from "firebase/auth";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };
  return (
    <ScreenView>
      <Text style={styles.screenTitle}>Welcome to Firewatch!</Text>
      <Button title="Sign Out" onPress={handleLogout} />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: Colors.text,
    paddingTop: 20,
    textAlign: "center",
  },
});
