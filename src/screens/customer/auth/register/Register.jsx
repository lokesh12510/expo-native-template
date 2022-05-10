import React, { useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useDispatch } from "react-redux";
import { StatusBar } from "expo-status-bar";
import GlobalStyles from "./../../../../theme/GlobalStyles";
import { Button, TextInput } from "react-native-paper";
import Theme from "../../../../theme";
import Routes from "../../../../constants/routes";
import { useAuthCustomerRegisterMutation } from "../../../../redux/auth/authApi";
import { loading } from "../../../../redux/auth/authSlice";
import { Formik } from "formik";
import StyledTextField from "./../../../../components/common/StyledTextField";
import PrimaryBtn from "./../../../../components/common/PrimaryBtn";
import { LogoDark } from "./../../../../constants/images";
import KeyboardAvoidWrapper from "../../../../components/common/KeyboardAvoider";

const { colors, sizes, fonts } = Theme;

const CustomerRegister = ({ navigation, route }) => {
  const [hidePass, setHidePass] = useState(true);
  const dispatch = useDispatch();

  // authLogin RTK Query
  const [authCustomerRegister, { data, isLoading, isError, error, isSuccess }] =
    useAuthCustomerRegisterMutation();

  if (!isLoading && isSuccess && data) {
    navigation.navigate(Routes.auth.customerLogin, {
      animate: "pop",
    });
  }

  const handleCustomerRegister = (credential, setSubmitting) => {
    authCustomerRegister({ ...credential, attempts: 1 });

    console.log(data, "Query");
    setSubmitting(false);
  };

  const handleRoleChange = () => {
    navigation.navigate(Routes.auth.cookRegister, {
      animate: "slide_from_right",
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      animation: route.params?.animate,
      title: "Customer Registration",
    });
  }, []);

  return (
    <ScrollView>
      <View style={GlobalStyles.formContainer}>
        <StatusBar style="dark" />
        <View style={GlobalStyles.formInnerContainer}>
          <Image
            style={GlobalStyles.pageLogo}
            resizeMode="cover"
            source={LogoDark}
          />
          <Text style={GlobalStyles.subTitle}>Register As</Text>
          {isError && error?.data?.error && (
            <Text
              style={{
                color: colors.primary,
                padding: sizes.padding,
                backgroundColor: `${colors.primary}15`,
                marginBottom: sizes.padding,
              }}
            >
              Invalid Data!Try Again
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
              Customer
            </Button>
            <Button
              style={{ flex: 1 }}
              mode="text"
              color={colors.black}
              onPress={handleRoleChange}
            >
              Cook
            </Button>
          </View>

          <Formik
            initialValues={{ name: "", phone: "", email: "", password: "" }}
            onSubmit={(values, { setSubmitting }) => {
              if (
                values.email == "" ||
                values.password == "" ||
                values.name == "" ||
                values.phone == ""
              ) {
                setSubmitting(false);
              } else {
                handleCustomerRegister(values, setSubmitting);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isSubmitting,
            }) => (
              <View style={GlobalStyles.formArea}>
                <StyledTextField
                  label="Name"
                  icon="person"
                  placeholder="Enter Name"
                  mode="outlined"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />

                <StyledTextField
                  label="Mobile Number"
                  icon="contact"
                  placeholder="Enter Mobile Number"
                  keyboardType="numeric"
                  mode="outlined"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
                <StyledTextField
                  label="Email"
                  icon="mail-outline"
                  placeholder="Enter Email Address"
                  keyboardType="email-address"
                  mode="outlined"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
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
                    isLoading={isSubmitting || isLoading}
                    mode="contained"
                    onPress={handleSubmit}
                    title="Register"
                  />
                </View>

                <View style={GlobalStyles.flexRowCenter}>
                  <Text style={GlobalStyles.subText}>
                    Don't have an account already?
                  </Text>
                  <Button
                    mode="text"
                    onPress={() =>
                      navigation.navigate(Routes.auth.customerLogin, {
                        animate: "pop",
                      })
                    }
                  >
                    Login
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
      </View>
    </ScrollView>
  );
};

export default CustomerRegister;
