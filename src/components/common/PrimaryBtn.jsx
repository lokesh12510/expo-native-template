import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Theme from "../../theme";

const { colors, sizes, fonts } = Theme;

export default function PrimaryBtn(props) {
  const { onPress, title = "Save" } = props;
  return (
    <View>
      <Pressable
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
        onPress={onPress}
        android_ripple={"#000"}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: sizes.radius,
    elevation: 3,
    color: colors.white,
    backgroundColor: colors.primary,
    marginBottom: sizes.margin,
  },
  text: {
    ...fonts.body3,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: colors.white,
    textTransform: "uppercase",
  },
  pressed: {
    opacity: 0.8,
    elevation: 8,
  },
});
