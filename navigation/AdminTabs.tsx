import * as React from "react";

import { ActiveWatchesScreen } from "screens/admin/ActiveWatchesScreen";
import { AdminNotificationsScreen } from "screens/admin/AdminNotificationScreen";
import { HomeScreen } from "screens/HomeScreen";
import { IncidentReviewScreen } from "screens/admin/IncidentReviewScreen";
import { LiveTrackingScreen } from "screens/admin/LiveTrackingScreen";
import { PersonnelScreen } from "screens/admin/PersonnelScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getTabStyles } from "utils/getTabStyles";

const Tab = createBottomTabNavigator();

export const AdminTabs = () => (
  <Tab.Navigator screenOptions={(params) => getTabStyles(params)}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Watches" component={ActiveWatchesScreen} />
    <Tab.Screen name="Tracking" component={LiveTrackingScreen} />
    <Tab.Screen name="Personnel" component={PersonnelScreen} />
    <Tab.Screen name="Incidents" component={IncidentReviewScreen} />
    <Tab.Screen name="Notify" component={AdminNotificationsScreen} />
  </Tab.Navigator>
);
