import { DefaultTheme } from "@react-navigation/native";
import { Dimensions } from "react-native";

// Device width & height
const { width, height } = Dimensions.get("window");

const sizes = {
  // global sizes
  base: 8,
  font: 14,
  radius: 5,
  radius1: 10,
  radius2: 50,
  padding: 10,
  padding2: 12,
  padding3: 16,
  margin: 10,
  margin2: 12,
  margin3: 16,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 35,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

const fonts = {
  largeTitle: {
    fontSize: sizes.largeTitle,
    lineHeight: 55,
  },
  h1: { fontSize: sizes.h1, lineHeight: 36 },
  h2: { fontSize: sizes.h2, lineHeight: 30 },
  h3: { fontSize: sizes.h3, lineHeight: 22 },
  h4: { fontSize: sizes.h4, lineHeight: 22 },
  body1: {
    fontSize: sizes.body1,
    lineHeight: 36,
  },
  body2: {
    fontSize: sizes.body2,
    lineHeight: 30,
  },
  body3: {
    fontSize: sizes.body3,
    lineHeight: 22,
  },
  body4: {
    fontSize: sizes.body4,
    lineHeight: 22,
  },
  body5: {
    fontSize: sizes.body5,
    lineHeight: 22,
  },
};

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#E70000", //red
    secondary: "#fb9209",
    tertiary: "#1F2937",

    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#6D28D9",
    red: "#6D28D9",
    gray: "#5e5f61",
    text: "#454546",
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: "#898C95",
  },
  fonts,
  sizes,
};

export default Theme;
