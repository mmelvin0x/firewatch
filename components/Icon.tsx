import { StyleProp, TextStyle } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

export interface IconProps {
  name: any;
  size: number;
  color: string;
  style: StyleProp<TextStyle>;
}

export const Icon = ({ name, size, color, style }: IconProps) => {
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      style={style}
    />
  );
};
