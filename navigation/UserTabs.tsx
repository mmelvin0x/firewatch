import * as React from "react";

import { ActiveWatchScreen } from "screens/ActiveWatchScreen";
import { ApplyScreen } from "screens/ApplyScreen";
import { HomeScreen } from "screens/HomeScreen";
import { IncidentReportScreen } from "screens/IncidentReportScreen";
import { ProfileScreen } from "screens/ProfileScreen";
import { WatchHistoryScreen } from "screens/WatchHistoryScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getTabStyles } from "utils/getTabStyles";

const Tab = createBottomTabNavigator();

export const UserTabs = () => (
  <Tab.Navigator screenOptions={(params) => getTabStyles(params)}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Apply" component={ApplyScreen} />
    <Tab.Screen name="Start Watch" component={ActiveWatchScreen} />
    <Tab.Screen name="Report" component={IncidentReportScreen} />
    <Tab.Screen name="History" component={WatchHistoryScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);
