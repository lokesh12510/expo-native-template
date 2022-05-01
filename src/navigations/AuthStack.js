import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboard from "./../screens/onboard/Onboard";
import CustomerLogin from "./../screens/customer/auth/login/Login";
import CustomerRegister from "./../screens/customer/auth/register/Register";
import CookRegister from "./../screens/cook/auth/register/Register";
import Routes from "./../constants/routes";
import CookLogin from "./../screens/cook/auth/login/Login";

const AuthStack = createNativeStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
    initialRouteName="Welcome"
    screenOptions={{ headerShown: false }}
  >
    <AuthStack.Screen name={"Welcome"} component={Onboard} />
    {/* Customer auth*/}
    <AuthStack.Screen
      name={Routes.auth.customerLogin}
      component={CustomerLogin}
    />
    <AuthStack.Screen
      name={Routes.auth.customerRegister}
      component={CustomerRegister}
    />
    {/* Cook auth*/}
    <AuthStack.Screen name={Routes.auth.cookLogin} component={CookLogin} />
    <AuthStack.Screen
      name={Routes.auth.cookRegister}
      component={CookRegister}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
