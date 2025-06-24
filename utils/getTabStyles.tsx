import { ParamListBase, RouteProp } from "@react-navigation/native";

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export const getTabStyles = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}): BottomTabNavigationOptions => ({
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    let iconName: keyof typeof Ionicons.glyphMap = "ellipse-outline";

    switch (route.name) {
      // 🔧 Shared
      case "Home":
        iconName = focused ? "home" : "home-outline";
        break;

      // 👷‍♂️ User tabs
      case "Apply":
        iconName = focused ? "clipboard" : "clipboard-outline";
        break;
      case "Start Watch":
        iconName = focused ? "flame" : "flame-outline";
        break;
      case "Report":
        iconName = focused ? "alert-circle" : "alert-circle-outline";
        break;
      case "History":
        iconName = focused ? "time" : "time-outline";
        break;
      case "Profile":
        iconName = focused ? "person" : "person-outline";
        break;

      // 🛠 Admin tabs
      case "Watches":
        iconName = focused ? "eye" : "eye-outline";
        break;
      case "Tracking":
        iconName = focused ? "map" : "map-outline";
        break;
      case "Personnel":
        iconName = focused ? "people" : "people-outline";
        break;
      case "Incidents":
        iconName = focused ? "warning" : "warning-outline";
        break;
      case "Notify":
        iconName = focused ? "notifications" : "notifications-outline";
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: "#ff0000",
  tabBarInactiveTintColor: "#888",
  tabBarStyle: {
    backgroundColor: "#010101",
    borderTopWidth: 1,
    height: 70,
    paddingBottom: 12,
    paddingTop: 6,
  },
  tabBarLabelStyle: {
    fontSize: 12,
  },
  tabBarShowLabel: false,
  headerShown: false,
});
