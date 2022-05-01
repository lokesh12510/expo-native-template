import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Routes from "./../constants/routes";
import Dashboard from "./../screens/cook/dashboard/Dashboard";

// Side Drawer Navigation
const cookDrawer = createDrawerNavigator();

export const CookDrawerScreen = () => (
  <cookDrawer.Navigator>
    <cookDrawer.Screen
      name="Tabs"
      component={CookTabsScreen}
      options={{ drawerLabel: "Home" }}
    />
    <cookDrawer.Screen name={Routes.cook.settings} component={Settings} />
  </cookDrawer.Navigator>
);

// Bottom Tabs Navigation

const cookTabs = createMaterialBottomTabNavigator();
export const CookTabsScreen = () => {
  return (
    <cookTabs.Navigator screenOptions={{ headerShown: false }}>
      <cookTabs.Screen
        name={Routes.cook.dashboard}
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
    </cookTabs.Navigator>
  );
};
