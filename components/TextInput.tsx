import {
  DimensionValue,
  GestureResponderEvent,
  TextInput as RNTextInput,
  View,
} from "react-native";

import { Button } from "./Button";
import { Colors } from "config/theme";
import { Icon } from "./Icon";
import React from "react";

interface TextInputProps
  extends Record<
    string,
    string | boolean | undefined | Function | DimensionValue
  > {
  name?: string;
  placeholder?: string;
  width?: DimensionValue;
  leftIconName?: string;
  rightIcon?: string;
  handlePasswordVisibility?: (event: GestureResponderEvent) => void;
}

export const TextInput = ({
  width = "100%",
  leftIconName,
  rightIcon,
  handlePasswordVisibility,
  ...otherProps
}: TextInputProps) => {
  return (
    <View
      style={{
        backgroundColor: Colors.background,
        borderRadius: 8,
        flexDirection: "row",
        padding: 12,
        paddingTop: 12,
        marginVertical: 12,
        width,
        borderWidth: 1,
        borderColor: Colors.border,
      }}
    >
      {!!leftIconName ? (
        <Icon
          name={leftIconName}
          size={22}
          color={Colors.text}
          style={{ marginRight: 10 }}
        />
      ) : null}

      <RNTextInput
        style={{
          flex: 1,
          width: "100%",
          fontSize: 18,
          color: Colors.text,
        }}
        placeholderTextColor={Colors.text}
        {...otherProps}
      />

      {!!rightIcon && !!handlePasswordVisibility ? (
        <Button title={""} style={{}} onPress={handlePasswordVisibility}>
          <Icon
            name={rightIcon}
            size={22}
            color={Colors.text}
            style={{ marginRight: 10 }}
          />
        </Button>
      ) : null}
    </View>
  );
};
