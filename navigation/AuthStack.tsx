import * as React from "react";

import { ForgotPasswordScreen } from "screens/auth/ForgotPasswordScreen";
import { LoginScreen } from "screens/auth/LoginScreen";
import { SignupScreen } from "screens/auth/SignupScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
