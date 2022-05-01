import { View, Text, Button, Pressable, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import Routes from "../../constants/routes";
import { LinearGradient } from "expo-linear-gradient";
import { authReset } from "./../../redux/auth/authSlice";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import PrimaryBtn from "./../../components/common/PrimaryBtn";

const Onboard = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authReset());
  }, []);

  const handleLogin = () => {
    navigation.navigate(Routes.auth.customerLogin, {
      animate: "slide_from_right",
    });
  };
  const handleRegister = () => {
    navigation.navigate(Routes.auth.customerRegister, {
      animate: "slide_from_right",
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <ImageBackground
          style={styles.bgImage}
          source={{
            uri: "https://homecook.csuat.xyz/static/media/authBg.cbbba23627c8e2901cbb.webp",
          }}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["#00000000", "#000000"]}
            style={styles.overlay}
          >
            <View style={styles.content}>
              <Text style={styles.heroText}>
                Taste our Home food right now!
              </Text>
              <PrimaryBtn title="Sign In" onPress={handleLogin} />
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.subText}>Don't have an account ?</Text>
                <Pressable onPress={handleRegister}>
                  <Text style={styles.linkText}>Sign Up</Text>
                </Pressable>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </>
  );
};

export default Onboard;
