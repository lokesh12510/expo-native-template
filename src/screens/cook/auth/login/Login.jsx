import React, { useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import GlobalStyles from "./../../../../theme/GlobalStyles";
import {
  ActivityIndicator,
  Button,
  HelperText,
  TextInput,
} from "react-native-paper";
import Theme from "../../../../theme";
import Routes from "../../../../constants/routes";
import { useAuthCookLoginMutation } from "../../../../redux/auth/authApi";
import { loading } from "../../../../redux/auth/authSlice";
import { Formik } from "formik";
import StyledTextField from "./../../../../components/common/StyledTextField";
import PrimaryBtn from "./../../../../components/common/PrimaryBtn";
import { LogoDark } from "./../../../../constants/images";
import KeyboardAvoidWrapper from "../../../../components/common/KeyboardAvoider";

const { colors, sizes, fonts } = Theme;

const CookLogin = ({ navigation, route }) => {
  const [hidePass, setHidePass] = useState(true);
  const dispatch = useDispatch();

  // authLogin RTK Query
  const [authCookLogin, { data, isLoading, isError, error, isSuccess }] =
    useAuthCookLoginMutation();

  const handleCookLogin = (credential, setSubmitting) => {
    authCookLogin({ ...credential, attempts: 1 });

    console.log(data, "Query");
    setSubmitting(false);
  };

  const handleRoleChange = () => {
    navigation.navigate(Routes.auth.customerLogin, {
      animate: "slide_from_left",
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      animation: route.params?.animate,
      title: "Cook Login",
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={GlobalStyles.formContainer}>
      <StatusBar style="dark" />

      <View style={GlobalStyles.formInnerContainer}>
        <Image
          style={GlobalStyles.pageLogo}
          resizeMode="cover"
          source={LogoDark}
        />
        <Text style={GlobalStyles.subTitle}>Login As</Text>
        {isError && error?.data?.error && (
          <Text
            style={{
              color: colors.black,
              padding: sizes.padding,
              backgroundColor: `${colors.primary}15`,
              marginBottom: sizes.padding,
            }}
          >
            Username or Password does't Exist!
          </Text>
        )}
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            padding: sizes.padding,
          }}
        >
          <Button
            style={{ flex: 1 }}
            mode="text"
            color={colors.black}
            onPress={handleRoleChange}
          >
            Customer
          </Button>
          <Button
            mode="outlined"
            onPress={() => console.log("Pressed")}
            style={{
              borderBottomColor: colors.primary,
              borderWidth: 0,
              borderBottomWidth: 3,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              backgroundColor: `${colors.primary}10`,
            }}
          >
            Cook
          </Button>
        </View>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting }) => {
            if (values.email == "" || values.password == "") {
              setSubmitting(false);
            } else {
              handleCookLogin(values, setSubmitting);
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            touched,
            errors,
            handleSubmit,
            isValid,
            values,
            isSubmitting,
          }) => (
            <View style={GlobalStyles.formArea}>
              <StyledTextField
                label="Email"
                icon="mail-outline"
                placeholder="Enter Email Address"
                keyboardType="email-address"
                mode="outlined"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                error={touched.email && errors.email}
                helperText={"Please Enter Email"}
              />

              <StyledTextField
                label={"Password"}
                icon="lock-closed-outline"
                placeholder="* * * * * * * *"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                isPassword={true}
                secureTextEntry={hidePass}
                setHidePass={setHidePass}
                mode="outlined"
                error={touched.password && errors.password}
                helperText={"Please Enter Password"}
                right={
                  <TextInput.Icon
                    name="eye"
                    color={colors.darkgray}
                    onPress={() => setHidePass((hidePass) => !hidePass)}
                  />
                }
              />
              <View style={{ marginVertical: 15 }}>
                <PrimaryBtn
                  mode="contained"
                  onPress={handleSubmit}
                  title="Login"
                  isLoading={isLoading || isSubmitting}
                />
              </View>

              <View style={GlobalStyles.flexRowCenter}>
                <Text style={GlobalStyles.subText}>
                  Don't have an account already?
                </Text>
                <Button
                  mode="text"
                  onPress={() =>
                    navigation.navigate(Routes.auth.cookRegister, {
                      animate: "pop",
                    })
                  }
                >
                  Register
                </Button>
              </View>
              <Button
                style={{
                  display: "flex",
                  alignItems: "center",
                  ...fonts.body4,
                }}
                color={colors.black}
                mode="text"
                onPress={() => navigation.navigate("Welcome")}
              >
                Forgot Password?
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default CookLogin;
