import { Image, ImageProps, StyleSheet } from "react-native";

import React from "react";

export interface LogoProps {
  uri: ImageProps;
}

export const Logo = ({ uri }: LogoProps) => {
  return <Image source={uri} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
