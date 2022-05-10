import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Theme from "../../theme";
import { HelperText, TextInput } from "react-native-paper";

const { colors, sizes, fonts } = Theme;

const StyledTextField = ({ label, mode, icon, helperText, ...props }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <TextInput
        label={label}
        mode={mode}
        outlineColor={colors.lightGray}
        {...props}
      />
      {props.error && (
        <HelperText type="error" visible={props.error}>
          {helperText}
        </HelperText>
      )}
    </View>
  );
};

export default StyledTextField;

const styles = StyleSheet.create({
  textInput: {
    ...fonts.h5,
    backgroundColor: colors.secondary,
    padding: sizes.padding2,
    width: "100%",
    borderRadius: sizes.radius,

    height: 60,
    marginBottom: sizes.margin3,
    color: colors.tertiary,
  },
  label: {
    color: colors.tertiary,
    ...fonts.h6,
  },
  leftIcon: {
    left: 15,
    top: 50,
    position: "absolute",
    zIndex: 1,
  },
  rightIcon: {
    right: 15,
    top: 50,
    position: "absolute",
    zIndex: 1,
  },
});
