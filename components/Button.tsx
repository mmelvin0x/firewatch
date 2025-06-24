import { Pressable, StyleSheet, Text } from "react-native";
import React, { ReactNode, useCallback } from "react";

import { Colors } from "config/theme";

export interface ButtonProps {
  children?: ReactNode;
  onPress: any;
  activeOpacity?: number;
  borderless?: boolean;
  title?: string;
  style: Record<string, string | number>;
}

export const Button = ({
  children,
  onPress,
  activeOpacity = 0.3,
  borderless = false,
  title,
  style,
}: ButtonProps) => {
  const _style = useCallback(
    ({ pressed }: { pressed: boolean }) => [
      style,
      { opacity: pressed ? activeOpacity : 1 },
    ],
    [style]
  );

  if (borderless) {
    return (
      <Pressable onPress={onPress} style={_style}>
        <Text style={styles.borderlessButtonText}>{title}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={_style}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderlessButtonText: {
    fontSize: 16,
    color: Colors.borderlessButton,
  },
});
