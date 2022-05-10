import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Theme from "./../theme/index";
import { CustomerTabsScreen } from "./CustomerStack";
import AuthStackScreen from "./AuthStack";
import { CookDrawerScreen } from "./CookStack";
import { NavigationContainer } from "@react-navigation/native";
import { loading } from "../redux/auth/authSlice";

const RootStack = () => {
  const {
    authToken,
    role,
    loading: isLoading,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  console.log(authToken);

  useEffect(() => {}, [authToken, role]);

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color={Theme.colors.primary} />
    </View>
  ) : authToken && role === "ROLE_CUSTOMER" ? (
    <CustomerTabsScreen />
  ) : (authToken && role === "ROLE_CHEF") || role === "ROLE_ADMIN" ? (
    <CookDrawerScreen />
  ) : (
    !isLoading && <AuthStackScreen />
  );
};

export default () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    padding: Theme.sizes.padding3,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
