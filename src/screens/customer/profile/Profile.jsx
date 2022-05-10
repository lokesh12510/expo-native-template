import { Text, View } from "react-native";
import React from "react";
import PrimaryBtn from "../../../components/common/PrimaryBtn";
import { authReset } from "./../../../redux/auth/authSlice";
import { useDispatch } from "react-redux";
import GlobalStyles from "./../../../theme/GlobalStyles";

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authReset());
  };
  return (
    <View style={GlobalStyles.container}>
      <Text>Profile</Text>
      <PrimaryBtn title="logout" onPress={handleLogout} />
    </View>
  );
};

export default Profile;
