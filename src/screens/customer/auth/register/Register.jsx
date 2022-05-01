import { View, Button, Pressable } from "react-native";
import React from "react";
import GlobalStyles from "./../../../../theme/GlobalStyles";
import Routes from "../../../../constants/routes";

const CustomerRegister = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate(Routes.auth.customerLogin, {
      animate: "slide_from_right",
    });
  };
  return (
    <View style={GlobalStyles.container}>
      <Pressable onPress={handleLogin}>
        <Button title="Login" />
      </Pressable>
    </View>
  );
};

export default CustomerRegister;
